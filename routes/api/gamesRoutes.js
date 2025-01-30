const express = require("express");
const router = express.Router();
const gamesController = require("../../controllers/api/gamesController.js");

/**
 * @swagger
 * /api/games:
 *   get:
 *     tags:
 *       - games
 *     summary: Get all games (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: like
 *     responses:
 *       200:
 *         description: A list of games
 */
router.get("/", gamesController.getAllGames);

/**
 * @swagger
 * /api/games/{id}:
 *   get:
 *     tags:
 *       - games
 *     summary: Get a game by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific game
 */
router.get("/:id", gamesController.getGameById);

module.exports = router;
