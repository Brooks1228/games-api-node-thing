const express = require("express");
const router = express.Router();
const gamemodesController = require("../../controllers/api/gamemodeController.js");

/**
 * @swagger
 * /api/gamemodes:
 *   get:
 *     tags:
 *        - gamemodes
 *     summary: Get all gamemodes (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of gamemodes
 */
router.get("/", gamemodesController.getAllGameModes);

/**
 * @swagger
 * /api/gamemodes/{id}:
 *   get:
 *     tags:
 *       - gamemodes
 *     summary: Get a gamemode by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific gamemode
 */
router.get("/:id", gamemodesController.getGameModesById);

module.exports = router;
