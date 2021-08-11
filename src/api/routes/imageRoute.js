const router = require("express").Router();
const fs = require("fs");

const resizeImg = (name, height, width) => {
  // use file system
  // check images folder to see if name exists
  // make copy of image in thumbnail folder
  // resize image in thumb folder to specified height and width
  // display image to user after it has been resized

  // need to test this
  fs.access(`../images/${name}.jpg`);

  console.log(name, height, width);
};

router.get("/images", (req, res) => {
  const { name, height, width } = req.query;

  resizeImg(name, height, width);

  res.send("hits router");
});

module.exports = router;
