const express = require("express");
const Router = express.Router;

const router = Router();

router.get("/", (req, res) => {
  const { fileName, height, width } = req.query;
});

module.exports = router;
