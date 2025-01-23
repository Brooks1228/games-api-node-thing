const db = require("../config/db.js");

async function getAllScreenshots(start = 0, limit = 50, gameId) {
  let where = "";
  let join = "";
  let params = [];
  /*
SELECT p.* FROM igdb.screenshots p
inner join game_screenshot gp on p.screenshot_id = gp.screenshot_id
where gp.game_id = 595;
*/
  if (gameId) {
    join = "inner join screenshots gp on p.screenshot_id = gp.screenshot_id";
    where = " where gp.game_id = ?";
    params.push(gameId);
  }

  params.push(start.toString());
  params.push(limit.toString());
  /*
    SELECT p.* FROM igdb.screenshots p
where gp.game_id = 595;*/
  const [rows] = await db.execute(
    `SELECT p.* FROM screenshots p ${join} ${where} LIMIT ?,?`,
    params
  );
  return rows;
}

async function getScreenshotById(screenshotid) {
  const [rows] = await db.execute(
    "SELECT * FROM screenshots WHERE screenshot_id = ?",
    [screenshotid]
  );
  return rows[0];
}

module.exports = { getAllScreenshots, getScreenshotById };
