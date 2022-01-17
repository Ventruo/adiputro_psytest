const QuestionResult = require("../models/QuestionResult");

class QuestionResultController {
  async index(req, res) {
    console.log("Question Result Index");
    QuestionResult.findOne({ where: { id: 1 } }).then((result) => {
      console.log(result);
      res.send("Index");
    });
  }

  create(req, res) {
    console.log("Create Question Result");
    res.send("Create Question Result");
  }
}

module.exports = QuestionResultController;
