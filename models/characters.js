const db = require("../config/db.js");

async function getAllCharacters(start = 0, limit = 50, characterId) {
  let where = "";
  let join = "";
  let params = [];

  if (characterId) {
    join = "inner join game_characters gp on p.character_id = gp.characters_id";
    where = " where gp.game_id = ?";
    params.push(characterId);
  }

  params.push(start.toString());
  params.push(limit.toString());
  const [rows] = await db.execute(
    `SELECT p.* FROM characters p ${join} ${where} LIMIT ?,?`,
    params
  );
  return rows;
}

async function getCharactersById(characterId) {
  const [rows] = await db.execute(
    "SELECT * FROM characters WHERE character_id = ?",
    [characterId]
  );
  return rows[0];
}

module.exports = { getAllCharacters, getCharactersById };
