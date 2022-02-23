const QuestionResult = require("../models/QuestionResult");
const {
  missing_param_response,
  data_not_found_response,
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
      if (!result) {
        data_not_found_response(res);
        return;
      }

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
        (results) => {
          if (results.length == 0) {
            data_not_found_response(res);
            return;
          }

          success_response(res, results, "Get Data Successful!");
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
      }).then((results) => {
        let results2 = [];
        for (let i in results) {
          if (results[i].sectionresult) {
            results2.push(results[i]);
          }
        }
        if (results2.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results2, "Get Data Successful!");
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
      }).then((results) => {
        let results2 = [];
        for (let i in results) {
          if (results[i].sectionresult) {
            results2.push(results[i]);
          }
        }
        if (results2.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results2, "Get Data Successful!");
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
      }).then((results) => {
        let results2 = [];
        for (let i in results) {
          if (results[i].sectionresult) {
            results2.push(results[i]);
          }
        }
        if (results2.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results, "Get Data Successful!");
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
      }).then((results) => {
        let results2 = [];
        for (let i in results) {
          if (results[i].sectionresult) {
            results2.push(results[i]);
          }
        }
        if (results2.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results2, "Get Data Successful!");
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
      }).then((results) => {
        let results2 = [];
        for (let i in results) {
          if (results[i].sectionresult) {
            results2.push(results[i]);
          }
        }
        if (results2.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results2, "Get Data Successful!");
      });
    }
  }

  async getAll(req, res) {
    console.log("Getting All Available Question Results...");

    QuestionResult.findAll({ where: { status: 1 } }).then((results) => {
      if (results.length == 0) {
        data_not_found_response(res);
        return;
      }

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

  async createmultiple(req, res) {
    console.log("Creating A New Question Result...");

    if (
      !validate_required_columns(
        req,
        QuestionResult,
        [
          "status",
          "status_correct",
          "question_id",
          "answer",
          "section_result_id",
        ],
        ["data", "exam_session", "section_id"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    SectionResult.findOne({
      where: {
        exam_session: req.body.exam_session,
        section_id: req.body.section_id,
      },
    }).then(async (secres) => {
      if (!secres) {
        data_not_found_response(res);
        return;
      }

      let results = [];
      let ctr_correct = 0;
      for (const data of req.body.data) {
        await Question.findOne({ where: { id: data.question_id } }).then(
          async (question) => {
            let status_correct = false;
            if (question.answer.includes("&")) {
              let a1 = eval(data.answer.split("&")[0]);
              let a2 = eval(data.answer.split("&")[1]);
              let q1 = eval(question.answer.split("&")[0]);
              let q2 = eval(question.answer.split("&")[1]);

              if (a1 == q1 && a2 == q2) {
                console.log("bener");
                status_correct = true;
                ctr_correct++;
              }
            } else if (question.answer.includes("|")) {
              let q1 = question.answer.split("|")[0];
              let q2 = question.answer.split("|")[1];

              if (
                data.answer.toUpperCase() == q1.toUpperCase() ||
                data.answer.toUpperCase() == q2.toUpperCase()
              ) {
                console.log("bener");
                status_correct = true;
                ctr_correct++;
              }
            } else if (
              data.answer.toUpperCase() == question.answer.toUpperCase()
            ) {
              status_correct = true;
              ctr_correct++;
            }

            const new_result = await QuestionResult.create({
              section_result_id: secres.id,
              question_id: data.question_id,
              answer: data.answer,
              status_correct: status_correct,
            });

            results.push(new_result);
          }
        );
      }

      secres.set({
        num_correct: ctr_correct,
      });
      secres.save();

      success_response(res, results, "Create Multiple Successful!");
    });
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
        if (!result) {
          data_not_found_response(res);
          return;
        }

        Question.findOne({ where: { id: req.body.question_id } }).then(
          (question) => {
            if (!question) {
              data_not_found_response(res);
              return;
            }

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
