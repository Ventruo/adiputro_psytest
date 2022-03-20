const {
  missing_param_response,
  unique_id_response,
  data_not_found_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");
const ExamSession = require("../models/ExamSession");
const KreapelinData = require("../models/KreapelinData");
const SectionResult = require("../models/SectionResult");

class KreapelinDataController {
  async getOne(req, res) {
    console.log("Getting One Kreapelin Data...");

    if (!req.query.section_result_id || !req.query.exam_session_id) {
      missing_param_response(res);
      return;
    }

    KreapelinData.findOne({
      where: {
        section_result_id: req.query.section_result_id,
        exam_session_id: req.query.exam_session_id,
      },
    }).then((data) => {
      if (!data) {
        data_not_found_response(res);
        return;
      }

      success_response(res, data, "Get One Data Successful!");
    });
  }

  async getBySectionResult(req, res) {
    console.log("Getting Kreapelin Data By Section Result...");

    KreapelinData.findAll({
      where: { section_result_id: req.params.section_result_id },
    }).then((data) => {
      if (!data) {
        data_not_found_response(res);
        return;
      }

      success_response(res, data, "Get Multiple Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Kreapelin Data...");

    KreapelinData.findAll({ where: { status: 1 } }).then((data) => {
      if (data.length == 0) {
        data_not_found_response(res);
        return;
      }

      success_response(res, data, "Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Kreapelin Data...");

    if (!validate_required_columns(req, KreapelinData, ["status"])) {
      missing_param_response(res);
      return;
    }

    SectionResult.findOne({ where: { id: req.body.section_result_id } }).then(
      async (section) => {
        if (!section) {
          data_not_found_response(res);
          return;
        }

        ExamSession.findOne({ where: { id: req.body.exam_session_id } }).then(
          async (section) => {
            if (!section) {
              data_not_found_response(res);
              return;
            }

            const new_data = await KreapelinData.create({
              section_result_id: req.body.section_result_id,
              exam_session_id: req.body.exam_session_id,
              pendidikan: req.body.pendidikan,
              jurusan: req.body.jurusan,
              jenis_kelamin: req.body.jenis_kelamin,
            });

            success_response(res, new_data.toJSON(), "Create Successful!");
          }
        );
      }
    );
  }

  async update(req, res) {
    console.log("Updating A Kreapelin Data...");

    if (!validate_required_columns(req, KreapelinData, ["status"])) {
      missing_param_response(res);
      return;
    }

    KreapelinData.findOne({
      where: {
        section_result_id: req.body.section_result_id,
        exam_session_id: req.body.exam_session_id,
      },
    }).then(async (kreapelin_data) => {
      if (!kreapelin_data) {
        data_not_found_response(res);
        return;
      }

      kreapelin_data.set({
        section_result_id: req.body.section_result_id,
        exam_session_id: req.body.exam_session_id,
        pendidikan: req.body.pendidikan,
        jurusan: req.body.jurusan,
        jenis_kelamin: req.body.jenis_kelamin,
      });
      await kreapelin_data.save();

      success_response(res, kreapelin_data?.toJSON(), "Update successful!");
    });
  }
}

module.exports = KreapelinDataController;
