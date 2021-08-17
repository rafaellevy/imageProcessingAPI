"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
exports.default = {
    resize: function (req, res) {
        var _a = req.query, filename = _a.filename, height = _a.height, width = _a.width;
        //console.log("../assets/" + filename + ".jpg");
        try {
            // check in cache for filename with the given height and width
            // ram or harddrive.
            sharp_1.default(path_1.default.join(__dirname, "../assets/" + filename + ".jpg"))
                // sharp("../assets/" + filename + ".jpg")
                .resize(Number(width), Number(height))
                .toBuffer()
                .then(function (img) { return res.send(img); });
        }
        catch (error) {
            console.error(error);
            res.status(404).send("Image Not Found");
        }
        // using json to debug
        // res.json({
        //   filename,
        //   height,
        //   width,
        // });
    },
};
