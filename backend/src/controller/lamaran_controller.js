const {
  missing_param_response,
  unique_id_response,
  data_not_found_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");
const Lamaran = require("../models/Lamaran");
const GoogleDriveService = require("../helpers/GoogleDriveService");

const driveStorageID = process.env.GOOGLE_DRIVE_STORAGE_ID || "";
const driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID || "";
const driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET || "";
const driveRedirectUri = process.env.GOOGLE_DRIVE_REDIRECT_URI || "";
const driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN || "";

class LamaranController {
  async getOne(req, res) {
    console.log("Getting Lamaran...");

    if (!req.params.email) {
      missing_param_response(res);
      return;
    }

    Lamaran.findOne({ where: { email: req.params.email } }).then((lamaran) => {
      if (!lamaran) {
        data_not_found_response(res);
        return;
      }

      success_response(res, lamaran, "Get One Data Successful!");
    });
  }

  async getByFilter(req, res) {
    console.log("Getting Lamaran By Filter...");

    let wheres = {};
    if (req.query.posisi) wheres.posisi_dilamar = req.query.posisi;
    if (req.query.jurusan) wheres.jurusan = req.query.jurusan;
    if (req.query.pendidikan) wheres.pendidikan_terakhir = req.query.pendidikan;

    Lamaran.findOne({ where: wheres }).then((lamaran) => {
      if (!lamaran) {
        data_not_found_response(res);
        return;
      }

      success_response(res, lamaran, "Get Multiple Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Lamarans...");

    Lamaran.findAll({ where: { status: 1 } }).then((lamarans) => {
      if (lamarans.length == 0) {
        data_not_found_response(res);
        return;
      }

      success_response(res, lamarans, "Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Lamaran...");

    if (
      !validate_required_columns(req, Lamaran, ["status", "lampiran_drive_id"])
    ) {
      missing_param_response(res);
      return;
    }

    this.isEmailUnique(req.body.email).then(async (isUnique) => {
      if (!isUnique) {
        unique_id_response(res);
        return;
      }

      // Upload Lampiran
      const googleDriveService = new GoogleDriveService(
        driveClientId,
        driveClientSecret,
        driveRedirectUri,
        driveRefreshToken
      );

      let file = await this.uploadLampiran(
        googleDriveService,
        req.file,
        req.body.email
      );
      const new_lamaran = await Lamaran.create({
        nama: req.body.nama,
        tempat_lahir: req.body.tempat_lahir,
        tanggal_lahir: req.body.tanggal_lahir,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat_domisili: req.body.alamat_domisili,
        usia: req.body.usia,
        status_perkawinan: req.body.status_perkawinan,
        nomor_hp: req.body.nomor_hp,
        email: req.body.email,
        pendidikan_terakhir: req.body.pendidikan_terakhir,
        nama_sekolah: req.body.nama_sekolah,
        jurusan: req.body.jurusan,
        posisi_dilamar: req.body.posisi_dilamar,
        lampiran_drive_id: file.data.id,
      });

      success_response(res, new_lamaran.toJSON(), "Create Successful!");
    });
  }

  async update(req, res) {
    console.log("Updating A Lamaran...");

    if (
      !validate_required_columns(
        req,
        Lamaran,
        ["status", "lampiran_drive_id"],
        ["updating_id"]
      )
    ) {
      missing_param_response(res);
      return;
    }

    Lamaran.findOne({ where: { id: req.body.updating_id } }).then(
      async (lamaran) => {
        if (!lamaran) {
          data_not_found_response(res);
          return;
        }

        // Upload Lampiran
        const googleDriveService = new GoogleDriveService(
          driveClientId,
          driveClientSecret,
          driveRedirectUri,
          driveRefreshToken
        );

        if (req.file) {
          // Delete & Reupload Lampiran
          await googleDriveService
            .deleteFile(lamaran.lampiran_drive_id)
            .catch((error) => {
              console.error(error);
            });
          let file = await this.uploadLampiran(
            googleDriveService,
            req.file,
            req.body.email
          );
          lamaran.set({ lampiran_drive_id: file.data.id });
        }

        lamaran.set({
          nama: req.body.nama,
          tempat_lahir: req.body.tempat_lahir,
          tanggal_lahir: req.body.tanggal_lahir,
          jenis_kelamin: req.body.jenis_kelamin,
          alamat_domisili: req.body.alamat_domisili,
          usia: req.body.usia,
          status_perkawinan: req.body.status_perkawinan,
          nomor_hp: req.body.nomor_hp,
          email: req.body.email,
          pendidikan_terakhir: req.body.pendidikan_terakhir,
          nama_sekolah: req.body.nama_sekolah,
          jurusan: req.body.jurusan,
          posisi_dilamar: req.body.posisi_dilamar,
        });
        lamaran.save();

        success_response(res, lamaran?.toJSON(), "Update successful!");
      }
    );
  }

  async uploadLampiran(googleDriveService, uploadFile, email) {
    // Get lamaran folder
    let subfolders = await googleDriveService
      .searchInParent(driveStorageID)
      .catch((error) => {
        console.error(error);
        return null;
      });
    let subfolder = subfolders.filter(
      (subfolder) => subfolder.name == "LAMARAN"
    )[0];

    let ext = uploadFile.originalname.split(".");
    ext = ext[ext.length - 1];

    let file = await googleDriveService
      .saveFile(
        "Lampiran_Lamaran_" + email,
        uploadFile.buffer,
        "application/" + ext,
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

  async isEmailUnique(email) {
    return Lamaran.count({ where: { email: email } }).then((count) => {
      if (count != 0) {
        return false;
      }
      return true;
    });
  }
}

module.exports = LamaranController;
