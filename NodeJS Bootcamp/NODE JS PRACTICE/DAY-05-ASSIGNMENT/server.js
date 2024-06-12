const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const MenuItem = require("./models/menuItem");
const Task = require("./models/task");

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

//Question 3: Creating a POST API with Express and Mongoose :
// b) Create a POST API endpoint /api/tasks that allow clients to submit new tasks to the database. Ensure it handles request validation and responds with the newly created task.

app.post("/api/tasks", async (req, res) => {
  try {
    //Create a newTask document using Mongoose model
    const task = new Task(req.body);

    //Save the newTask data to the database
    await task.save();
    console.log("Task Data Saved");
    res.status(201).send(task);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//Question 4: Creating a GET API with Express and Mongoose
//Continuing with the task management application, you need to create a GET API endpoint for retrieving a list of tasks from the database.
//Create a GET API endpoint /api/tasks that retrieve a list of all tasks from the database. Ensure it handles errors and responds with the list of tasks in JSON format.

app.get("/api/tasks", async (req, res) => {
  try {
    const data = await Task.find();
    console.log("Task Data Fetched Succesfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Task Data Cannot be Fetched" });
  }
});

app.listen(2000, () => {
  console.log("Server is Listening at port:2000");
});
