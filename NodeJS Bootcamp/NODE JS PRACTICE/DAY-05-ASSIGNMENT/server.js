const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const MenuItem = require("./models/menuItem");

app.get("/", (req, res) => {
  res.send(
    "Welcome to the  New Hotel Kapil how I can help you ?,we have list of menus"
  );
});

// Question 1: Create a POST Method API
// Create a POST method API to store data or menu items as per the schema we discussed ( /menu )

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

//Question 2: Create a GET Method API
//Create a GET method API to List down the All Menu Items as per the schema we discussed ( /menu )

app.get("/menu", async (req, res) => {
  try {
    // Use the Mongoose model to fetch all menuItems from the database
    const data = await MenuItem.find();
    console.log("Data Fetched Successfully");

    // Send the list of menuItems as a JSON response
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "MenuItems cannot be fetched" });
  }
});

app.listen(2000, () => {
  console.log("Server is Listening at port:2000");
});
