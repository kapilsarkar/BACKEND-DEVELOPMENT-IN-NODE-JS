const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/person");
const MenuItem = require("./models/menuItem");

app.get("/", (req, res) => {
  res.send(
    "Welcome to the hotel ...how I can help you ?,we have list of menus"
  );
});






//GET method for menu :
app.get("/menu", async (req, res) => {
  try {
    // Use the Mongoose model to fetch all menuItems from the database
    const data = await MenuItem.find();
    console.log("Menu Data Fetched Successfully");

    // Send the list of menuItems as a JSON response
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "MenuItems cannot be fetched" });
  }
});

//POST method for menu :
app.post("/menu", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    //Create a newMenu document using Mongoose model
    const newMenu = new MenuItem(data);

    //Save the newMenu data to the database
    const response = await newMenu.save();
    console.log("Menu Data Saved");
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

//Import the router files
const personRoutes = require('./routes/personRoutes')

//Use the router
app.use('/person',personRoutes)

app.listen(5000, () => {
  console.log("Server is Listening at port:5000");
});
