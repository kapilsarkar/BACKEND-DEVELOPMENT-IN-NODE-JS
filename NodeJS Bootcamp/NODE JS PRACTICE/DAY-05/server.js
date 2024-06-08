const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/person");

app.get("/", function (req, res) {
  res.send(
    "Welcome to the hotel ...how I can help you ?,we have list of menus"
  );
});

//post route to add a person
app.post("/person", (req, res) => {
  const data = req.body; // Assuming the request body contains the person data

  //Create a new person document using the Mongoose model
  const newPerson = new Person(data);

  //Save the newPerson to the database
  newPerson.save((error,savedPerson)=>{
    if(error){
        console.log("Error in Saving Person Data",error)
        res.status(500).json({error:'Internal server error'})
    }
    else{
        console.log("Data Save Successfully")
        res.status(200).json(savedPerson)
    }
  })
 
});

app.listen(3000, () => {
  console.log("Server is Listening at port:3000");
});
