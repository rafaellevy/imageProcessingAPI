const express = require("express");
const imageRoute = require("./routes/imageRoute");

const api = express();

api.use(express.urlencoded({ extended: true }));

api.use("/api", imageRoute);

api.get("/", (req, res) => {
  res.json({ server: "up" });
});

module.exports = api;
