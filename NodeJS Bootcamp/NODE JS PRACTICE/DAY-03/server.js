//Convert of JSON String to Object
const jsonString = '{"name": "Kapil","age": 25,"city": "USA"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

//Convert Object to JSON String

const ObjectToConvert = {
    myName:"Kapil Sarkar",
    age :"33"
}
const jsonStringField = JSON.stringify(ObjectToConvert)
console.log(jsonStringField)

const express = require('express')
const app = express()


app.get('/',function(req,res){
    res.send("Welcome to the hotel ...how I can help you ?,we have list of menus")
})

app.get('/chicken',(req,res)=>{
    res.send("Sure Sir I would love to server chicken")
})

app.get('/idli',(req,res)=>{
    var customized_idli = {
        name:"rava idli",
        size: "10cm diameter",
        is_sambar:true,
        is_chutney:false
    }
    res.send(customized_idli)
})

app.listen(3000,()=>{
    console.log("Server is Listening at port:3000")
})