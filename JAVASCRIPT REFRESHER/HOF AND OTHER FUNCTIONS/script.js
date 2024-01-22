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

let arr2 = [1,10,9,100,1000,11,12,13,14,2,3]  //unsorted array

arr2.sort() //it sorts the given array

console.log(arr2)

//default implementation of arr2.sort() is to sort my array in lexicagraphical order
//lexicographical order means dictionary order

//when to use maps ?
//In any situation when we have to do an operation on every element of the array and store the result of each operation then map can be a good option

const newArray = [9,8,7,6,5]

function print(element,idx){
  return `Element at index ${idx} is ${element}`
}

const result2 = newArray.map(print)
console.log(result2)

//If the function that we are passing in the map takes two arguments then first argument will be accessing the actual value second argument will be accessing index of that value.

let b = [1,10,9,100,1000,11,12,13,14,2,3]
//sort b in increasing order
b.sort(function(a,b){
  return a-b
})
console.log(b)
//sort is a HOF ,,  the sort function takes a comparator function as argument

//filter()-- it is also a HOF
//filter also loops over the array element
//there is one special thing about filter, i.e the argument function f which we have to pass inside a filter should always return a boolean , otherwise output will be converted to a boolean

let arr3 = [1,2,3,4,5,6,7,8,9]

function oddOrEven(x){
   return (x % 2 == 0) // returning a boolean
}

const resultArr3 = arr3.filter(oddOrEven)

console.log(resultArr3)

//reduce() -- it is a HOF available for arrays

//reduce also takes a function f as an argument
//It one by one goes to every element of the array

const arr5 = [1,2,3,4,5,6,7]

function sum(prevResult,currValue){
  return prevResult + currValue
}

const result5 = arr5.reduce(sum)

console.log(result5)

let cart = [{price:100000,names:"Iphone"},{price:500,name:"temperedGlass"},{price:500,name:"backCover"}]

const totalPrice = cart.reduce(addThePrice)

function addThePrice(prevResult,currValue){
  let newPrice = prevResult.price + currValue.price
  return {price:newPrice}
}
console.log(totalPrice.price)







