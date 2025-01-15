const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "IGDB Games REST API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], // Points to API route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
