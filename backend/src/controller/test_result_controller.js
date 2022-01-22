const TestResult = require("../models/TestResult");

class TestResultController {
  async index(req, res) {
    console.log("Test Result Index");
    TestResult.findOne({ where: { id: 1 } }).then((result) => {
      console.log(result);
      res.send("Index");
    });
  }

  create(req, res) {
    console.log("Create Test Result");
    res.send("Create Test Result");
  }
}

module.exports = TestResultController;
