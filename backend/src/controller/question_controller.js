const Question = require("../models/Question");

class QuestionController {
  async index(req, res) {
    console.log("Question Index");
    Question.findOne({ where: { id: 1 } }).then((question) => {
      console.log(question);
      res.send("Index");
    });
  }

  create(req, res) {
    console.log("Create Question");
    res.send("Create Question");
  }
}

module.exports = QuestionController;
