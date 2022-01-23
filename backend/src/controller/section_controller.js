const Section = require("../models/Section");

class SectionController {
  async index(req, res) {
    console.log("Getting Section Index...");

    Section.findOne({ where: { id: 1 } }).then((section) => {
      res.send(section);
      console.log("Get All Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting all Available Sections...");

    if (!req.query.test_id) {
      res.status(422);
      res.send("Missing Required Parameters");
      console.log("Missing Required Parameters");
      return;
    }

    Section.findAll({ where: { status: 1, test_id: req.query.test_id } }).then(
      (sections) => {
        res.status(200);
        res.send(sections);
        console.log("Get All Data Successful!");
      }
    );
  }

  async create(req, res) {
    console.log("Creating A New Section...");

    if (!this.check_section_data(req, res)) return;

    const new_section = await Section.create({
      test_id: req.body.test_id,
      instruction: req.body.instruction,
      duration: req.body.duration,
      type: req.body.type,
      option_num: req.body.option_num,
    });

    res.status(200);
    res.send(new_section.toJSON());
    console.log("Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Test...");

    if (!this.check_section_data(req, res)) return;

    if (!req.body.updating_id) {
      res.status(422);
      res.send("Missing Required Parameters");
      console.log("Missing Required Parameters");
      return;
    }

    Section.findOne({ where: { id: req.body.updating_id } }).then((section) => {
      section.set({
        test_id: req.body.test_id,
        instruction: req.body.instruction,
        duration: req.body.duration,
        type: req.body.type,
        option_num: req.body.option_num,
      });
      section.save();

      res.status(200);
      res.send(section.toJSON());
      console.log("Update successful!");
    });
  }

  check_section_data(req, res) {
    if (
      !req.body.test_id ||
      !req.body.instruction ||
      !req.body.duration ||
      !req.body.type ||
      !req.body.option_num
    ) {
      res.status(422);
      res.send("Missing Required Parameters");
      console.log("Missing Required Parameters");
      return false;
    }

    return true;
  }
}

module.exports = SectionController;
