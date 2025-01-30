const express = require("express");
const router = express.Router();
const similarsController = require("../../controllers/api/similarController.js");

/**
 * @swagger
 * /api/similars:
 *   get:
 *     tags:
 *        - similars
 *     summary: Get all similars (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of similars
 */
router.get("/", similarsController.getAllSimilars);

/**
 * @swagger
 * /api/similars/{id}:
 *   get:
 *     tags:
 *       - similars
 *     summary: Get a similar by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific similar
 */
router.get("/:id", similarsController.getSimilarsById);

module.exports = router;
