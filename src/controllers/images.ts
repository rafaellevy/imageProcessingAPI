const sharp = require("sharp");
const path = require("path");

module.exports = {
  resize: (req, res) => {
    const { filename, height, width } = req.query;
    //console.log("../assets/" + filename + ".jpg");
    try {
      sharp(path.join(__dirname, "../assets/" + filename + ".jpg"))
        // sharp("../assets/" + filename + ".jpg")
        .resize(Number(width), Number(height))
        .toBuffer()
        .then((img) => res.send(img));
    } catch (e) {
      console.error(e);
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
