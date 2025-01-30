const express = require("express");
const router = express.Router();
const genresController = require("../../controllers/api/genreController.js");

/**
 * @swagger
 * /api/genres:
 *   get:
 *     tags:
 *        - genres
 *     summary: Get all genres (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of genres
 */
router.get("/", genresController.getAllGenres);

/**
 * @swagger
 * /api/genres/{id}:
 *   get:
 *     tags:
 *       - genres
 *     summary: Get a genre by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific genre
 */
router.get("/:id", genresController.getGenresById);

module.exports = router;
