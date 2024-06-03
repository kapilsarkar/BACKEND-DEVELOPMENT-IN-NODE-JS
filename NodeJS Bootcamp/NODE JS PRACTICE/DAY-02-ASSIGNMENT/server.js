// Problem 1: NPM and Package.json
// You're starting a new project and want to manage your project's dependencies using NPM. Explain the purpose of NPM and how it helps in managing packages. Create a simple package.json file for your project, specifying the name, version, and a few dependencies of your choice.

const { add } = require("lodash");

//Solution-1
//NPM (Node Package Manager) is a tool that helps you manage libraries and packages in your Node.js projects. It allows you to easily install, update, and remove packages that you need for your project.

//Code Snippet for Package.jspn---
// {
//     "name": "day-02-assingnment",
//     "version": "1.0.0",
//     "description": "day02assignment",
//     "main": "server.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1",
//       "start": "node server.js"
//     },
//     "author": "kapilsarkar",
//     "license": "ISC",
//     "dependencies": {
//       "lodash": "^4.17.21"
//     }
//   }

//Problem-2:
// Write a JavaScript function named calculateCircleArea that takes the radius of a circle as a parameter and returns the area of the circle. You can use the formula area = π * radius^2. Test the function with a few different radii.

//Solution-2 :
function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

console.log(`Area of Circle of Radius 2 is : ${calculateCircleArea(2)}`);
console.log(`Area of Circle of Radius 5 is : ${calculateCircleArea(5)}`);
console.log(`Area of Circle of Radius 10 is : ${calculateCircleArea(10)}`);

//Problem-3:
//Create a function named performOperation that takes two numbers and a callback function as parameters. The callback function should determine the operation to be performed (addition, subtraction, multiplication, or division) on the two numbers. Call the performOperation function with different numbers and callback functions for each mathematical operation.

//Solution-3:

function performOperation(a, b, operation) {
  return operation(a, b);
}

function addition(x, y) {
  return x + y;
}

function subtraction(x,y){
      return x - y
}

function multiplication(x,y){
      return x * y
}

function division(x,y){
      return x / y
}

console.log(performOperation(10, 20, addition));
console.log(performOperation(20,10,subtraction));
console.log(performOperation(10,20,multiplication));
console.log(performOperation(20,10,division));

// Problem 4: Using the 'fs' Module
// Write a Node.js program that uses the fs module to read the contents of a text file named "notes.txt" and display them in the console.


//Solution 4 :


//Include the fs module---
 var fs = require("fs")
//Use the fs.readFile method to read the file
 fs.readFile('notes.txt','utf8',function(error,data){
  if(error){
    console.log("Erroe reading File:",error)
    return
  }
  //Display the file content
    console.log(data)
 })

//  Problem 5: Using 'os' Module
// Create a Node.js program that uses the os module to display the following system information:
// ●	Total memory available (in bytes)
// ●	Free memory available (in bytes)
// ●	Operating system platform
// ●	Number of CPU cores

//Solution 5 :

var os = require("os")

console.log(`Total memory: ${os.totalmem()}`)
console.log(`Free Memory : ${os.freemem()}`)
console.log(`Operating System Platform : ${os.platform()}`)
console.log(`Number Of CPU Cores : ${os.cpus().length}`)


// Problem 6: 'lodash' Usage
// Use the lodash library to solve the following problem: Given an array of numbers, write a function that returns the sum of all even numbers in the array. Use the _.sumBy function from lodash to achieve this.

//Solution 6 : ---
const num = [20,32,29,5,36,40,51]

const _ = require('lodash');

function sumOfEvenNumbers(num){
   const evenNumber = _.filter(num, n => n % 2=== 0)
   return _.sumBy(evenNumber)
}

console.log(sumOfEvenNumbers(num))


