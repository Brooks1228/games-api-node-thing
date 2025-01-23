const db = require("../config/db.js");

async function getAllWebsites(start = 0, limit = 50, gameId) {
  let where = "";
  let join = "";
  let params = [];
  /*
SELECT p.* FROM igdb.websites p
inner join game_website gp on p.website_id = gp.website_id
where gp.game_id = 595;
*/
  if (gameId) {
    join = "inner join websites gp on p.website_id = gp.website_id";
    where = " where gp.game_id = ?";
    params.push(gameId);
  }

  params.push(start.toString());
  params.push(limit.toString());
  /*
    SELECT p.* FROM igdb.websites p
where gp.game_id = 595;*/
  const [rows] = await db.execute(
    `SELECT p.* FROM websites p ${join} ${where} LIMIT ?,?`,
    params
  );
  return rows;
}

async function getWebsiteById(websiteid) {
  const [rows] = await db.execute(
    "SELECT * FROM websites WHERE website_id = ?",
    [websiteid]
  );
  return rows[0];
}

module.exports = { getAllWebsites, getWebsiteById };
