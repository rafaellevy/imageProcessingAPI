// import express library
import express from "express";
const apiRoutes = require("./api");

// bring a property from express
const Router = express.Router;

// Instantiating the router
const router = Router();

router.use("/api", apiRoutes);

// module.exports = router;
export default router;
