const express = require("express");
const imagesRoutes = require("./images");
const Router = express.Router;

const router = Router();

router.use("/images", imagesRoutes);

module.exports = router;
