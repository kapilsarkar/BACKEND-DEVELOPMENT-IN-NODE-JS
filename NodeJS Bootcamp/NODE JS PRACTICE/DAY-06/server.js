const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/person");
app.get("/", (req, res) => {
  res.send(
    "Welcome to the hotel ...how I can help you ?,we have list of menus"
  );
});

//post route to add a person :

app.post("/person", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    //Create a new person document using the Mongoose model
    const newPerson = new Person(data);

    //Save the newPerson to the database:
    const response = await newPerson.save();
    console.log("Person Data Saved");
    res.status(200).json(response);

    
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

//GET method to get the person
app.get("/person", async (req, res) => {
  try {
    // Use the Mongoose model to fetch all persons from the database
    const data = await Person.find();
    console.log("Person Data Fetched Successfully");
    // Send the list of persons as a JSON response
    res.status(200).json(data);
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Data Cannot be fetched" });
  }
});

app.listen(5000, () => {
  console.log("Server is Listening at port:5000");
});

// {
//   "name": "Hrithik",
//   "age": 46,
//   "work": "manager",
//   "mobile": "123-65887",
//   "email": "hrc@example.com",
//   "address": "Mumbai",
//   "salary": 50000
// }
