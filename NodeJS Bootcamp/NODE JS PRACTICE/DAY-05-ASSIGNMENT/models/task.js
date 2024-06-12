//Question 3: Creating a POST API with Express and Mongoose 
//You're building a simple task management application. Your task is to create a POST API endpoint for adding new tasks to the database. Assume you've already set up an Express application and connected it to your MongoDB using Mongoose.
//a) Design the Mongoose schema for a "Task" with fields for "title," "description," "priority," and "dueDate."

const mongoose = require("mongoose");

//Define the task schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required:true,
    enum: ['high','medium','low'],
    default: 'medium',
  },
  due_date:{
    type:Date,
    required:true,
  }
});

//Create a task model :

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;


