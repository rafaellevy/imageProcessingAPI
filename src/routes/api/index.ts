import express from "express";
import imagesRoutes from "./images";

const Router = express.Router;
const router = Router();

router.use("/images", imagesRoutes);

export default router;
