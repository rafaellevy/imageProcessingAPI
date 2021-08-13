const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
