const SectionResult = require("../models/SectionResult");
const {
  missing_param_response,
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
      success_response(res, result, "Get One Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Section Results...");

    SectionResult.findAll({ where: { status: 1 } }).then((results) => {
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
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
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
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
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
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
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
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
      });
    }
  }

  async create(req, res) {
    console.log("Creating A New Section Result...");

    if (!validate_required_columns(req, SectionResult, ["status"])) {
      missing_param_response(res);
      return;
    }

    const new_result = await SectionResult.create({
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
        ["status"],
        ["updating_id"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    SectionResult.findOne({ where: { id: req.body.updating_id } }).then(
      (result) => {
        result.set({
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
