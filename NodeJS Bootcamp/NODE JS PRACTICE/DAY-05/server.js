const express = require('express')
const app = express()
const db = require('./db')


app.get('/',function(req,res){
    res.send("Welcome to the hotel ...how I can help you ?,we have list of menus")
})

app.listen(3000,()=>{
    console.log("Server is Listening at port:3000")
})

