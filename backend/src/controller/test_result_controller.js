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
const QuestionResult = require("../models/QuestionResult");
const Question = require("../models/Question");

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
    console.log("Calculating A Test Result...");

    if (!req.body.test_id || !req.body.email) {
      missing_param_response(res);
      return;
    }

    Test.findOne({ where: { id: req.body.test_id } }).then((test) => {
      if (!test) {
        data_not_found_response(res);
        return;
      }

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
        if (!testres) {
          data_not_found_response(res);
          return;
        }

        // Check Test Type
        if (test.test_type == 1) {
          this.calculate_tintum_test(test.test_type, testres, res);
        } else if (test.test_type == 2) {
          this.calculate_EPPS_test(test.test_type, testres, res);
        } else if (
          test.test_type == 6 ||
          test.test_type == 7 ||
          test.test_type == 8 ||
          test.test_type == 9 ||
          test.test_type == 11 ||
          test.test_type == 12 ||
          test.test_type == 13 ||
          test.test_type == 14 ||
          test.test_type == 15
        ) {
          this.calculate_nine_tests(test.test_type, testres, res);
        }
      });
    });
  }

  async calculate_tintum_test(test_type, testres, res) {
    // Get correct answers per Section from Section Results
    SectionResult.findAll({ where: { test_result_id: testres.id } }).then(
      (sectionsres) => {
        Section.findAndCountAll({
          where: { test_id: testres.test_id },
        }).then((sections) => {
          let correct_data = [];
          correct_data = correct_data.concat(Array(sections.count).fill(0));

          for (let i = 0; i < sections.count; i++) {
            for (let j = 0; j < sectionsres.length; j++) {
              if (sectionsres[j].section_id == sections.rows[i].id) {
                correct_data[sections.rows[i].section_number - 1] =
                  sectionsres[j].num_correct;
                break;
              }
            }
          }

          // Calculate with norms
          this.process_tintum(
            "./src/data/test_norma.xlsx",
            test_type,
            correct_data,
            res,
            testres
          );
        });
      }
    );
  }

  async process_tintum(excel_path, sheet, correct_data, res, testres) {
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
          norm.push(rows[j][i] ?? 0);
        }
        if (i == 11) norms_value = norm;
        else norms_lookup.push(norm);
      }
      // console.log(norms_lookup);
      // console.log(norms_value);

      //   Calculate Norms
      let norms_result = [];
      for (let i = 0; i < correct_data.length; i++) {
        let j = -1;
        while (norms_lookup[i][++j] < correct_data[i]);

        if (norms_lookup[i][j] > correct_data[i]) j--;

        norms_result.push(norms_value[j]);
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
        iq = iq + Math.floor((norms_div - norms_rounded + 0.000001) / 0.3);
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

  async calculate_EPPS_test(test_type, testres, res) {
    SectionResult.findOne({
      where: { test_result_id: testres.id },
    }).then((sectionres) => {
      Question.findAndCountAll({
        where: { section_id: sectionres.section_id },
      }).then((questions) => {
        QuestionResult.findAll({
          where: { section_result_id: sectionres.id },
        }).then(async (qres) => {
          let answers = [];
          answers = answers.concat(Array(questions.count).fill(0));

          for (let i = 0; i < questions.count; i++) {
            for (let j = 0; j < qres.length; j++) {
              if (qres[j].question_id == questions.rows[i].id) {
                answers[i] = qres[j].answer;
                break;
              }
            }
          }

          // Calculate EPPS
          this.process_EPPS(
            "./src/data/test_norma.xlsx",
            test_type,
            answers,
            res,
            testres
          );
        });
      });
    });
  }

  async process_EPPS(excel_path, sheet, answers, res, testres) {
    // Read Norms from Excel
    xlsxFile(excel_path, {
      sheet: sheet,
    }).then(async (rows) => {
      console.log(answers.length);
      console.log("Answers: ", answers);

      // Load Norms
      let norms_lookup = {};
      for (let k = 0; k < 4; k++) {
        let start_col = k * 17;
        let end_col = start_col + 16;
        let code = k + 1;
        let clump = {};

        // column
        for (let i = start_col; i <= end_col; i++) {
          let norm = [];
          for (let j = 2; j <= 30; j++) {
            //rows
            norm.push(rows[j][i] ?? 0);
          }
          let col_name = rows[1][i];
          clump[col_name] = norm;
        }
        norms_lookup[code] = clump;
      }
      // console.log(norms_lookup[1]);

      // TODO: Tanya Kode dapet darimana
      let kode_registrant = 1;

      // ach -> 6,11,16,21,,26,31,36,41,46,51,56,61,66,71 -> 2,3,4,5,76,77,78,79,80,151,152,153,154,155
      // def -> 2,12,17,22,27,32,37,42,47,52,57,62,67,72  -> 6,8,9,10,81,82,83,84,85,156,157,158,159,160
      // ord -> 3,8,18,23,28,33,38,43,48,53,58,63,68,73   -> 11,12,14,15,86,87,88,89,90,161,162,163,164,165
      // exh -> 4,9,14,24,29,34,39,44,49,54,59,64,69,74   -> 16,17,18,20,91,92,93,94,95,166,167,168,169,170
      // aut -> 5,10,15,20,30,35,40,45,50,55,60,65,70,75  -> 21,22,23,24,96,97,98,99,100,171,172,173,174,175

      // aff -> 76,81,86,91,96,106,111,116,121,126,131,136,141,146  -> 26,27,28,29,30,102,103,104,105,176,177,178,179,180
      // int -> 77,82,87,92,97,102,112,117,122,127,132,137,142,147  -> 31,32,33,34,35,106,108,109,110,181,182,183,184,185
      // suc -> 78,83,88,93,98,103,108,118,123,128,133,138,143,148  -> 36,37,38,39,40,111,112,114,115,186,187,188,189,190
      // dom -> 79,84,89,94,99,104,109,114,124,129,134,139,144,149  -> 41,42,43,44,45,116,117,118,120,191,192,193,194,195
      // aba -> 80,85,90,95,100,105,110,115,120,130,135,140,145,150 -> 46,47,48,49,50,121,122,123,124,196,197,198,199,200

      // nur -> 151,156,161,166,171,176,181,186,191,196,206,211,216,221 -> 51,52,53,54,55,126,127,128,129,130,202,203,204,205
      // chg -> 152,157,162,167,172,177,182,187,192,197,202,212,217,222 -> 56,57,58,59,60,131,132,133,134,135,206,208,209,210
      // end -> 153,158,163,168,173,178,183,188,193,198,203,208,218,223 -> 61,62,63,64,65,136,137,138,139,140,211,212,214,215
      // het -> 154,159,164,169,174,179,184,189,194,199,204,209,214,224 -> 66,67,68,69,70,141,142,143,144,145,216,217,218,220
      // agg -> 155,160,165,170,175,180,185,190,195,200,205,210,215,220 -> 71,72,73,74,75,146,147,148,149,150,221,222,223,224
      let factors_nums = {
        ach: {
          r_nums: [6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56, 61, 66, 71],
          c_nums: [2, 3, 4, 5, 76, 77, 78, 79, 80, 151, 152, 153, 154, 155],
        },
        def: {
          r_nums: [2, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72],
          c_nums: [6, 8, 9, 10, 81, 82, 83, 84, 85, 156, 157, 158, 159, 160],
        },
        ord: {
          r_nums: [3, 8, 18, 23, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73],
          c_nums: [11, 12, 14, 15, 86, 87, 88, 89, 90, 161, 162, 163, 164, 165],
        },
        exh: {
          r_nums: [4, 9, 14, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74],
          c_nums: [16, 17, 18, 20, 91, 92, 93, 94, 95, 166, 167, 168, 169, 170],
        },
        aut: {
          r_nums: [5, 10, 15, 20, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
          c_nums: [
            21, 22, 23, 24, 96, 97, 98, 99, 100, 171, 172, 173, 174, 175,
          ],
        },

        aff: {
          r_nums: [
            76, 81, 86, 91, 96, 106, 111, 116, 121, 126, 131, 136, 141, 146,
          ],
          c_nums: [
            26, 27, 28, 29, 30, 102, 103, 104, 105, 176, 177, 178, 179, 180,
          ],
        },
        int: {
          r_nums: [
            77, 82, 87, 92, 97, 102, 112, 117, 122, 127, 132, 137, 142, 147,
          ],
          c_nums: [
            31, 32, 33, 34, 35, 106, 108, 109, 110, 181, 182, 183, 184, 185,
          ],
        },
        suc: {
          r_nums: [
            78, 83, 88, 93, 98, 103, 108, 118, 123, 128, 133, 138, 143, 148,
          ],
          c_nums: [
            36, 37, 38, 39, 40, 111, 112, 114, 115, 186, 187, 188, 189, 190,
          ],
        },
        dom: {
          r_nums: [
            79, 84, 89, 94, 99, 104, 109, 114, 124, 129, 134, 139, 144, 149,
          ],
          c_nums: [
            41, 42, 43, 44, 45, 116, 117, 118, 120, 191, 192, 193, 194, 195,
          ],
        },
        aba: {
          r_nums: [
            80, 85, 90, 95, 100, 105, 110, 115, 120, 130, 135, 140, 145, 150,
          ],
          c_nums: [
            46, 47, 48, 49, 50, 121, 122, 123, 124, 196, 197, 198, 199, 200,
          ],
        },

        nur: {
          r_nums: [
            151, 156, 161, 166, 171, 176, 181, 186, 191, 196, 206, 211, 216,
            221,
          ],
          c_nums: [
            51, 52, 53, 54, 55, 126, 127, 128, 129, 130, 202, 203, 204, 205,
          ],
        },
        chg: {
          r_nums: [
            152, 157, 162, 167, 172, 177, 182, 187, 192, 197, 202, 212, 217,
            222,
          ],
          c_nums: [
            56, 57, 58, 59, 60, 131, 132, 133, 134, 135, 206, 208, 209, 210,
          ],
        },
        end: {
          r_nums: [
            153, 158, 163, 168, 173, 178, 183, 188, 193, 198, 203, 208, 218,
            223,
          ],
          c_nums: [
            61, 62, 63, 64, 65, 136, 137, 138, 139, 140, 211, 212, 214, 215,
          ],
        },
        het: {
          r_nums: [
            154, 159, 164, 169, 174, 179, 184, 189, 194, 199, 204, 209, 214,
            224,
          ],
          c_nums: [
            66, 67, 68, 69, 70, 141, 142, 143, 144, 145, 216, 217, 218, 220,
          ],
        },
        agg: {
          r_nums: [
            155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215,
            220,
          ],
          c_nums: [
            71, 72, 73, 74, 75, 146, 147, 148, 149, 150, 221, 222, 223, 224,
          ],
        },

        con: {
          pair1: [1, 7, 13, 19, 25, 26, 32, 38, 44, 50, 51, 57, 63, 69, 75],
          pair2: [
            151, 157, 163, 169, 175, 101, 107, 113, 119, 125, 201, 207, 213,
            219, 225,
          ],
        },
      };
      let factors = {
        ach: {},
        def: {},
        ord: {},
        exh: {},
        aut: {},

        aff: {},
        int: {},
        suc: {},
        dom: {},
        aba: {},

        nur: {},
        chg: {},
        end: {},
        het: {},
        agg: {},

        con: {},
      };

      // Calculate all Factors
      for (let key in factors_nums) {
        let factor = factors_nums[key];

        if (key == "con") {
          // Calculate CON Factor
          let rs = 0;
          for (let i = 0; i < factor.pair1.length; i++) {
            if (answers[factor.pair1[i] - 1] == answers[factor.pair2[i] - 1])
              rs += 1;
          }
          factors[key]["RS"] = rs;

          // lookup Percentile from excel
          let lookup = norms_lookup[kode_registrant];
          let score = lookup["score"][rs];
          let percentile = lookup[key][score];
          factors[key]["Percentile"] = percentile;

          // Category
          let kategori = "";
          if (percentile <= 3) kategori = "Sangat Pembohong";
          else if (percentile <= 16) kategori = "Pembohong";
          else if (percentile <= 84) kategori = "Cukup Jujur";
          else if (percentile <= 96) kategori = "Jujur";
          else kategori = "Sangat Jujur";

          factors[key]["Kategori"] = kategori;
          break;
        }

        // calculate R factor
        let r_sum = 0;
        for (let idx in factor.r_nums) {
          if (answers[factor.r_nums[idx] - 1] == "a") r_sum++;
        }
        factors[key]["r"] = r_sum;

        // calculate C factor
        let c_sum = 0;
        for (let idx in factor.c_nums) {
          if (answers[factor.c_nums[idx] - 1] == "b") c_sum++;
        }
        factors[key]["c"] = c_sum;

        let rs = r_sum + c_sum;
        factors[key]["RS"] = rs;

        // lookup Percentile from excel
        let lookup = norms_lookup[kode_registrant];
        let score = lookup["score"][rs];
        let percentile = lookup[key][score];
        factors[key]["Percentile"] = percentile;

        // Category
        let kategori = "";
        let keterangan = "";
        if (percentile <= 13) {
          kategori = "Kurang";
          keterangan = "K";
        } else if (percentile <= 34) {
          kategori = "Hampir Cukup";
          keterangan = "HC";
        } else if (percentile <= 84) {
          kategori = "Cukup";
          keterangan = "C";
        } else if (percentile <= 96) {
          kategori = "Cukup Baik";
          keterangan = "CB";
        } else {
          kategori = "Baik";
          keterangan = "B";
        }

        factors[key]["Kategori"] = kategori;
        factors[key]["Ket"] = keterangan;
      }

      // Calculate Sum RS
      let sum_rs = 0;
      for (let key in factors) {
        if(key!="con") sum_rs += factors[key]["RS"];
      }
      factors["SUM_RS"] = sum_rs;

      // Calculate M
      factors["M"] =
        Math.round(
          ((factors["ach"]["Percentile"] +
            factors["def"]["Percentile"] +
            factors["ord"]["Percentile"]) /
            3) *
            100
        ) / 100;

      let m_ket = "";
      if (factors["M"] <= 13) m_ket = "K";
      else if (factors["M"] <= 34) m_ket = "HC";
      else if (factors["M"] <= 84) m_ket = "C";
      else if (factors["M"] <= 96) m_ket = "CB";
      else m_ket = "B";
      factors["M_KET"] = m_ket;

      // Calculate AW
      factors["AW"] =
        Math.round(
          ((factors["ach"]["Percentile"] +
            factors["def"]["Percentile"] +
            factors["ord"]["Percentile"] +
            factors["aut"]["Percentile"] +
            factors["aff"]["Percentile"] +
            factors["dom"]["Percentile"] +
            factors["nur"]["Percentile"] +
            factors["chg"]["Percentile"] +
            factors["agg"]["Percentile"]) /
            9) *
            100
        ) / 100;

      let aw_ket = "";
      if (factors["AW"] <= 13) aw_ket = "K";
      else if (factors["AW"] <= 34) aw_ket = "HC";
      else if (factors["AW"] <= 84) aw_ket = "C";
      else if (factors["AW"] <= 96) aw_ket = "CB";
      else aw_ket = "B";
      factors["AW_KET"] = aw_ket;

      console.log(factors);
      testres.set({
        result: JSON.stringify(factors),
      });
      testres.save();

      success_response(res, testres?.toJSON(), "Calculate successful!");
    });
  }

  async calculate_nine_tests(test_type, testres, res) {
    SectionResult.findAll({ where: { test_result_id: testres.id } }).then(
      (sectionsres) => {
        Section.findAndCountAll({
          where: { test_id: testres.test_id },
        }).then((sections) => {
          let correct_data = [];
          correct_data = correct_data.concat(Array(sections.count).fill(0));
          for (let i = 0; i < sections.count; i++) {
            for (let j = 0; j < sectionsres.length; j++) {
              if (sectionsres[j].section_id == sections.rows[i].id) {
                correct_data[sections.rows[i].section_number - 1] =
                  sectionsres[j].num_correct;
                break;
              }
            }
          }

          // Calculate with norms
          this.process_nine(
            "./src/data/test_norma.xlsx",
            test_type,
            correct_data,
            res,
            testres
          );
        });
      }
    );
  }

  async process_nine(excel_path, sheet, correct_data, res, testres) {
    // Read Norms from Excel
    xlsxFile(excel_path, {
      sheet: sheet,
    }).then(async (rows) => {
      console.log("Correct Data: ", correct_data);

      let norms_lookup = [];
      let norms_value = [];
      let categories = rows[0][1];
      for (let i = 2; i < 2 + categories; i++) {
        norms_lookup.push(rows[i][0]);
        norms_value.push(rows[i][1]);
      }
      // console.log(norms_lookup);
      // console.log(norms_value);

      //   Calculate Norms
      let results = [];
      for (let i = 0; i < correct_data.length; i++) {
        for (let j = 0; j < categories; j++) {
          let split = norms_lookup[j].split("-");
          let low = split[0];
          let high = split[1];
          
          if (correct_data[i] >= low && correct_data[i] <= high) {
            let result = {
              num_correct: correct_data[i],
              norma: norms_value[j],
            };
            results.push(result);
            break;
          }
        }
      }
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
