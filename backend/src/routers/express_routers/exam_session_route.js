const ExamSessionController = require("../../controller/exam_session_controller");
const express = require("express");
const router = express.Router();

let controller = new ExamSessionController();
router.get("/all", controller.getAll);

router.post("/create", controller.create.bind(controller));
router.post("/update", controller.update.bind(controller));

router.get("/:id", controller.getOne);
router.get("/getbyemail/:email", controller.getByEmail);

module.exports = router;
