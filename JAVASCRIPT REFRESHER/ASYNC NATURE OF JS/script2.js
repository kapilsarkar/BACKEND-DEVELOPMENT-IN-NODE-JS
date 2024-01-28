//Interview Problem-1

console.log("HI VIRAT KOHLI")

setTimeout(function exec(){
    console.log("Timer Done KOHLI")  //HERE SET TIMEOUT WILL NOTE HAMPER THE MAIN SYNCHRONOUS FLOW OF JAVASCRIPT
},0)

console.log("BYE VIRAT KOHLI")

//Interview Problem-2

console.log("hi sachin")

setTimeout(function exec(){
   console.log("Timer Done Sachin")
},0)

for(let i =0; i< 1000000; i++){
    //some task
}

console.log("bye sachin")

//Interview Problem-3

console.log("hi hrithik")

for(let i =0 ; i<3; i++){
    setTimeout(function exec(){
      console.log("Timeer Done hrithik")
    },10)
}

for(let i =0; i< 100000;i++){
    //some task
}

console.log("bye hrithik")

//the main crux of these three examples is that any asynchronous flow will not hamper the synchronous flow 