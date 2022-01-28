const TestResult = require("../models/TestResult");
const {
  missing_param_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");
const ExamSession = require("../models/ExamSession");

class TestResultController {
  async getOne(req, res) {
    console.log("Getting Test Result...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    TestResult.findOne({ where: { id: req.params.id } }).then((result) => {
      success_response(res, result, "Get One Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Test Results...");

    TestResult.findAll({ where: { status: 1 } }).then((results) => {
      success_response(res, results, "Get All Data Successful!");
    });
  }

  async getByTest(req, res) {
    console.log("Getting Test Result By Test...");

    if (!req.params.test_id) {
      missing_param_response(res);
      return;
    }

    if (!req.query.email) {
      TestResult.findAll({
        where: {
          test_id: req.params.test_id,
        },
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
      });
    } else {
      TestResult.findAll({
        where: {
          test_id: req.params.test_id,
        },
        include: [
          {
            model: ExamSession,
            where: {
              email: req.query.email,
            },
          },
        ],
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
      });
    }
  }

  async create(req, res) {
    console.log("Creating A New Test Result...");

    if (!validate_required_columns(req, TestResult, ["status"])) {
      missing_param_response(res);
      return;
    }

    const new_result = await TestResult.create({
      test_id: req.body.test_id,
      exam_session: req.body.exam_session,
      start_date: req.body.start_date,
      finish_date: req.body.finish_date,
    });

    success_response(res, new_result.toJSON(), "Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Test Result...");

    if (
      !validate_required_columns(req, TestResult, ["status"], ["updating_id"])
    ) {
      missing_param_response(res);
      return;
    }

    TestResult.findOne({ where: { id: req.body.updating_id } }).then(
      (result) => {
        result.set({
          test_id: req.body.test_id,
          exam_session: req.body.exam_session,
          start_date: req.body.start_date,
          finish_date: req.body.finish_date,
        });
        result.save();

        success_response(res, result?.toJSON(), "Update successful!");
      }
    );
  }
}

module.exports = TestResultController;
