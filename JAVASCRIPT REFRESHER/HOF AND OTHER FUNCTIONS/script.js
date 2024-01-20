//higher order functions

//functions which takes another functions as  arguments these are called higher order functions


function f(x, fn){
//   x is a number
//fn is a function

  console.log(x)
  console.log(fn)
  fn()
}

f(10,function exec(){
    console.log('I am an Expression passed to an Higher Order Function')
})

//arrays are also custom object in js
//index of the element is the key and the element itself is the value
//["abc","def","ghi"]

//map function

//higher order functions that depends and operates ojn other functions

//higher order function takes another function as an argument or they return a function and then executes its logic
//map is a higher order function available with arrays --> it takes a function as an argument example function f and it returns an array in which every value is actually populated by calling function f  with original array element as argument

//map internally iterates/loops over every element of the given original array pass the element  in the argument function and then store the returned value inside an array.

function square(el){
  return el*el  //returns square
}



const arr = [1,2,3,4,5]

const result = arr.map(square)  //square is a function passed as an  argument


console.log(result)

function cube(x){
  return x*x*x
}

const cubeArr = arr.map(cube)
console.log(cubeArr)

function evenOrOdd(x){
  if(x%2 == 0){
    return "Even"
  }
  else{
    return "Odd"
  }
}

const evenOddResult = arr.map(evenOrOdd)
console.log(evenOddResult)