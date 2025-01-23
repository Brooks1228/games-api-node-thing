const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig.js");

const PORT = 3001;
const app = express();

// games
const gameRoutes = require("./routes/gamesRoutes");

app.use("/api/games", gameRoutes);

// platforms
const platformRoutes = require("./routes/platformRoutes");

app.use("/api/platforms", platformRoutes);

// screenshots
const screenshotRoutes = require("./routes/screenshotRoutes");

app.use("/api/screenshots", screenshotRoutes);

// characters
const charactersRoutes = require("./routes/charactersRoutes");

app.use("/api/characters", charactersRoutes);

// genres
const genresRoutes = require("./routes/genreRoutes");

app.use("/api/genres", genresRoutes);

// game modes
const gamemodesRoutes = require("./routes/gamemodeRoutes");

app.use("/api/gamemodes", gamemodesRoutes);

// websites
const websiteRoutes = require("./routes/websiteRoutes");

app.use("/api/websites", websiteRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// similar
const similarsRoutes = require("./routes/similarRoutes");

app.use("/api/similars", similarsRoutes);

// covers
const coversRoutes = require("./routes/coverRoutes");

app.use("/api/covers", coversRoutes);

// run
app.listen(PORT, () => {
  console.log(`try going to http://localhost:${PORT}/api/games`);
  console.log(`try going to http://localhost:${PORT}/api/characters`);
  console.log(`swagger docs available at http://localhost:${PORT}/api-docs`);
});

// Options for Swagger UI
const swaggerOptions = {
  swaggerOptions: {
    tryItOutEnabled: true, // This enables "Try it out" by default
    defaultModelsExpandDepth: -1, // Prevents models from expanding
    defaultModelExpandDepth: 2, // Sets depth for model expansion
  },
};
