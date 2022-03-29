const AuhtController = require("../../controller/auth_controller");
const express = require("express");
const router = express.Router();

let controller = new AuhtController();

router.post("/login", controller.login);
router.get("/user", controller.authenticatedUser.bind(controller));
router.get("/admin", controller.authenticatedAdmin.bind(controller));
router.post("/refresh", controller.refresh);
router.post("/verify", controller.verifyToken);
router.post("/logout", controller.logout);

module.exports = router;
