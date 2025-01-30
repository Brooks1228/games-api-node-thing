const GameMode = require("../../models/gamemode.js");

async function getAllGameModes(req, res) {
  try {
    const { start, limit, gameid } = req.query;
    const gamemodes = await GameMode.getAllGameModes(start, limit, gameid);
    res.status(200).json(gamemodes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gamemodes " + err });
  }
}

async function getGameModesById(req, res) {
  try {
    const gamemode = await GameMode.getGameModesById(req.params.id);
    if (gamemode) {
      res.status(200).json(gamemode);
    } else {
      res.status(404).json({ error: "gamemode not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gamemodes " + err });
  }
}

module.exports = { getAllGameModes, getGameModesById };
