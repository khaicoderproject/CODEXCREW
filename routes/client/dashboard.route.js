const express = require("express");
const router = express.Router();
const controller = require("../../controllers/client/dashboard.controller.js");
router.get("/", controller.index);
router.get("/dashboard/members", controller.members);
module.exports = router;
