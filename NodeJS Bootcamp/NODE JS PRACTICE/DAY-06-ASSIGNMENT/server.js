const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(
    "Welcome to Our Hotel"
  );
});

//Import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

//Use the router
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(5000, () => {
  console.log("Server is Listening at port:5000");
});
