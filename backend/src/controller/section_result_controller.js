const SectionResult = require("../models/SectionResult");
const {
  missing_param_response,
  data_not_found_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");
const ExamSession = require("../models/ExamSession");
const Section = require("../models/Section");

class SectionResultController {
  async getOne(req, res) {
    console.log("Getting Section Result...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    SectionResult.findOne({ where: { id: req.params.id } }).then((result) => {
      if (!result) {
        data_not_found_response(res);
        return;
      }

      success_response(res, result, "Get One Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Section Results...");

    SectionResult.findAll({ where: { status: 1 } }).then((results) => {
      if (results.length == 0) {
        data_not_found_response(res);
        return;
      }

      success_response(res, results, "Get All Data Successful!");
    });
  }

  async getBySection(req, res) {
    console.log("Getting Section Result By Section...");

    if (!req.params.section_id) {
      missing_param_response(res);
      return;
    }

    if (!req.query.email) {
      SectionResult.findAll({
        where: {
          section_id: req.params.section_id,
        },
      }).then((results) => {
        if (results.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results, "Get Data Successful!");
      });
    } else {
      SectionResult.findAll({
        where: {
          section_id: req.params.section_id,
        },
        include: [
          {
            model: ExamSession,
            where: {
              email: req.query.email,
            },
          },
        ],
      }).then((results) => {
        if (results.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results, "Get Data Successful!");
      });
    }
  }

  async getByTest(req, res) {
    console.log("Getting Section Result By Test...");

    if (!req.params.test_id) {
      missing_param_response(res);
      return;
    }

    if (!req.query.email) {
      SectionResult.findAll({
        include: [
          {
            model: Section,
            where: {
              test_id: req.params.test_id,
            },
          },
        ],
      }).then((results) => {
        if (results.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results, "Get Data Successful!");
      });
    } else {
      SectionResult.findAll({
        include: [
          {
            model: Section,
            where: {
              test_id: req.params.test_id,
            },
          },
          {
            model: ExamSession,
            where: {
              email: req.query.email,
            },
          },
        ],
      }).then((results) => {
        if (results.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results, "Get Data Successful!");
      });
    }
  }

  async create(req, res) {
    console.log("Creating A New Section Result...");

    // TODO COUNT NUM CORRECT AUTOMATICALLY
    if (
      !validate_required_columns(req, SectionResult, ["status", "num_correct"])
    ) {
      missing_param_response(res);
      return;
    }

    const new_result = await SectionResult.create({
      test_result_id: req.body.test_result_id,
      section_id: req.body.section_id,
      exam_session: req.body.exam_session,
      start_date: req.body.start_date,
      finish_date: req.body.finish_date,
    });

    success_response(res, new_result.toJSON(), "Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Section Result...");

    if (
      !validate_required_columns(
        req,
        SectionResult,
        ["status", "num_correct"],
        ["updating_id"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    // TODO COUNT NUM CORRECT AUTOMATICALLY
    SectionResult.findOne({ where: { id: req.body.updating_id } }).then(
      (result) => {
        if (!result) {
          data_not_found_response(res);
          return;
        }

        result.set({
          test_result_id: req.body.test_result_id,
          section_id: req.body.section_id,
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

module.exports = SectionResultController;
