
//Here function fun is a HOF here it takes fn which is a function as an argument
//x is a number
//fn is a function

function fun(x,fn){
  for(let i =0 ; i< x; i++){
    console.log(i)
  }
  fn()
}

fun(10,function exec(){
  console.log("i am executed")  
})

setTimeout(function exec(){
    console.log("Running After Some Time")
},5000)

//The function which takes function as argument is called HOF 
//The function which is is passed as an argument is called callback function
//Here settimeout is HOF  and function exec is a callback function

//Problem of callback Hell--- Inversion of Control

let arr = [1,10,1000,9,2,3,11]

arr.sort(function cmp(a,b){
    return a - b
})

console.log(arr)

