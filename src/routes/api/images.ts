const express = require("express");
const imagesController = require("../../controllers/images");
const Router = express.Router;

const router = Router();

router.get("/", imagesController.resize);

module.exports = router;
