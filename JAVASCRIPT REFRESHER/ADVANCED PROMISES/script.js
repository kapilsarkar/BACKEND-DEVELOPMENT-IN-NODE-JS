//Promises-- helps code readability
//Promises helps in solving the problem of  inversion of control
//In javascript promises are special type of objects that get returned immediately when we call them
//Promises acts as a placeholder for the data we hope to get back some time in future here placeholder means temporary value
//In these Promise object we can attach the functionality we want to execute once the future task is done.
//Once the future task is done the promises wil automatically execute the attached functionality

//1. How we can create a promise?

//2. How can we consume a promise?

//Promise creation---

//Creation of a promise object is synchronous in nature
//there are three sates of promises-
//1. pending--- when we create a new promise object this is a default state it represent work in progress
//2. fulfilled--- if the operation is completed successfully
//3. rejected--- if the operation was not successful

//creation of new promise object

//when the promise is in the pending state the value property of the promise object will be undefined.
//when the promise is in the resolve state the value gets updated with the argument of the resolve.
//when the promise is in the rejected state the value gets updated with the argument of the reject.
//with whatever argument we call resolve or reject with gets assigned to the value property.

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

getRandomInt(5);

function createPromiseWithLoop(){
    return new Promise(function executor(resolve,reject){
        for(let i =0; i<1000000000;i++){}
          let num = getRandomInt(10)
          if(num % 2 == 0){
           //if the random number is even we fulfill
           resolve(num)
          } else{
           //if the random number is odd we reject
           reject(num)
          }
        
    })
}

let x = createPromiseWithLoop()
console.log(x)

function createPromiseWithTimeOut(){
    return new Promise(function executor(resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10)
            if(num % 2 == 0){
             //if the random number is even we fulfill
             resolve(num)
            } else{
             //if the random number is odd we reject
             reject(num)
            }
        },1000)
    })
}

let y = createPromiseWithLoop()
console.log(y)

//consuming a promise

//microtaskqueue in promise

//event loop and microtaskqueue

//promise chaining