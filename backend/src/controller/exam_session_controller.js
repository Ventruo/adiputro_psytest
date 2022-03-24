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

      success_response(res, sessions, "Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Exam Session...");

    if (
      !validate_required_columns(
        req,
        ExamSession,
        ["is_logged", "status", "test_token", "auth_token"],
        ["tests"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    const test_key = short.generate();
    const user_key = short.generate();
    const new_session = await ExamSession.create({
      email: req.body.email,
      start_date: req.body.start_date,
      finish_date: req.body.finish_date,
      duration: req.body.duration,
      test_token: test_key,
      auth_token: user_key,
    });

    let es_test_bulk_data = [];
    let test_res_bulk_data = [];
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
    ExamSessionTest.bulkCreate(es_test_bulk_data);
    TestResult.bulkCreate(test_res_bulk_data);

    Registrant.findOne({ where: { email: req.body.email } }).then((reg) => {
      if (!reg) {
        await Registrant.create({
          email: req.body.email,
          biodata: "",
        });
      }

      success_response(res, new_session.toJSON(), "Create Successful!");
    });
  }

  async update(req, res) {
    console.log("Updating A Exam Session...");

    if (
      !validate_required_columns(
        req,
        ExamSession,
        ["is_logged", "status", "test_token", "auth_token"],
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

        success_response(res, session?.toJSON(), "Update successful!");
      }
    );
  }

  // TODO: Tambah function utk update Test apa yang bisa dibuka lagi utk sebuah exam session
  // TODO: Kalau test nya ada dibiairn, kalau test gaada dihapus, kalau test baru dibuat

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

      success_response(res, session?.toJSON(), "Refresh Token successful!");
    });
  }
}

module.exports = ExamSessionController;
