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
          instruction: dummy_question[section].question,
          section_id: section,
          option_num: 5,
          option_a: dummy_question[section].option_a,
          option_b: dummy_question[section].option_b,
          option_c: dummy_question[section].option_c,
          option_d: dummy_question[section].option_d,
          option_e: dummy_question[section].option_e,
          answer: answers[i],
          option_type: dummy_question[section].option_type,
          instruction_type: dummy_question[section].question_type,
        });
      }

      await Question.bulkCreate(questions);

      success_response(res, "Success", "Create Successful!");
    });
  },
  async pupulateKreapelinQuestion(section, Question, res) {
    const kreapelin_questions = [
      [
        2, 7, 7, 9, 7, 4, 6, 6, 9, 2, 2, 1, 1, 8, 2, 2, 6, 5, 9, 2, 9, 8, 6, 4,
        7, 2, 9, 4,
      ],
      [
        7, 5, 6, 9, 6, 7, 1, 9, 5, 3, 6, 3, 5, 2, 9, 5, 6, 4, 2, 6, 8, 5, 7, 1,
        6, 1, 8, 3,
      ],
      [
        1, 5, 1, 9, 3, 2, 3, 6, 9, 8, 9, 1, 1, 2, 4, 8, 5, 7, 5, 9, 1, 8, 6, 5,
        7, 5, 5, 5,
      ],
      [
        2, 3, 4, 2, 5, 6, 7, 7, 3, 2, 6, 7, 8, 8, 4, 7, 8, 7, 5, 3, 5, 7, 8, 8,
        2, 4, 6, 5,
      ],
      [
        3, 6, 1, 2, 7, 9, 2, 8, 7, 4, 3, 3, 7, 6, 2, 9, 3, 9, 5, 7, 3, 3, 9, 9,
        6, 1, 3, 1,
      ],
      [
        6, 8, 2, 9, 6, 7, 1, 8, 9, 6, 4, 1, 7, 9, 7, 8, 8, 6, 6, 5, 2, 5, 8, 7,
        3, 7, 1, 7,
      ],
      [
        5, 4, 3, 8, 4, 2, 2, 7, 4, 9, 5, 2, 7, 2, 4, 2, 3, 5, 6, 9, 4, 6, 5, 6,
        6, 1, 7, 5,
      ],
      [
        5, 5, 8, 8, 1, 5, 1, 5, 4, 9, 7, 8, 8, 6, 6, 2, 6, 3, 3, 5, 2, 4, 4, 7,
        7, 9, 1, 1,
      ],
      [
        7, 7, 5, 6, 2, 5, 2, 3, 4, 1, 1, 9, 7, 6, 2, 8, 5, 7, 7, 1, 9, 6, 1, 3,
        4, 4, 1, 6,
      ],
      [
        9, 1, 9, 9, 4, 6, 5, 4, 5, 2, 3, 5, 7, 2, 3, 6, 3, 1, 4, 9, 6, 8, 7, 4,
        1, 9, 3, 5,
      ],
      [
        9, 9, 7, 3, 8, 4, 3, 4, 5, 9, 3, 4, 5, 1, 7, 4, 8, 8, 5, 8, 4, 9, 8, 3,
        5, 5, 5, 4,
      ],
      [
        4, 9, 6, 7, 3, 9, 1, 2, 5, 5, 8, 7, 2, 3, 3, 9, 9, 7, 7, 2, 3, 6, 2, 6,
        6, 8, 9, 7,
      ],
      [
        4, 2, 3, 6, 8, 3, 5, 9, 8, 6, 8, 3, 6, 3, 2, 6, 4, 5, 3, 7, 5, 2, 4, 9,
        8, 7, 1, 3,
      ],
      [
        3, 3, 2, 9, 9, 8, 5, 9, 5, 5, 2, 9, 6, 4, 1, 1, 9, 9, 3, 3, 8, 4, 2, 2,
        7, 2, 5, 3,
      ],
      [
        4, 7, 9, 5, 3, 9, 8, 3, 5, 4, 5, 9, 5, 8, 8, 8, 9, 4, 1, 2, 6, 8, 4, 5,
        5, 5, 2, 1,
      ],
      [
        5, 9, 1, 8, 3, 9, 9, 3, 6, 6, 2, 5, 9, 3, 7, 8, 4, 1, 8, 4, 6, 7, 3, 6,
        2, 4, 7, 2,
      ],
      [
        7, 4, 6, 8, 2, 3, 5, 5, 6, 7, 6, 7, 7, 6, 5, 4, 9, 7, 2, 9, 4, 9, 1, 7,
        3, 1, 8, 2,
      ],
      [
        8, 6, 1, 3, 9, 3, 8, 3, 3, 7, 5, 7, 5, 3, 3, 2, 4, 5, 6, 9, 5, 4, 7, 1,
        3, 8, 4, 3,
      ],
      [
        2, 1, 1, 7, 2, 4, 9, 7, 1, 9, 1, 9, 4, 8, 2, 5, 3, 6, 6, 4, 9, 2, 4, 6,
        7, 1, 7, 6,
      ],
      [
        6, 8, 4, 7, 1, 8, 8, 7, 5, 4, 7, 7, 8, 5, 1, 4, 6, 1, 9, 5, 5, 5, 4, 3,
        5, 9, 7, 2,
      ],
      [
        4, 2, 2, 6, 6, 2, 3, 2, 8, 8, 1, 8, 5, 9, 8, 9, 3, 2, 7, 7, 1, 4, 6, 7,
        3, 8, 1, 6,
      ],
      [
        9, 1, 2, 1, 6, 5, 7, 4, 7, 1, 9, 6, 3, 9, 7, 2, 4, 9, 1, 7, 1, 2, 2, 8,
        9, 2, 4, 9,
      ],
      [
        5, 2, 9, 9, 2, 2, 2, 6, 8, 3, 6, 9, 2, 3, 4, 4, 1, 2, 2, 6, 8, 6, 1, 9,
        1, 9, 4, 4,
      ],
      [
        9, 5, 4, 7, 8, 4, 1, 9, 1, 4, 2, 4, 9, 7, 9, 5, 6, 7, 8, 3, 1, 5, 9, 6,
        7, 4, 2, 1,
      ],
      [
        3, 3, 5, 6, 2, 2, 5, 1, 7, 7, 8, 2, 9, 9, 3, 7, 2, 3, 7, 6, 5, 4, 1, 6,
        7, 3, 7, 2,
      ],
      [
        2, 7, 4, 1, 2, 1, 3, 2, 6, 2, 6, 5, 5, 9, 3, 5, 9, 5, 9, 5, 9, 6, 3, 1,
        4, 1, 8, 1,
      ],
      [
        1, 6, 5, 1, 2, 9, 5, 8, 7, 1, 9, 7, 7, 8, 2, 6, 9, 7, 3, 1, 7, 4, 9, 4,
        8, 3, 7, 6,
      ],
      [
        3, 2, 7, 4, 2, 7, 3, 1, 5, 6, 4, 9, 2, 4, 9, 5, 2, 1, 7, 4, 5, 9, 4, 8,
        5, 6, 5, 7,
      ],
      [
        8, 1, 3, 7, 1, 7, 7, 2, 3, 2, 5, 6, 3, 7, 7, 4, 9, 7, 5, 4, 8, 4, 3, 7,
        5, 2, 3, 3,
      ],
      [
        5, 9, 3, 4, 6, 8, 6, 4, 6, 3, 1, 5, 6, 5, 6, 9, 4, 3, 5, 9, 4, 2, 8, 7,
        3, 2, 9, 2,
      ],
      [
        6, 6, 6, 2, 6, 7, 1, 5, 6, 4, 7, 8, 8, 9, 7, 1, 7, 5, 6, 2, 5, 1, 2, 3,
        1, 2, 8, 3,
      ],
      [
        9, 3, 6, 7, 2, 8, 7, 3, 7, 9, 2, 4, 7, 4, 1, 3, 1, 3, 9, 9, 1, 6, 8, 6,
        3, 9, 7, 3,
      ],
      [
        3, 7, 5, 6, 1, 6, 9, 1, 4, 1, 8, 2, 2, 3, 1, 7, 8, 3, 9, 3, 7, 1, 4, 9,
        9, 2, 4, 1,
      ],
      [
        8, 4, 7, 7, 3, 3, 1, 4, 4, 1, 3, 9, 4, 3, 1, 5, 9, 9, 1, 7, 6, 6, 8, 5,
        3, 3, 9, 6,
      ],
      [
        3, 5, 1, 9, 7, 6, 7, 3, 6, 6, 2, 3, 8, 7, 4, 4, 4, 2, 5, 1, 2, 3, 7, 9,
        4, 9, 6, 8,
      ],
      [
        4, 5, 2, 3, 8, 7, 8, 2, 8, 4, 3, 2, 2, 3, 5, 8, 7, 5, 8, 2, 2, 4, 8, 8,
        8, 4, 7, 9,
      ],
      [
        4, 2, 1, 1, 1, 8, 6, 5, 8, 6, 7, 5, 2, 2, 5, 6, 9, 8, 6, 9, 2, 8, 3, 9,
        6, 3, 2, 1,
      ],
      [
        1, 9, 2, 3, 8, 5, 1, 7, 1, 5, 1, 9, 1, 3, 6, 7, 1, 4, 7, 2, 5, 3, 4, 5,
        4, 3, 1, 4,
      ],
      [
        7, 9, 3, 7, 3, 7, 6, 7, 1, 2, 5, 6, 2, 4, 7, 4, 2, 2, 4, 3, 6, 4, 6, 6,
        6, 2, 9, 9,
      ],
      [
        3, 4, 7, 3, 4, 4, 8, 2, 2, 4, 2, 5, 1, 1, 8, 7, 8, 5, 5, 7, 1, 9, 2, 4,
        7, 3, 4, 7,
      ],
      [
        4, 2, 4, 7, 9, 4, 8, 9, 3, 5, 7, 5, 5, 9, 1, 9, 4, 3, 3, 9, 3, 9, 4, 3,
        6, 7, 5, 2,
      ],
      [
        1, 2, 6, 4, 8, 2, 2, 6, 3, 3, 3, 2, 5, 3, 6, 5, 5, 7, 2, 1, 2, 3, 8, 3,
        4, 8, 6, 1,
      ],
      [
        2, 1, 5, 4, 1, 3, 8, 7, 1, 3, 3, 1, 4, 2, 3, 7, 8, 5, 3, 9, 3, 2, 1, 6,
        4, 1, 9, 6,
      ],
      [
        7, 4, 2, 1, 8, 1, 7, 7, 2, 9, 5, 2, 2, 2, 4, 1, 5, 8, 5, 4, 3, 6, 6, 8,
        4, 3, 3, 4,
      ],
      [
        7, 4, 8, 7, 6, 6, 8, 2, 5, 1, 3, 4, 3, 2, 2, 6, 8, 8, 9, 2, 5, 7, 7, 8,
        3, 2, 7, 4,
      ],
      [
        1, 3, 9, 5, 5, 1, 7, 8, 5, 8, 1, 6, 3, 6, 2, 4, 5, 2, 3, 5, 9, 4, 3, 2,
        4, 4, 8, 1,
      ],
      [
        8, 4, 2, 4, 7, 6, 7, 8, 4, 2, 6, 8, 3, 7, 3, 8, 7, 3, 7, 3, 3, 6, 4, 9,
        4, 2, 4, 7,
      ],
      [
        7, 2, 3, 9, 9, 6, 6, 3, 5, 1, 6, 6, 9, 8, 9, 4, 6, 5, 9, 4, 5, 5, 2, 5,
        4, 2, 4, 2,
      ],
      [
        9, 5, 7, 4, 4, 5, 7, 4, 2, 2, 6, 8, 1, 5, 7, 9, 9, 3, 6, 8, 9, 1, 7, 5,
        9, 2, 6, 1,
      ],
      [
        5, 1, 9, 1, 3, 3, 5, 7, 2, 7, 5, 2, 3, 8, 4, 4, 9, 5, 4, 2, 6, 5, 6, 7,
        8, 6, 6, 2,
      ],
    ];

    // [2,7,7,9,7,4,6,6,9,2,2,1,1,8,2,2,6,5,9,2,9,8,6,4,7,2,9,4],
    const kreapelin_answers = [];
    for (let i = 0; i < kreapelin_questions.length; i++) {
      let column = kreapelin_questions[i];
      let answer = [];
      for (let j = column.length - 1; j > 0; j--) {
        answer.push((column[j] + column[j - 1]) % 10);
      }
      kreapelin_answers.push(answer);
    }

    let questions = [];
    for (let i = 0; i < kreapelin_questions.length; i++) {
      questions.push({
        instruction: kreapelin_questions[i].toString(),
        section_id: section,
        option_num: 1,
        option_a: "-",
        option_b: "-",
        option_c: "-",
        option_d: "-",
        option_e: "-",
        answer: kreapelin_answers[i].toString(),
        option_type: 1,
        instruction_type: 1,
      });
    }

    await Question.bulkCreate(questions);

    success_response(res, "Success", "Create Successful!");
  },
};
