const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.post("/api/:query", async (req, res) => {
  try {
    const response = await axios.post(process.env.API_ENDPOINT, {
      prompt: req.params.query,
    });
    // console.log(response.data?.choices[0]?.message?.content);
    res.status(200).json(response.data?.choices[0]?.message?.content);
  } catch (error) {
    console.error("Error making API request:", error);
  }
});

app.listen(PORT, () => console.log(PORT));

module.exports = app;
