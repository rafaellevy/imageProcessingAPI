import express from "express";
const imagesRoutes = require("./images");
const Router = express.Router;

const router = Router();

router.use("/images", imagesRoutes);

// module.exports = router;
export default router;
