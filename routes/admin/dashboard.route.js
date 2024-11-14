const express = require("express");
const router = express.Router();
const controllerAdmin = require("../../controllers/admin/dashboard.controller.js");
router.get("/", controllerAdmin.index);
router.get("/members", controllerAdmin.members);
module.exports = router;
