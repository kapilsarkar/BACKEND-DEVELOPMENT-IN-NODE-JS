//ASync programming in js

//JS IS SYNCHRONOUS IN  NATURE
//JS IS SINGLE THREADED
//JS WILL EXECUTE THE CODE LINE BY LINE ONLY(I.E SYNCHRONOUS) IF WE EXECUTE VALID ECMA SCRIPT CODE WHICH IS GIVEN BY THE STANDARD

console.log("Hi 1")

for(let i =0 ; i<=1000000;i++){
    //some task                     // THIS CODE IS NATIVE OR KNOWN TO JAVASCRIPT
}

console.log("hi 2")

console.log("HI KAPIL")

setTimeout(function(){
   console.log("HI WAIT")  //SETTIMEOUT IS NOT NATIVE OR KNOWN OR IT IS NOT PRIORITY OF JAVASCRIPT TO JAVASCRIPT
},5000)

console.log("H1 SARKAR")

function timeConsumingByLoop(){
    console.log("Loop Starts")
    for(let i =0;i< 1000000;i++){
         //some task
    }
    console.log("Loop Ends")
}

function timeConsumingByRunTimeFeature(){
    console.log("Starting Timer")

    setTimeout(function exec(){
        console.log("Completed the Timer")
    },2000)
}

console.log("Hi Piku")
timeConsumingByLoop()
timeConsumingByRunTimeFeature()
timeConsumingByLoop()

console.log("By Piku")