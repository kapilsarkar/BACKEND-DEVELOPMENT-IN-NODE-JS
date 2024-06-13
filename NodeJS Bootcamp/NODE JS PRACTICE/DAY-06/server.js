const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(
    "Welcome to the hotel ...how I can help you ?,we have list of menus"
  );
});

app.listen(5000, () => {
  console.log("Server is Listening at port:5000");
});
