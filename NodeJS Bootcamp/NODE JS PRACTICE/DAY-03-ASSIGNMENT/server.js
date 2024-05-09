// Problem 1: Understanding Servers and Express.js
// Explain in your own words what a server is in the context of Node.js. Then, write step-by-step instructions on how to create a basic server using Express.js.


//Solution-1:
//Understanding servers and express js
//A server in Node JS is a Computer Program that receives and responds to requests from clients(like web browsers or mobile apps) over a network. It processes requests and sends back appropriate responses.

//Creating  a basic server using Express js

// const { json } = require('body-parser')
// const express =  require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send('Hello Server Created')
// })

// app.listen(3000,()=>{
//     console.log('Server is running at port:3000')
// })


// Problem 2: JSON Manipulation
// a) Define JSON and explain its importance in web development.
// b) Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading", "painting"]}, explain how you would extract the value of the "age" key. 
// c) How would you convert the following object into a JSON data string? {"title": "Book", "pages": 200}

//Solution 2 :
//a) JSON (JavaScript Object Notation) is a lightweight data interchange format used to exchange data between a server and a client. It's easy for humans to read and write, and it's easy for machines to parse and generate. 

//b) Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading", "painting"]}, explain how you would extract the value of the "age" key.

const jsonData = {"name": "Alice", "age": 25, "hobbies": ["reading", "painting"]}
console.log(jsonData)
console.log(jsonData.age)

// c) How would you convert the following object into a JSON data string? {"title": "Book", "pages": 200}

const objectData = {"title": "Book", "pages": 200}
console.log(objectData)
const jsonString = JSON.stringify(objectData)
console.log(`JSON DATA STRING: ${jsonString}`)

//Problem 3: API and Endpoints
// a) Define what an API is and its role in software development. 
// b) Explain what an endpoint is in the context of web APIs. 
// c) Provide an example of an endpoint you might find in a social media application.

//Solution 3 :

// a) Define what an API is and its role in software development. 
//a) An API (Application Programming Interface) is a set of rules and protocols that allows different software components to communicate and interact with each other. It defines how requests and responses should be structured. 

// b) Explain what an endpoint is in the context of web APIs. 

// b) An endpoint is a specific URL (Uniform Resource Locator) that represents a particular function or service provided by an API. It's the specific location where clients can make requests to access certain data or perform actions. 

// c) Provide an example of an endpoint you might find in a social media application.

//c) Example of an endpoint in a social media app: /users/{username} to retrieve user information based on their username.


// Problem 4: Creating a Route with Express.js
// a) Explain what the HTTP GET method is used for in the context of web development. 
// b) Write the code to create a simple Express.js route that responds with "Hello, World!" when a user visits the root URL ("/").

//Solution 4 :
// a) Explain what the HTTP GET method is used for in the context of web development. 

//a) The HTTP GET method is used to request data from a server. It's often used to retrieve information or resources from a specified URL.

// b) Write the code to create a simple Express.js route that responds with "Hello, World!" when a user visits the root URL ("/").

// const express =  require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

// app.listen(3000,()=>{
//     console.log('Server is running at port:3000')
// })


// Problem 5: JSON Parsing and Object Conversion
// a) Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would parse it into a JavaScript object.
//  b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data string?

//Solution 5 :

// a) Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would parse it into a JavaScript object.

const jsonData2 = '{"product": "Laptop", "price": 999.99}'

const ObjectValue = JSON.parse(jsonData2)
console.log(ObjectValue)

//  b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data string?

const objectValue2 =  { "name": "Bob", "age": 30 }
console.log(objectValue2)
const jsonValue2 = JSON.stringify(objectValue2)
console.log(jsonValue2)

// Problem 6: Building a Basic API
// Imagine you're building an API for a weather app. Your API needs an endpoint to retrieve the current weather. Create an Express.js route that responds with a JSON object containing the current temperature, conditions, and city.


const express = require('express')
const app = express()

app.get('/weather',(req,res)=>{
    const weatherData = {
        temperature:32,
        condition: "Sunny",
        city:"Asansol",
    }
    console.log(weatherData)
    res.json(weatherData)
})

app.listen(3000,()=>{
    console.log("Server is Running at Port:3000")
})





