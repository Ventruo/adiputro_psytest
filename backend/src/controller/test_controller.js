const Test = require("../models/Test");

class TestController {
  async index(req, res) {
    console.log("Test Index");
    Test.findOne({ where: { id: 1 } }).then((test) => {
      console.log(test);
      res.send("Index");
    });
  }

  create(req, res) {
    console.log("Create Test");
    res.send("Create Test");
  }
}

module.exports = TestController;
