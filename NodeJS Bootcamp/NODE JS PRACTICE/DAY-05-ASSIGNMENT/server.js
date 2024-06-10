const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('Welcome to the  New Hotel Kapil how I can help you ?,we have list of menus')
})

app.listen(2000,()=>{
    console.log("Server is Listning at port:2000")
})

