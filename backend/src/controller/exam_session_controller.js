const ExamSession = require("../models/ExamSession");

class ExamSessionController {
  async index(req, res) {
    console.log("Exam Session Index");
    ExamSession.findOne({ where: { id: 1 } }).then((examsession) => {
      console.log(examsession);
      res.send("Index");
    });
  }

  create(req, res) {
    console.log("Create Exam Session");
    res.send("Create Exam Session");
  }
}

module.exports = ExamSessionController;
