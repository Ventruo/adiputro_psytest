const TestController = require("../../controller/test_controller");
const express = require("express");
const router = express.Router();

let controller = new TestController();
router.get("/all", controller.getAll);

router.post("/create", controller.create.bind(controller));
router.post("/update", controller.update.bind(controller));
router.post("/addtest", controller.addtest.bind(controller));

router.get("/getbyExamSession/:exam_session_id", controller.getbyExamSession);
router.get("/:id", controller.getOne);

module.exports = router;
