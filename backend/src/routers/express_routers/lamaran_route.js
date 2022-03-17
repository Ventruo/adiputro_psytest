const LamaranController = require("../../controller/lamaran_controller");
const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer();

let controller = new LamaranController();
router.get("/all", controller.getAll);

router.post(
  "/create",
  upload.single("lampiran"),
  controller.create.bind(controller)
);
router.post(
  "/update",
  upload.single("lampiran"),
  controller.update.bind(controller)
);

router.get("/:email", controller.getOne);
router.get("/", controller.getByFilter);

module.exports = router;
