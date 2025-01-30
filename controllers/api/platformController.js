const Platform = require("../../models/platform.js");

async function getAllPlatforms(req, res) {
  try {
    const { start, limit, gameid } = req.query;
    const platforms = await Platform.getAllPlatforms(start, limit, gameid);
    res.status(200).json(platforms);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch platforms " + err });
  }
}

async function getPlatformById(req, res) {
  try {
    const platform = await Platform.getPlatformById(req.params.id);
    if (platform) {
      res.status(200).json(platform);
    } else {
      res.status(404).json({ error: "platform not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch platforms " + err });
  }
}

module.exports = { getAllPlatforms, getPlatformById };
