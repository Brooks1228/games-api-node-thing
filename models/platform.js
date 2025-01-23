const db = require("../config/db.js");

async function getAllPlatforms(start = 0, limit = 50, gameId) {
  let where = "";
  let join = "";
  let params = [];
  /*
SELECT p.* FROM igdb.platforms p
inner join game_platform gp on p.platform_id = gp.platform_id
where gp.game_id = 595;
*/
  if (gameId) {
    join = "inner join game_platform gp on p.platform_id = gp.platform_id";
    where = " where gp.game_id = ?";
    params.push(gameId);
  }

  params.push(start.toString());
  params.push(limit.toString());
  /*
    SELECT p.* FROM igdb.platforms p
where gp.game_id = 595;*/
  const [rows] = await db.execute(
    `SELECT p.* FROM platforms p ${join} ${where} LIMIT ?,?`,
    params
  );
  return rows;
}

async function getPlatformById(platformid) {
  const [rows] = await db.execute(
    "SELECT * FROM platforms WHERE platform_id = ?",
    [platformid]
  );
  return rows[0];
}

module.exports = { getAllPlatforms, getPlatformById };
