const TestResult = require("../models/TestResult");
const ExamSession = require("../models/ExamSession");
const {
  missing_param_response,
  data_not_found_response,
  success_response,
} = require("../helpers/ResponseHelper");
const { validate_required_columns } = require("../helpers/ValidationHelper");
const xlsxFile = require("read-excel-file/node");
const SectionResult = require("../models/SectionResult");
const Test = require("../models/Test");
const Section = require("../models/Section");

const tintum_lookup = {
  0: "K",
  5: "HC",
  9: "C",
  12: "CB",
  14: "B",
};

const iq_lookup = {
  4: 85,
  5: 88,
  6: 91,
  7: 94,
  8: 97,
  9: 100,
  10: 103,
  11: 106,
  12: 109,
  13: 112,
  14: 115,
  15: 118,
  16: 121,
};

class TestResultController {
  async getOne(req, res) {
    console.log("Getting Test Result...");

    if (!req.params.id) {
      missing_param_response(res);
      return;
    }

    TestResult.findOne({ where: { id: req.params.id } }).then((result) => {
      if (!result) {
        data_not_found_response(res);
        return;
      }

      success_response(res, result, "Get One Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting All Available Test Results...");

    TestResult.findAll({ where: { status: 1 } }).then((results) => {
      if (results.length == 0) {
        data_not_found_response(res);
        return;
      }

      success_response(res, results, "Get All Data Successful!");
    });
  }

  async getByTest(req, res) {
    console.log("Getting Test Result By Test...");

    if (!req.params.test_id) {
      missing_param_response(res);
      return;
    }

    if (!req.query.email) {
      TestResult.findAll({
        where: {
          test_id: req.params.test_id,
        },
      }).then((results) => {
        if (results.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results, "Get Data Successful!");
      });
    } else {
      TestResult.findAll({
        where: {
          test_id: req.params.test_id,
        },
        include: [
          {
            model: ExamSession,
            where: {
              email: req.query.email,
            },
          },
        ],
      }).then((results) => {
        if (results.length == 0) {
          data_not_found_response(res);
          return;
        }

        success_response(res, results, "Get Data Successful!");
      });
    }
  }

  async create(req, res) {
    console.log("Creating A New Test Result...");

    if (!validate_required_columns(req, TestResult, ["status"])) {
      missing_param_response(res);
      return;
    }

    const new_result = await TestResult.create({
      test_id: req.body.test_id,
      exam_session: req.body.exam_session,
      start_date: req.body.start_date,
      finish_date: req.body.finish_date,
    });

    success_response(res, new_result.toJSON(), "Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Test Result...");

    if (
      !validate_required_columns(req, TestResult, ["status"], ["updating_id"])
    ) {
      missing_param_response(res);
      return;
    }

    TestResult.findOne({ where: { id: req.body.updating_id } }).then(
      (result) => {
        if (!result) {
          data_not_found_response(res);
          return;
        }

        result.set({
          test_id: req.body.test_id,
          exam_session: req.body.exam_session,
          start_date: req.body.start_date,
          finish_date: req.body.finish_date,
        });
        result.save();

        success_response(res, result?.toJSON(), "Update successful!");
      }
    );
  }

  async calculate_result(req, res) {
    TestResult.findOne({
      where: { test_id: req.body.test_id },
      include: [
        {
          model: ExamSession,
          where: {
            email: req.body.email,
          },
        },
      ],
    }).then((testres) => {
      SectionResult.findAll({ where: { test_result_id: testres.id } }).then(
        (sectionsres) => {
          Section.findAndCountAll({ where: { test_id: testres.test_id } }).then(
            (sections) => {
              let correct_data = [];
              correct_data = correct_data.concat(Array(sections.count).fill(0));

              for (let i = 0; i < sections.count; i++) {
                for (let j = 0; j < sectionsres.length; j++) {
                  if (sectionsres[j].section_id == sections.rows[i].id) {
                    correct_data[sections.rows[i].section_number] =
                      sectionsres[j].num_correct;
                    break;
                  }
                }
              }

              this.calculate_full(
                res,
                "./src/data/NORMA TINTUM.xlsx",
                "Sheet1",
                testres,
                correct_data
              );
            }
          );
        }
      );
    });
  }

  async calculate_full(res, excel_path, sheet, testres, correct_data) {
    // Read Norms from Excel
    xlsxFile(excel_path, {
      sheet: sheet,
    }).then(async (rows) => {
      console.log("Correct Data: ", correct_data);

      let norms_lookup = [];
      let norms_value = [];
      for (let i = 1; i <= 11; i++) {
        let norm = [];
        for (let j = 1; j <= 21; j++) {
          norm.push(rows[j][i]);
        }
        if (i == 11) norms_value = norm;
        else norms_lookup.push(norm);
      }
      // console.log(norms_lookup);
      // console.log(norms_value);

      //   Calculate Norms
      let norms_result = [];
      for (let i = 0; i < correct_data.length; i++) {
        let j = 0;
        while (norms_lookup[i][++j] <= correct_data[i]);

        norms_result.push(norms_value[--j]);
      }
      console.log("Values: ", correct_data);
      console.log("Norms: ", norms_result);

      //   Calculate Tintum
      let tintum_result = [];
      for (let i = 0; i < norms_result.length; i++) {
        let tintum =
          tintum_lookup[
            Object.keys(tintum_lookup)[Object.keys(tintum_lookup).length - 1]
          ];

        for (const key in tintum_lookup) {
          if (key >= norms_result[i]) {
            let tintum_keys = Object.keys(tintum_lookup);
            let loc = tintum_keys.indexOf(key);

            if (key == norms_result[i]) tintum = tintum_lookup[key];
            else tintum = tintum_lookup[tintum_keys[loc - 1]];

            break;
          }
        }

        tintum_result.push(tintum);
      }
      console.log("Tintum: ", tintum_result);

      //   Calculate IQ
      let norms_sum = norms_result.reduce((a, b) => a + b, 0);
      console.log("Norms Sum: ", norms_sum);
      let norms_div = norms_sum / 10;
      let norms_rounded = Math.floor(norms_div);

      let iq =
        iq_lookup[Object.keys(iq_lookup)[Object.keys(iq_lookup).length - 1]];
      for (const key in iq_lookup) {
        if (key >= norms_div) {
          let iq_keys = Object.keys(iq_lookup);
          let loc = iq_keys.indexOf(key);

          if (key == norms_div) iq = iq_lookup[key];
          else if (loc != 0) iq = iq_lookup[iq_keys[loc - 1]];
          else iq = 0;

          break;
        }
      }

      if (!(norms_div - norms_rounded < 0.3)) {
        iq = iq + Math.floor((norms_div - norms_rounded) / 0.3);
      }
      console.log("IQ: ", iq);

      let results = {};
      results.section_result_id = 1;
      results.norms_sum = norms_sum;
      results.iq = iq;
      let temp = [];
      for (let i = 0; i < correct_data.length; i++) {
        let object = {};
        object.num_correct = correct_data[i];
        object.norm = norms_result[i];
        object.tintum = tintum_result[i];

        temp.push(object);
      }
      results.data = temp;
      console.log("Result JSON: ", results);

      testres.set({
        result: JSON.stringify(results),
      });
      testres.save();

      success_response(res, testres?.toJSON(), "Calculate successful!");
    });
  }
}

module.exports = TestResultController;
