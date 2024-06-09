const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/person");
const MenuItem = require('./models/menuItem');

app.get("/", function (req, res) {
  res.send(
    "Welcome to the hotel ...how I can help you ?,we have list of menus"
  );
});

//post route to add a person
app.post("/person", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    //Create a new person document using the Mongoose model
    const newPerson = new Person(data);

    //Save the newPerson to the database
    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

//GET method to get the person
app.get('/person',async(req,res)=>{
    try{

      // Use the Mongoose model to fetch all persons from the database
      const data = await Person.find()
      console.log("Data Fetched Successfully")
      // Send the list of persons as a JSON response
      res.status(200).json(data)
    }
    catch(err){
      console.log(err)
      res.status(500).json({Error: "Data Cannot be fetched"})
    }
})

app.listen(3000, () => {
  console.log("Server is Listening at port:3000");
});
