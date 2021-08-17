"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("../../controllers/images"));
var Router = express_1.default.Router;
var router = Router();
router.get("/", images_1.default.resize);
exports.default = router;
