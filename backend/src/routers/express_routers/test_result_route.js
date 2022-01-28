const TestResultController = require("../../controller/test_result_controller");
const express = require("express");
const router = express.Router();

let controller = new TestResultController();
router.get("/all", controller.getAll);

router.post("/create", controller.create.bind(controller));
router.post("/update", controller.update.bind(controller));

router.get("/:id", controller.getOne);
router.get("/getbytest/:test_id", controller.getByTest);

module.exports = router;
