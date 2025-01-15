const express = require("express");
const router = express.Router();
const platformsController = require("../controllers/platformController.js");

router.get("/", platformsController.getAllPlatforms);
router.get("/:id", platformsController.getPlatformById);

module.exports = router;
