const ExamSession = require("../models/ExamSession");
const {
  missing_param_response,
  data_not_found_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");
const short = require("short-uuid");
const TestResult = require("../models/TestResult");
const ExamSessionTest = require("../models/ExamSessionTest");
const Registrant = require("../models/Registrant");

class ExamSessionController {
  async getOne(req, res) {
    console.log("Getting Exam Session...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    ExamSession.findOne({ where: { id: req.params.id } }).then((session) => {
      if (!session) {
        data_not_found_response(res);
        return;
      }

      delete session.dataValues.is_admin;

      success_response(res, session, "Get One Data Successful!");
    });
  }

  async getByEmail(req, res) {
    console.log("Getting Exam Session By Email...");

    if (!req.params.email) {
      missing_param_response(res);
      return;
    }

    ExamSession.findOne({ where: { email: req.params.email } }).then(
      (session) => {
        if (!session) {
          data_not_found_response(res);
          return;
        }

        delete session.dataValues.is_admin;

        success_response(res, session, "Get One Data Successful!");
      }
    );
  }

  async getAll(req, res) {
    console.log("Getting All Active Sessions...");

    ExamSession.findAll({ where: { status: 1 } }).then((sessions) => {
      if (sessions.length == 0) {
        data_not_found_response(res);
        return;
      }

      for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].is_admin) delete sessions[i];
        else delete sessions[i].dataValues.is_admin;
      }

      success_response(res, sessions, "Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Exam Session...");

    if (
      !validate_required_columns(
        req,
        ExamSession,
        ["is_logged", "status", "test_token", "auth_token", "is_admin"],
        ["tests"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    const emails = req.body.email;
    let es_test_bulk_data = [];
    let test_res_bulk_data = [];
    let new_sessions = [];
    for (let i = 0; i < emails.length; i++) {
      let test_key = short.generate();
      let user_key = short.generate();
      let new_session = await ExamSession.create({
        email: emails[i],
        start_date: req.body.start_date,
        finish_date: req.body.finish_date,
        duration: req.body.duration,
        test_token: test_key,
        auth_token: user_key,
      });
      new_sessions.push(new_session);

      for (let i = 0; i < req.body.tests.length; i++) {
        const test = req.body.tests[i];
        es_test_bulk_data.push({
          exam_session_id: new_session.id,
          test_id: test,
        });

        test_res_bulk_data.push({
          test_id: test,
          exam_session: new_session.id,
          start_date: req.body.start_date,
          finish_date: req.body.finish_date,
        });
      }
    }

    ExamSessionTest.bulkCreate(es_test_bulk_data);
    TestResult.bulkCreate(test_res_bulk_data);

    Registrant.findAll().then(async (regs) => {
      for (let i = 0; i < emails.length; i++) {
        let has_reg = regs.find((r) => r.email == emails[i]);
        if (!has_reg) {
          await Registrant.create({
            email: emails[i],
            biodata: "",
          });
        }
      }

      success_response(res, new_sessions, "Create Successful!");
    });
  }

  async update(req, res) {
    console.log("Updating A Exam Session...");

    if (
      !validate_required_columns(
        req,
        ExamSession,
        ["is_logged", "status", "test_token", "auth_token", "is_admin"],
        ["updating_id"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    ExamSession.findOne({ where: { id: req.body.updating_id } }).then(
      (session) => {
        if (!session) {
          data_not_found_response(res);
          return;
        }

        session.set({
          email: req.body.email,
          start_date: req.body.start_date,
          finish_date: req.body.finish_date,
          duration: req.body.duration,
        });
        session.save();

        delete session.dataValues.is_admin;

        success_response(res, session?.toJSON(), "Update successful!");
      }
    );
  }

  async openTest(req, res) {
    console.log("Open Test for Exam Session...");

    if (
      !req.body.tests ||
      !req.body.id ||
      !req.body.start_date ||
      !req.body.finish_date ||
      !req.body.duration
    ) {
      missing_param_response(res);
      return;
    }

    ExamSession.findOne({ where: { id: req.body.id } }).then((session) => {
      if (!session) {
        data_not_found_response(res);
        return;
      }

      session.set({
        start_date: req.body.start_date,
        finish_date: req.body.finish_date,
        duration: req.body.duration,
      });
      session.save();

      delete session.dataValues.is_admin;

      ExamSessionTest.findAll({ where: { exam_session_id: session.id } }).then(
        async (tests) => {
          let tests_id = req.body.tests;

          let tests_to_create = [];
          for (let i = 0; i < tests_id.length; i++) {
            tests_to_create.push({
              exam_session_id: session.id,
              test_id: tests_id[i],
            });
          }

          // get test id to create
          for (let i = 0; i < tests_id.length; i++) {
            for (let j = 0; j < tests.length; j++) {
              if (tests_id[i] == tests[j].test_id) {
                tests_to_create = tests_to_create.filter(
                  (t) => t.test_id != tests_id[i]
                );

                break;
              }
            }
          }

          // get test to nonactivate
          let tests_to_update = tests.filter((x) =>
            tests_id.includes(parseInt(x.test_id))
          );

          for (let i = 0; i < tests_to_update.length; i++) {
            tests_to_update[i].set({
              status: 0,
            });
            await tests_to_update[i].save();
          }

          await ExamSessionTest.bulkCreate(tests_to_create);

          success_response(res, session?.toJSON(), "Update successful!");
        }
      );
    });
  }

  async refresh_test_token(req, res) {
    console.log("Refreshing Exam Session Test Token...");

    if (!req.body.id) {
      missing_param_response(res);
      return;
    }

    ExamSession.findOne({ where: { id: req.body.id } }).then((session) => {
      if (!session) {
        data_not_found_response(res);
        return;
      }

      const test_key = short.generate();
      session.set({
        test_token: test_key,
      });
      session.save();

      delete session.dataValues.is_admin;

      success_response(res, session?.toJSON(), "Refresh Token successful!");
    });
  }
}

module.exports = ExamSessionController;
