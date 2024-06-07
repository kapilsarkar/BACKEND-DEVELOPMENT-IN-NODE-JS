const mongoose = require("mongoose");

//Define the MONGODB Connection URL
const mongoURL = "mongodb://127.0.0.1/hotels";

//Setup MongoDB connection
mongoose.connect(mongoURL);

//Set the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

//Default event listeners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDb Server");
});

db.on("error", (err) => {
  console.error("MongoDbB connection error", err);
});

db.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

//Export the databse connection

module.exports = db;


