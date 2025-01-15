const db = require("../config/db.js");

async function getAllGames(start = 0, limit = 50, like) {
  let where = "";
  let params = [];

  if (like) {
    where = " where name like concat('%',?,'%')";
    params.push(like);
  }

  params.push(start.toString());
  params.push(limit.toString());

  const [rows] = await db.execute(
    `SELECT * FROM games ${where} LIMIT ?,?`,
    params
  );
  return rows;
}

async function getGameById(gameid) {
  const [rows] = await db.execute("SELECT * FROM games WHERE game_id = ?", [
    gameid,
  ]);
  return rows[0];
}

module.exports = { getAllGames, getGameById };
