const db = require("../config/db.js");

async function getAllGenres(start = 0, limit = 50, genreId) {
  let where = "";
  let join = "";
  let params = [];

  if (genreId) {
    join = "inner join game_genre gp on p.genre_id = gp.genre_id";
    where = " where gp.game_id = ?";
    params.push(genreId);
  }

  params.push(start.toString());
  params.push(limit.toString());
  const [rows] = await db.execute(
    `SELECT p.* FROM genres p ${join} ${where} LIMIT ?,?`,
    params
  );
  return rows;
}

async function getGenresById(genreId) {
  const [rows] = await db.execute("SELECT * FROM genres WHERE genre_id = ?", [
    genreId,
  ]);
  return rows[0];
}

module.exports = { getAllGenres, getGenresById };
