// Problem 1: NPM and Package.json
// You're starting a new project and want to manage your project's dependencies using NPM. Explain the purpose of NPM and how it helps in managing packages. Create a simple package.json file for your project, specifying the name, version, and a few dependencies of your choice.



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
function calculateCircleArea(radius){
      return Math.PI * radius ** 2;
}

console.log(`Area of Circle of Radius 2 is : ${calculateCircleArea(2)}`)
console.log(`Area of Circle of Radius 5 is : ${calculateCircleArea(5)}`)
console.log(`Area of Circle of Radius 10 is : ${calculateCircleArea(10)}`)

//Problem-3:
//Create a function named performOperation that takes two numbers and a callback function as parameters. The callback function should determine the operation to be performed (addition, subtraction, multiplication, or division) on the two numbers. Call the performOperation function with different numbers and callback functions for each mathematical operation.

//Solution-3:

