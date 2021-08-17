"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express library
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./api"));
// bring a property from express
var Router = express_1.default.Router;
// Instantiating the router
var router = Router();
router.use("/api", api_1.default);
exports.default = router;
