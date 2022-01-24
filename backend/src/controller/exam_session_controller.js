const ExamSession = require("../models/ExamSession");
const {
  missing_param_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");

class ExamSessionController {
  async getOne(req, res) {
    console.log("Getting Exam Session...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    ExamSession.findOne({ where: { id: req.params.id } }).then((session) => {
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
        success_response(res, session, "Get One Data Successful!");
      }
    );
  }

  async getAll(req, res) {
    console.log("Getting All Active Sessions...");

    ExamSession.findAll({ where: { status: 1 } }).then((sessions) => {
      success_response(res, sessions, "Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Exam Session...");

    if (!validate_required_columns(req, ExamSession, ["is_logged", "status"])) {
      missing_param_response(res);
      return;
    }

    const new_session = await ExamSession.create({
      email: req.body.email,
      start_date: req.body.start_date,
      finish_date: req.body.finish_date,
      duration: req.body.duration,
      token: req.body.token,
    });

    success_response(res, new_session.toJSON(), "Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Exam Session...");

    if (
      !validate_required_columns(
        req,
        ExamSession,
        ["is_logged", "status"],
        ["updating_id"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    ExamSession.findOne({ where: { id: req.body.updating_id } }).then(
      (session) => {
        session.set({
          email: req.body.email,
          start_date: req.body.start_date,
          finish_date: req.body.finish_date,
          duration: req.body.duration,
          token: req.body.token,
        });
        session.save();

        success_response(res, session?.toJSON(), "Update successful!");
      }
    );
  }
}

module.exports = ExamSessionController;
