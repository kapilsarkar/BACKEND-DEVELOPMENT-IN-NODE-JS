const mongoose = require('mongoose')

//Define the MonGoDB connection :
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

//Setup MongoDb connection :
mongoose.connect(mongoURL)

//Set the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection

//Default event listeners for database connection
db.on('connected',()=>{
    console.log("Connected to MongoDB Server")
})

db.on('error',(err)=>{
   console.error("MongoDB connection error",err)
})

db.on('disconnected',()=>{
    console.log("MongoDB Disconnected")
})

//Export th database connection
module.exports = db
