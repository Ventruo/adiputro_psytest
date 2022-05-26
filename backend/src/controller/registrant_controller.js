const Registrant = require("../models/Registrant");
const {
  missing_param_response,
  unique_id_response,
  data_not_found_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");
const GoogleDriveService = require("../helpers/GoogleDriveService");

const driveStorageID = process.env.GOOGLE_DRIVE_STORAGE_ID || "";
const driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID || "";
const driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET || "";
const driveRedirectUri = process.env.GOOGLE_DRIVE_REDIRECT_URI || "";
const driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN || "";

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

        if (registrant.biodata != "")
          registrant.biodata = JSON.parse(registrant.biodata);
        else registrant.biodata = {};
        success_response(res, registrant, "Get One Data Successful!");
      }
    );
  }

  async getAll(req, res) {
    console.log("Getting All Registrant Data...");

    Registrant
      .findAll
      // { where: { status: 1 } }
      ()
      .then((registrants) => {
        if (registrants.length == 0) {
          data_not_found_response(res);
          return;
        }

        for (const key in registrants) {
          if (registrants[key].biodata != "")
            registrants[key].biodata = JSON.parse(registrants[key].biodata);
          else registrants[key].biodata = {};
        }
        success_response(res, registrants, "Get All Data Successful!");
      });
  }

  async create(req, res) {
    console.log("Creating A New Registrant Data...");

    if (!validate_required_columns(req, Registrant, ["status"]) || !req.file) {
      missing_param_response(res);
      return;
    }

    this.isIdUnique(req.body.email).then(async (isUnique) => {
      if (!isUnique) {
        unique_id_response(res);
        return;
      }

      // Upload Tanda_Tangan
      const googleDriveService = new GoogleDriveService(
        driveClientId,
        driveClientSecret,
        driveRedirectUri,
        driveRefreshToken
      );

      let file = await this.uploadTandaTangan(
        googleDriveService,
        req.file,
        req.body.email
      );

      req.body.biodata["tanda_tangan"] = file.data.id;

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

  async uploadTandaTangan(googleDriveService, uploadFile, email) {
    // Get applicant folder
    let subfolders = await googleDriveService
      .searchInParent(driveStorageID)
      .catch((error) => {
        console.error(error);
        return null;
      });
    let subfolder = subfolders.filter(
      (subfolder) => subfolder.name == "TANDA_TANGAN"
    )[0];

    let ext = uploadFile.originalname.split(".");
    ext = ext[ext.length - 1];

    let file = await googleDriveService
      .saveFile(
        "Registrant_" + email,
        uploadFile.buffer,
        uploadFile.mimetype,
        subfolder.id
      )
      .catch((error) => {
        console.error(error);
      });

    await googleDriveService
      .updatePermission(file.data.id, "reader", "anyone")
      .catch((error) => {
        console.error(error);
      });

    return file;
  }
}

module.exports = RegistrantController;
