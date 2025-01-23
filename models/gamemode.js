const db = require("../config/db.js");

async function getAllGameModes(start = 0, limit = 50, gamemodeId) {
  let where = "";
  let join = "";
  let params = [];

  if (gamemodeId) {
    join = "inner join game_game_mode gp on p.game_mode_id = gp.game_mode_id";
    where = " where gp.game_id = ?";
    params.push(gamemodeId);
  }

  params.push(start.toString());
  params.push(limit.toString());
  const [rows] = await db.execute(
    `SELECT p.* FROM game_modes p ${join} ${where} LIMIT ?,?`,
    params
  );
  return rows;
}

async function getGameModesById(gamemodeId) {
  const [rows] = await db.execute(
    "SELECT * FROM game_modes WHERE game_mode_id = ?",
    [gamemodeId]
  );
  return rows[0];
}

module.exports = { getAllGameModes, getGameModesById };
