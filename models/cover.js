const db = require("../config/db.js");

async function getAllCovers(start = 0, limit = 50, gameid) {
  let where = "";
  let params = [];

  if (gameid) {
    where = " where game_id = ?";
    params.push(gameid);
  }

  params.push(start.toString());
  params.push(limit.toString());

  const [rows] = await db.execute(
    `SELECT * FROM game_covers ${where} LIMIT ?,?`,
    params
  );
  return rows;
}

async function getCoversById(coverid) {
  const [rows] = await db.execute(
    "SELECT * FROM game_covers WHERE cover_id = ?",
    [coverid]
  );
  return rows[0];
}

module.exports = { getAllCovers, getCoversById };
