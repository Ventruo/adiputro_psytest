const QuestionController = require("../../controller/question_controller");
const express = require("express");
const router = express.Router();

let controller = new QuestionController();
router.get("/all", controller.getAll);

router.post("/create", controller.create.bind(controller));
router.post("/createFromExcel", controller.createFromExcel.bind(controller));
router.post(
  "/createKreapelinQuestion",
  controller.createKreapelinQuestion.bind(controller)
);
router.post("/update", controller.update.bind(controller));

router.get("/:id", controller.getOne);

module.exports = router;
