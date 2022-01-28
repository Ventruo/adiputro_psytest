const QuestionResult = require("../models/QuestionResult");
const {
  missing_param_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");
const Question = require("../models/Question");
const SectionResult = require("../models/SectionResult");
const ExamSession = require("../models/ExamSession");
const Section = require("../models/Section");
const Test = require("../models/Test");

class QuestionResultController {
  async getOne(req, res) {
    console.log("Getting Question Result...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    QuestionResult.findOne({ where: { id: req.params.id } }).then((result) => {
      success_response(res, result, "Get One Data Successful!");
    });
  }

  async getByQuestion(req, res) {
    console.log("Getting Question Result By Question...");

    if (!req.params.q_id) {
      missing_param_response(res);
      return;
    }

    if (!req.query.email) {
      QuestionResult.findAll({ where: { question_id: req.params.q_id } }).then(
        (result) => {
          success_response(res, result, "Get Data Successful!");
        }
      );
    } else {
      QuestionResult.findAll({
        where: { question_id: req.params.q_id },
        include: [
          {
            model: SectionResult,
            include: [
              {
                model: ExamSession,
                where: {
                  email: req.query.email,
                },
              },
            ],
          },
        ],
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
      });
    }
  }

  async getBySection(req, res) {
    console.log("Getting Question Result By Section...");

    if (!req.params.section_id) {
      missing_param_response(res);
      return;
    }

    if (!req.query.email) {
      QuestionResult.findAll({
        include: [
          {
            model: SectionResult,
            where: {
              section_id: req.params.section_id,
            },
          },
        ],
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
      });
    } else {
      QuestionResult.findAll({
        include: [
          {
            model: SectionResult,
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
          },
        ],
      }).then((result) => {
        success_response(res, result, "Get Data Successful!");
      });
    }
  }

  async getByTest(req, res) {
    console.log("Getting Question Result By Test...");

    if (!req.params.test_id) {
      missing_param_response(res);
      return;
    }

    if (!req.query.email) {
      QuestionResult.findAll({
        include: [
          {
            model: SectionResult,
            include: [
              {
                model: Section,
                where: {
                  test_id: req.params.test_id,
                },
              },
            ],
          },
        ],
      }).then((result) => {
        let result2 = [];
        for (let i in result) {
          if (result[i].sectionresult) {
            result2.push(result[i]);
          }
        }
        success_response(res, result2, "Get Data Successful!");
      });
    } else {
      QuestionResult.findAll({
        include: [
          {
            model: SectionResult,
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
          },
        ],
      }).then((result) => {
        let result2 = [];
        for (let i in result) {
          if (result[i].sectionresult) {
            result2.push(result[i]);
          }
        }
        success_response(res, result2, "Get Data Successful!");
      });
    }
  }

  async getAll(req, res) {
    console.log("Getting All Available Question Results...");

    QuestionResult.findAll({ where: { status: 1 } }).then((results) => {
      success_response(res, results, "Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Question Result...");

    if (
      !validate_required_columns(req, QuestionResult, [
        "status",
        "status_correct",
      ])
    ) {
      missing_param_response(res);
      return;
    }

    Question.findOne({ where: { id: req.body.question_id } }).then(
      async (question) => {
        let status_correct = false;
        if (question.answer == req.body.answer) status_correct = true;

        const new_result = await QuestionResult.create({
          section_result_id: req.body.section_result_id,
          question_id: req.body.question_id,
          answer: req.body.answer,
          status_correct: status_correct,
        });

        success_response(res, new_result.toJSON(), "Create Successful!");
      }
    );
  }

  async update(req, res) {
    console.log("Updating A Question Result...");

    if (
      !validate_required_columns(
        req,
        QuestionResult,
        ["status", "status_correct"],
        ["updating_id"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    QuestionResult.findOne({ where: { id: req.body.updating_id } }).then(
      (result) => {
        Question.findOne({ where: { id: req.body.question_id } }).then(
          (question) => {
            let status_correct = false;
            if (question.answer == req.body.answer) status_correct = true;

            result.set({
              section_result_id: req.body.section_result_id,
              question_id: req.body.question_id,
              answer: req.body.answer,
              status_correct: status_correct,
            });
            result.save();

            success_response(res, result?.toJSON(), "Update successful!");
          }
        );
      }
    );
  }
}

module.exports = QuestionResultController;
