const Character = require("../models/characters.js");

async function getAllCharacters(req, res) {
  try {
    const { start, limit, gameid } = req.query;
    const characters = await Character.getAllCharacters(start, limit, gameid);
    res.status(200).json(characters);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch characters " + err });
  }
}

async function getCharactersById(req, res) {
  try {
    const character = await Character.getCharactersById(req.params.id);
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).json({ error: "character not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch characters " + err });
  }
}

module.exports = { getAllCharacters, getCharactersById };
