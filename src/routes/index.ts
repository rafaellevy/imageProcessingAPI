// import express library
import express from "express";
import apiRoutes from "./api";

// bring a property from express
const Router = express.Router;
// Instantiating the router
const router = Router();

router.use("/api", apiRoutes);

export default router;
