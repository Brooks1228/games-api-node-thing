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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// run
app.listen(PORT, () => {
  console.log(`try going to http://localhost:${PORT}/api/games`);
  console.log(`swagger docs available at http://localhost:${PORT}/api-docs`);
});
