const express = require('express')
const router = express.Router()
const MenuItem = require("./../models/menuItem");

//GET method for menu :
router.get("/", async (req, res) => {
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
router.post("/", async (req, res) => {
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

  module.exports = router;