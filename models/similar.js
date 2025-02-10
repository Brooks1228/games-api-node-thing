// const db = require("../config/db.js");

// async function getAllSimilars(start = 0, limit = 50, gameId) {
//   let where = "";
//   let params = [];

//   if (gameId) {
//     where = " where g.game_id = ? ";
//     params.push(gameId);
//   }
//   params.push(start.toString());
//   params.push(limit.toString());

//   const [rows] = await db.execute(
//     `select g.*, g2.game_id as similar_game_id, g2.name as similar_game_name, g2.category as similar_category, g2.category as similar_category, g2.summary as similar_summary from games g
//     inner join game_similar gs on gs.game_id = g.game_id
//     inner join games g2 on gs.similar_game_id = g2.game_id
//     left join game_covers gc on gc.game_id = g.game_id
//     ${where} limit ?,?`,
//     params
//   );
//   return rows;
// }

// async function getSimilarsById(gameId) {
//   const [rows] = await db.execute(
//     "Select * from game_similar gs inner join games g on g.game_id = gs.game_id where gs.similar_game_id = ?",
//     [gameId]
//   );
//   return rows[0];
// }

// module.exports = { getAllSimilars, getSimilarsById };
const db = require("../config/db");

async function getAllSimilars(start = 0, limit = 50, gameId) {
  let where = "";
  let join = "";
  let params = [];
  if (gameId) {
    join = "";
    where = " where gs.game_id = ?";
    params.push(gameId);
  }
  params.push(start.toString());
  params.push(limit.toString());

  const [rows] = await db.execute(
    `select g.*, gc.url as cover_url from games g inner join game_similar gs on gs.similar_game_id = g.game_id left join game_covers gc on gc.game_id = g.game_id ${where} limit ?,?`,
    params
  );
  return rows;
}

async function getSimilarById(gameId) {
  const [rows] = await db.execute(
    "Select * from game_similar gs inner join games g on g.game_id = gs.game_id where gs.similar_game_id = ?",
    [gameId]
  );

  return rows[0];
}
module.exports = { getAllSimilars, getSimilarById };
