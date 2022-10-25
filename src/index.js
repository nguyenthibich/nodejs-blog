const express = require("express");
const morgan = require("morgan");
const port = 4000;
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();

// app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")))

app.engine(
  "hbs",
  handlebars.engine({ defaultLayout: "main", extname:".hbs" })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", (req, res, next) => {
  res.render("news", { layout: false });
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
