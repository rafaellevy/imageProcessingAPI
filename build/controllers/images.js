"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
// unit test for image processing will be code 201 when entry is created and 200 when entry already exist
var cache = [];
exports.default = {
    resize: function (req, res) {
        var _a = req.query, filename = _a.filename, height = _a.height, width = _a.width;
        //console.log("../assets/" + filename + ".jpg");
        // find method takes a predicate ( it's a call back function)
        var cacheEntry = cache.find(function (entry) { return entry.key === "" + filename + height + width; });
        if (cacheEntry) {
            res.send(cacheEntry.buffer);
            console.log("Hit the cache");
            return;
        }
        console.log("Did not hit the cache");
        try {
            // check in cache for filename with the given height and width
            sharp_1.default(path_1.default.join(__dirname, "../assets/" + filename + ".jpg"))
                // sharp("../assets/" + filename + ".jpg")
                .resize(Number(width), Number(height))
                .toBuffer()
                .then(function (img) {
                res.send(img);
                // dynamic key
                // cache[`${filename}${height}${width}`] = img;
                cache.push({
                    key: "" + filename + height + width,
                    buffer: img,
                });
            });
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
