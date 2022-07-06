let express = require("express");
let app = express();
let ejs = require("ejs");
const haikus = require("./haikus.json");
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { haikus: haikus });
});

app.get("/add", (req, res) => {
  res.send({
    text: "Hello WORLD",
  });
});

app.listen(port);
