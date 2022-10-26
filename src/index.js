const express = require("express");
const morgan = require("morgan");
const port = 4000;
const path = require("path");
const handlebars = require("express-handlebars");
const route = require("./routes");
const app = express();

// app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")))

app.engine(
  "hbs",
  handlebars.engine({ defaultLayout: "main", extname:".hbs" })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
