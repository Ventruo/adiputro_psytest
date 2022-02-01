const { success_response } = require("../helpers/ResponseHelper");

const xlsxFile = require("read-excel-file/node");
const dummy_question = [
  {},
  {},
  {
    question: "Safir adalah …",
    section_id: 2,
    option_a: "Pengembara",
    option_b: "Gurun",
    option_c: "Ahli filsafat",
    option_d: "Batu-batuan",
    option_e: "-",
    option_type: 1,
    question_type: 1,
  },
  {
    question: "nuri : burung = sepat : ?",
    section_id: 3,
    option_a: "mangkuk",
    option_b: "ikan",
    option_c: "aquarium",
    option_d: "merah",
    option_e: "-",
    option_type: 1,
    question_type: 1,
  },
  {
    question: "Burung-burung bernyanyi pada musim semi untuk:",
    section_id: 4,
    option_a: "Memberi tahu bahwa musim semi telah tiba",
    option_b: "Menarik perhatian pasangannya",
    option_c: "Melatih suaranya",
    option_d: "-",
    option_e: "-",
    option_type: 1,
    question_type: 1,
  },
  {
    question: "berpakah jumlah 50 dan 5 orang?",
    section_id: 5,
    option_a: "-",
    option_b: "-",
    option_c: "-",
    option_d: "-",
    option_e: "-",
    option_type: 1,
    question_type: 1,
  },
  {
    question: " 2  4  6  8  10  12 14  ?   ? ",
    section_id: 6,
    option_a: "-",
    option_b: "-",
    option_c: "-",
    option_d: "-",
    option_e: "-",
    option_type: 1,
    question_type: 1,
  },
  {
    question: "kota ….. menghailkan semen",
    section_id: 7,
    option_a: "Jakarta",
    option_b: "Bogor",
    option_c: "Padang",
    option_d: "Medado",
    option_e: "Medan",
    option_type: 1,
    question_type: 1,
  },
  {
    question: "Pilihlah 1 kata yang artinya paling berbeda",
    section_id: 8,
    option_a: "Jurusan",
    option_b: "Timur",
    option_c: "Perjalanan",
    option_d: "Arah",
    option_e: "Selatan",
    option_type: 1,
    question_type: 2,
  },
  {
    question: "link gambar",
    section_id: 9,
    option_a: "link jawaban a",
    option_b: "link jawaban b",
    option_c: "link jawaban c",
    option_d: "link jawaban d",
    option_e: "link jawaban e",
    option_type: 2,
    question_type: 2,
  },
  {
    question: "link gambar",
    section_id: 10,
    option_a: "x",
    option_b: "o",
    option_c: "-",
    option_d: "-",
    option_e: "-",
    option_type: 1,
    question_type: 2,
  },
];

module.exports = {
  populateQuestion(excel_path, sheet, section, Question, res) {
    xlsxFile(excel_path, {
      sheet: sheet,
    }).then(async (rows) => {
      let answers = [];

      if (sheet.includes("6")) {
        // PERSOALAN 6
        for (let i = 0; i < rows.length; i++) {
          for (let j = 0; j < rows[0].length; j += 3) {
            if (!rows[i][j]) j += 1;

            answers[rows[i][j]] = rows[i][j + 1] + "&" + rows[i][j + 2];
          }
        }
      } else {
        // PERSOALAN 2, 3, 4, 5, 7, 8, 9, 10
        for (let i = 0; i < rows.length; i++) {
          for (let j = 0; j < rows[0].length; j += 2) {
            if (!rows[i][j]) j += 1;

            answers[rows[i][j]] = rows[i][j + 1];
          }
        }
      }

      console.table(answers);
      console.log(answers.length);

      let questions = [];
      for (let i = 1; i < answers.length; i++) {
        questions.push({
          question: dummy_question[section].question,
          section_id: section,
          option_a: dummy_question[section].option_a,
          option_b: dummy_question[section].option_b,
          option_c: dummy_question[section].option_c,
          option_d: dummy_question[section].option_d,
          option_e: dummy_question[section].option_e,
          answer: answers[i],
          option_type: dummy_question[section].option_type,
          question_type: dummy_question[section].question_type,
        });
      }

      await Question.bulkCreate(questions);

      success_response(res, "Success", "Create Successful!");
    });
  },
};
