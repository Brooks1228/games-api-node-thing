const axios = require("axios");
const settings = require("../../config/settings");
async function renderGamePage(req, res) {
  const response = await axios.get(
    `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`
  );
  let data = response.data;
  const cover = await getGameDataFromEndpoint(req.params.id, "covers");

  const genres = await getGameDataFromEndpoint(req.params.id, "genres");
  const gameModes = await getGameDataFromEndpoint(req.params.id, "gameModes");
  const platforms = await getGameDataFromEndpoint(req.params.id, "platforms");
  const characters = await getGameDataFromEndpoint(req.params.id, "characters");
  const websites = await getGameDataFromEndpoint(req.params.id, "websites");
  const screenshots = await getGameDataFromEndpoint(
    req.params.id,
    "screenshots"
  );
  const similars = await getGameDataFromEndpoint(req.params.id, "similars");

  data.genres = genres;
  data.gameModes = gameModes;
  data.platforms = platforms;
  data.characters = characters;
  data.websites = websites;
  data.screenshots = screenshots;
  data.similars = similars;

  data.cover = cover[0] ? cover[0].url : "";
  res.render("game", {
    title: "CMP - IDGB: ",
    gameData: data,
  });
}

async function getGameDataFromEndpoint(gameid, endpoint) {
  let values = await axios.get(
    `${settings.ROOT}:${settings.PORT}/api/${endpoint}`,
    {
      params: { gameid: gameid },
    }
  );
  return values.data;
}

module.exports = { renderGamePage };
