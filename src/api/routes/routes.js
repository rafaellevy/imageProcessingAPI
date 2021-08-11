const routes = require("express").Router();

routes.get("/:name/:height/:width", (req, res) => {
  const { name, height, width } = req.params;

  // figure out how to use url query instead of parameters

  console.log(name, height, width);

  // use file system
  // check images folder to see if name exists
  // make copy of image in thumbnail folder
  // resize image in thumb folder to specified height and width

  res.send("hits router");
});

module.exports = routes;
