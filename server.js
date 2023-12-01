// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const morgan = require("morgan");
const colors = require("colors");
// Create an Express app
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Example route
app.get("/", (req, res) => {
  res.send("Template for backend Development");
});

// Set the port for the server
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`server started on port ${port}`.blue);
});
