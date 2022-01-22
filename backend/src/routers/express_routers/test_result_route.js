const TestResultController = require("../../controller/test_result_controller");
const express = require("express");
const router = express.Router();

let controller = new TestResultController();
router.get("/", controller.index);

router.post("/create", controller.create.bind(controller));

router
  .route("/:id")
  .get((req, res) => {})
  .post((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
