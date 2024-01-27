var teacher = "Kapil";
function fun() {
  var teacher = "Piku";
  console.log(teacher);
}

function gun() {
  var student = "JOHN CENA";
  console.log(student);
}

fun();
gun();
console.log(teacher);

//block scope and functional scope

{
  var x = 10;
}

console.log(x);

{
  let y = 10;
}
console.log(y);

function fun() {
  var k = 10;
}

fun();

function gun() {
  console.log(z);
  var z = 20;
}

gun();

//calling a function before declaring it

hi();
function hi() {
  console.log("HI KAPIL SARKAR");
}

//this pheromone that we are able to execute a function before declaring it is called hoisting
