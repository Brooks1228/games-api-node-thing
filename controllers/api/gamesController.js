const Game = require("../../models/game.js");

async function getAllGames(req, res) {
  try {
    const { start, limit, like } = req.query;
    const games = await Game.getAllGames(start, limit, like);
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games " + err });
  }
}

async function getGameById(req, res) {
  try {
    const game = await Game.getGameById(req.params.id);
    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ error: "game not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games " + err });
  }
}

module.exports = { getAllGames, getGameById };
