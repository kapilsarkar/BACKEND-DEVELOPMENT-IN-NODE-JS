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

//arrays are also 