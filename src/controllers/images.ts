import sharp from "sharp";
import path from "path";

interface CacheEntry {
  key: String;
  buffer: Buffer;
}

// unit test for image processing will be code 201 when entry is created and 200 when entry already exist

const cache: CacheEntry[] = [];

export default {
  resize: (req: any, res: any) => {
    const { filename, height, width } = req.query;
    //console.log("../assets/" + filename + ".jpg");
    // find method takes a predicate ( it's a call back function)
    const cacheEntry: CacheEntry | undefined = cache.find(
      (entry) => entry.key === `${filename}${height}${width}`
    );
    if (cacheEntry) {
      res.send(cacheEntry.buffer);
      console.log("Hit the cache");
      return;
    }
    console.log("Did not hit the cache");
    try {
      // check in cache for filename with the given height and width
      sharp(path.join(__dirname, "../assets/" + filename + ".jpg"))
        // sharp("../assets/" + filename + ".jpg")
        .resize(Number(width), Number(height))
        .toBuffer()
        .then((img: Buffer) => {
          res.send(img);
          // dynamic key
          // cache[`${filename}${height}${width}`] = img;
          cache.push({
            key: `${filename}${height}${width}`,
            buffer: img,
          });
        });
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
