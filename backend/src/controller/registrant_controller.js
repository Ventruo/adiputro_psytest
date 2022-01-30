const Registrant = require("../models/Registrant");
const {
  missing_param_response,
  unique_id_response,
  data_not_found_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");

class RegistrantController {
  async getOne(req, res) {
    console.log("Getting Registrant Data...");

    if (!req.params.email) {
      missing_param_response(res);
      return;
    }

    Registrant.findOne({ where: { email: req.params.email } }).then(
      (registrant) => {
        if (!registrant) {
          data_not_found_response(res);
          return;
        }

        registrant.biodata = JSON.parse(registrant.biodata);
        success_response(res, registrant, "Get One Data Successful!");
      }
    );
  }

  async getAll(req, res) {
    console.log("Getting All Registrant Data...");

    Registrant.findAll({ where: { status: 1 } }).then((registrants) => {
      if (registrants.length == 0) {
        data_not_found_response(res);
        return;
      }

      for (const key in registrants) {
        registrants[key].biodata = JSON.parse(registrants[key].biodata);
      }
      success_response(res, registrants, "Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Registrant Data...");

    if (!validate_required_columns(req, Registrant, ["status"])) {
      missing_param_response(res);
      return;
    }

    this.isIdUnique(req.body.email).then(async (isUnique) => {
      if (!isUnique) {
        unique_id_response(res);
        return;
      }

      const new_registrant = await Registrant.create({
        email: req.body.email,
        biodata: JSON.stringify(req.body.biodata),
      });

      success_response(res, new_registrant.toJSON(), "Create Successful!");
    });
  }

  async update(req, res) {
    console.log("Updating A Registrant Data...");

    if (
      !validate_required_columns(
        req,
        Registrant,
        ["email", "status"],
        ["updating_email"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    Registrant.findOne({ where: { email: req.body.updating_email } }).then(
      (registrant) => {
        if (!registrant) {
          data_not_found_response(res);
          return;
        }

        registrant.set({
          biodata: JSON.stringify(req.body.biodata),
        });
        registrant.save();

        success_response(res, registrant?.toJSON(), "Update successful!");
      }
    );
  }

  async isIdUnique(email) {
    return Registrant.count({ where: { email: email } }).then((count) => {
      if (count != 0) {
        return false;
      }
      return true;
    });
  }
}

module.exports = RegistrantController;
