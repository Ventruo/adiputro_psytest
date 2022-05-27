const SectionOngoingController = require("../../controller/section_ongoing_controller");
const express = require("express");
const router = express.Router();

let controller = new SectionOngoingController();
router.get("/all", controller.getAll);

router.post("/create", controller.create.bind(controller));
router.post("/update", controller.update.bind(controller));

router.post(
  "/updateTempAnswers",
  controller.updateTempAnswers.bind(controller)
);

router.post("/stopSection", controller.stopSection.bind(controller));

router.get("/:id", controller.getOne);
router.get("/getbysection/:section_id", controller.getBySection);
router.get("/getbytest/:test_id", controller.getByTest);

module.exports = router;
