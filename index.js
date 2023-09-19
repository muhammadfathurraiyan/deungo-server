const express = require("express");
const server = require("./api/server");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

// Apply CORS middleware to the '/product' route
app.use("/api/server", cors());

// Use your product route
app.use("/api/server", server);

app.listen(PORT, () => console.log(PORT));
