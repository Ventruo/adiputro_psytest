const Test = require("../models/Test");
const {
  missing_param_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");

class TestController {
  async getOne(req, res) {
    console.log("Getting Test...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    Test.findOne({ where: { id: req.params.id } }).then((test) => {
      success_response(res, test, "Get One Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Tests...");

    Test.findAll({ where: { status: 1 } }).then((tests) => {
      success_response(res, tests, "Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Test...");

    if (!validate_required_columns(req, Test, ["status"])) {
      missing_param_response(res);
      return;
    }

    const new_test = await Test.create({
      name: req.body.name,
      type: req.body.type,
    });

    success_response(res, new_test.toJSON(), "Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Test...");

    if (!validate_required_columns(req, Test, ["status"], ["updating_id"])) {
      missing_param_response(res);
      return;
    }

    Test.findOne({ where: { id: req.body.updating_id } }).then((test) => {
      test.set({
        name: req.body.name,
        type: req.body.type,
      });
      test.save();

      success_response(res, test?.toJSON(), "Update successful!");
    });
  }
}

module.exports = TestController;
