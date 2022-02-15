const AuhtController = require("../../controller/auth_controller");
const express = require("express");
const router = express.Router();

let controller = new AuhtController();

router.post("/login", controller.login);
router.post("/refresh", controller.refresh);
router.post("/verify", controller.verifyToken);

module.exports = router;
