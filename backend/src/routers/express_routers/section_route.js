const SectionController = require("../../controller/section_controller");
const express = require("express");
const router = express.Router();

let controller = new SectionController();
router.get("/", controller.index);
router.get("/all", controller.getAll);

router.post("/create", controller.create.bind(controller));
router.post("/update", controller.update.bind(controller));

module.exports = router;
