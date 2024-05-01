console.log("Server File is Running");

// function add(a, b) {
//   return a + b;
// }

// const result = add(10, 50);
// console.log(result);

// (function(){
//     console.log("Hi Kapil")
// })();

// 

// let fs = require('fs');
// let os = require('os');

// let user = os.userInfo()
// console.log(user)
// console.log(user.username)

// fs.appendFile('greeting.txt','Hi' + user.username + '\n',()=>{
//     console.log("File Created")
// })

const notes = require('./notes.js')
var _ = require('lodash');

console.log("Server File is Available");

let age = notes.age
console.log(age)

let addResult = notes.addNumber(age+18,10)
console.log("Result is :" +addResult)

var data = ["person","person",1,2,1,"kapil","MCA"]

var filter = _.uniq(data)
console.log(filter)

