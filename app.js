const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig.js");
const path = require("path");
const settings = require("./config/settings.js");
const app = express();

const gameRoutes = require("./routes/api/gamesRoutes");
const platformRoutes = require("./routes/api/platformRoutes");
const screenshotRoutes = require("./routes/api/screenshotRoutes");
const charactersRoutes = require("./routes/api/charactersRoutes");
const genresRoutes = require("./routes/api/genreRoutes");
const gamemodesRoutes = require("./routes/api/gamemodeRoutes");
const websiteRoutes = require("./routes/api/websiteRoutes");
const similarsRoutes = require("./routes/api/similarRoutes");
const coversRoutes = require("./routes/api/coverRoutes");

app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/screenshots", screenshotRoutes);
app.use("/api/characters", charactersRoutes);
app.use("/api/genres", genresRoutes);
app.use("/api/gamemodes", gamemodesRoutes);
app.use("/api/websites", websiteRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/similars", similarsRoutes);
app.use("/api/covers", coversRoutes);

const homeRoute = require("./routes/views/webpageRoutes.js");
app.use("/", homeRoute);
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// run
app.listen(settings.PORT, () => {
  console.log("server running!");
  console.log(
    `swagger docs available at ${settings.ROOT}:${settings.PORT}/api-docs`
  );
});

// Options for Swagger UI
const swaggerOptions = {
  swaggerOptions: {
    tryItOutEnabled: true, // This enables "Try it out" by default
    defaultModelsExpandDepth: -1, // Prevents models from expanding
    defaultModelExpandDepth: 2, // Sets depth for model expansion
  },
};
