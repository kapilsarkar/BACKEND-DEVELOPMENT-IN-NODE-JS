const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

//POST route to add a person :

router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
  try {
    // Use the Mongoose model to fetch all persons from the database
    const data = await Person.find();
    console.log("Person Data Fetched Successfully");
    // Send the list of persons as a JSON response
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Data Cannot be fetched" });
  }
});

//Parametrized API calls
router.get("/:workType", async (req, res) => {
  //Here WorkType is name of a variable

  try {
    const workType = req.params.workType; //Extract the workType from the URL parameter
    if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
      const response = await Person.find({ work: workType });
      console.log("Work Data Fetched Successfully");
      res.send(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

module.exports = router;
