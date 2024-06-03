const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Welcome to the hotel ...how I can help you ?,we have list of menus")
})

app.get('/chicken',function(req,res){
    res.send("Sure Sir I would love to server chicken")
})

app.get('/idli',function(req,res){
    var customized_idli = {
        name:"rava idli",
        size: "10cm diameter",
        is_sambar:true,
        is_chutney:false
    }
    res.send(customized_idli)
})
 app.post('/person',(req,res)=>{
    res.send("Data of person saved")
 })
app.post('/items',(req,res)=>{
     res.send("Data of items is Saved ")
})

app.listen(3000,()=>{
    console.log("Server is Listening at port:3000")
})

// {
//     "name": "Alice",
//     "age": 28,
//     "work": "Chef",
//     "mobile": "123-456-7890",
//     "email": "alice@example.com",
//     "address": "123 Main St, City",
//     "salary": 60000
//     }
    
// {
//     "name": "Mango Smoothie",
//     "price": 4.99,
//     "taste": "Sweet",
//     "is_drink": true,
//     "ingredients": [
//         "mango",
//         "yogurt",
//         "honey"
//     ],
//     "num_sales": 45
// }