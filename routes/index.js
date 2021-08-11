// import express library
const express = require("express");
const apiRoutes = require("./api");

// bring a property from express
// express router property was capitalized by the Express Core Devs
const Router = express.Router;

// Instantiating the router
const router = Router();

router.use("/api", apiRoutes);
module.exports = router;
