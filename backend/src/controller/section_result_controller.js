const SectionResult = require("../models/SectionResult");

class SectionResultController {
  async index(req, res) {
    console.log("Section Result Index");
    SectionResult.findOne({ where: { id: 1 } }).then((result) => {
      console.log(result);
      res.send("Index");
    });
  }

  create(req, res) {
    console.log("Create Section Result");
    res.send("Create Section Result");
  }
}

module.exports = SectionResultController;
