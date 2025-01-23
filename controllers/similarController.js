const Similar = require("../models/similar.js");

async function getAllSimilars(req, res) {
  try {
    const { start, limit, gameid } = req.query;
    const similars = await Similar.getAllSimilars(start, limit, gameid);
    res.status(200).json(similars);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch similars " + err });
  }
}

async function getSimilarsById(req, res) {
  try {
    const similar = await Similar.getSimilarsById(req.params.id);
    if (similar) {
      res.status(200).json(similar);
    } else {
      res.status(404).json({ error: "similar not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch similars " + err });
  }
}

module.exports = { getAllSimilars, getSimilarsById };
