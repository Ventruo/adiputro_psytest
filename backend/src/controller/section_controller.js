const Section = require("../models/Section");

class SectionController {
  async index(req, res) {
    console.log("Section Index");
    Section.findOne({ where: { id: 1 } }).then((section) => {
      console.log(section);
      res.send("Index");
    });
  }

  create(req, res) {
    console.log("Create Section");
    res.send("Create Section");
  }
}

module.exports = SectionController;
