import express from "express";
import imagesController from "../../controllers/images";
const Router = express.Router;

const router = Router();

router.get("/", imagesController.resize);

export default router;
