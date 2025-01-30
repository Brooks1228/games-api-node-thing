const express = require("express");
const router = express.Router();
const platformsController = require("../../controllers/api/platformController.js");

/**
 * @swagger
 * /api/platforms:
 *   get:
 *     tags:
 *        - platforms
 *     summary: Get all platforms (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of platforms
 */
router.get("/", platformsController.getAllPlatforms);

/**
 * @swagger
 * /api/platforms/{id}:
 *   get:
 *     tags:
 *       - platforms
 *     summary: Get a platform by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific platform
 */
router.get("/:id", platformsController.getPlatformById);

module.exports = router;
