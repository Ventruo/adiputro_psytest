const Question = require("../models/Question");
const Section = require("../models/Section");
const {
  missing_param_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");

class QuestionController {
  async getOne(req, res) {
    console.log("Getting Question...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    Question.findOne({ where: { id: req.params.id } }).then((question) => {
      success_response(res, question, "Get One Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Questions...");

    if (req.query.test_id) {
      // Get From Test ID
      Question.findAll({
        include: [
          {
            model: Section,
            where: {
              test_id: req.query.test_id,
            },
          },
        ],
      }).then((question) => {
        res.send(question);
      });
    } else if (req.query.section_id) {
      // Get From Section ID
      Question.findAll({
        where: { status: 1, section_id: req.query.section_id },
        include: Section,
      }).then((questions) => {
        success_response(res, questions, "Get All Data Successful!");
      });
    } else {
      // Get All
      Question.findAll({
        where: { status: 1 },
        include: Section,
      }).then((questions) => {
        success_response(res, questions, "Get All Data Successful!");
      });
    }
  }

  async create(req, res) {
    console.log("Creating A New Question...");

    if (!validate_required_columns(req, Question, ["status"])) {
      missing_param_response(res);
      return;
    }

    const new_question = await Question.create({
      question: req.body.question,
      section_id: req.body.section_id,
      option_a: req.body.option_a,
      option_b: req.body.option_b,
      option_c: req.body.option_c,
      option_d: req.body.option_d,
      option_e: req.body.option_e,
      answer: req.body.answer,
      option_type: req.body.option_type,
      question_type: req.body.question_type,
    });

    success_response(res, new_question.toJSON(), "Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Question...");

    if (
      !validate_required_columns(req, Question, ["status"], ["updating_id"])
    ) {
      missing_param_response(res);
      return;
    }

    Question.findOne({ where: { id: req.body.updating_id } }).then(
      (question) => {
        question.set({
          question: req.body.question,
          section_id: req.body.section_id,
          option_a: req.body.option_a,
          option_b: req.body.option_b,
          option_c: req.body.option_c,
          option_d: req.body.option_d,
          option_e: req.body.option_e,
          answer: req.body.answer,
          option_type: req.body.option_type,
          question_type: req.body.question_type,
        });
        question.save();

        success_response(res, question.toJSON(), "Update Successful!");
      }
    );
  }
}

module.exports = QuestionController;