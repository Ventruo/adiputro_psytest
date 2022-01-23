const Section = require("../models/Section");
const {
  missing_param_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");

class SectionController {
  async getOne(req, res) {
    console.log("Getting Section...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    Section.findOne({ where: { id: req.params.id } }).then((section) => {
      success_response(res, section, "Get One Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Sections...");

    if (!req.params.test_id) {
      Section.findAll({ where: { status: 1 } }).then((sections) => {
        success_response(res, sections, "Get All Data Successful!");
      });
    } else {
      Section.findAll({
        where: { status: 1, test_id: req.params.test_id },
      }).then((sections) => {
        success_response(res, sections, "Get All Data Successful!");
      });
    }
  }

  async create(req, res) {
    console.log("Creating A New Section...");

    if (!validate_required_columns(req, Section, ["status"])) {
      missing_param_response(res);
      return;
    }

    const new_section = await Section.create({
      test_id: req.body.test_id,
      instruction: req.body.instruction,
      duration: req.body.duration,
      type: req.body.type,
      option_num: req.body.option_num,
    });

    success_response(res, new_section.toJSON(), "Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Section...");

    if (!validate_required_columns(req, Section, ["status"], ["updating_id"])) {
      missing_param_response(res);
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

      success_response(res, section.toJSON(), "Update Successful!");
    });
  }
}

module.exports = SectionController;
