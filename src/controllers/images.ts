import sharp from "sharp";
import path from "path";

export default {
  resize: (req: any, res: any) => {
    const { filename, height, width } = req.query;
    //console.log("../assets/" + filename + ".jpg");
    try {
      // check in cache for filename with the given height and width
      // ram or harddrive.
      sharp(path.join(__dirname, "../assets/" + filename + ".jpg"))
        // sharp("../assets/" + filename + ".jpg")
        .resize(Number(width), Number(height))
        .toBuffer()
        .then((img: Buffer) => res.send(img));
    } catch (error) {
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
