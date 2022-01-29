const RegistrantController = require("../../controller/registrant_controller");
const express = require("express");
const router = express.Router();

let controller = new RegistrantController();
router.get("/all", controller.getAll);

router.post("/create", controller.create.bind(controller));
router.post("/update", controller.update.bind(controller));

router.get("/:email", controller.getOne);

module.exports = router;
