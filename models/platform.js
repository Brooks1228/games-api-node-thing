const db = require("../config/db.js");

async function getAllPlatforms(start = 0, limit = 50, like) {
  let where = "";
  let params = [];

  if (like) {
    where = " where name like concat('%',?,'%')";
    params.push(like);
  }

  params.push(start.toString());
  params.push(limit.toString());

  const [rows] = await db.execute(
    `SELECT * FROM platforms ${where} LIMIT ?,?`,
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
