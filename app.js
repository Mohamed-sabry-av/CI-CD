const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("works fine");
});

module.exports = app;