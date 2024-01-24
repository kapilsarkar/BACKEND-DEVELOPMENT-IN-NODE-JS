//ASync programming in js

//JS IS SYNCHRONOUS IN  NATURE
//JS IS SINGLE THREADED
//JS WILL EXECUTE THE CODE LINE BY LINE ONLY(I.E SYNCHRONOUS) IF WE EXECUTE VALID ECMA SCRIPT CODE WHICH IS GIVEN BY THE STANDARD

console.log("Hi 1")

for(let i =0 ; i<=1000000;i++){
    //some task
}

console.log("hi 2")

console.log("HI KAPIL")

setTimeout(function(){
   console.log("HI WAIT")
},5000)

console.log("H1 SARKAR")