"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", routes_1.default);
app.get("*", function (req, res) {
    res.status(404).send("Page Not Found");
});
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
