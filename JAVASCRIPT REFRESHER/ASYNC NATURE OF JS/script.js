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

//EVENT LOOP --> IT IS KIND OF INFINITE LOOP . IT KEEPS ON CHECKING WETHER THE CALL STACK IS EMPTY  OR NOT AND NO GLOBAL CODE IS LEFT

// The event loop is a fundamental concept in JavaScript that helps manage asynchronous operations and ensures that non-blocking code execution occurs. It allows JavaScript to handle events, such as user input, network requests, and timers, in a non-blocking way. Here's an explanation of the event loop with a simple example:

// ### Event Loop Explanation:

// 1. **Call Stack:**
//    - JavaScript is single-threaded, meaning it has one call stack that executes one operation at a time.
//    - The call stack is a data structure that keeps track of function calls. When a function is called, it is pushed onto the stack. When the function completes, it is popped off the stack.

// 2. **Callback Queue:**
//    - JavaScript has a callback queue (also known as the task queue or message queue) where asynchronous tasks are placed after their respective callbacks are executed.

// 3. **Event Loop:**
//    - The event loop continuously checks the call stack and the callback queue.
//    - If the call stack is empty, it takes the first task from the callback queue and pushes it onto the call stack, allowing it to execute.

// ### Example:

// Let's consider a simple example using `setTimeout`:

// ```javascript
// console.log("Start");

// setTimeout(function () {
//   console.log("Timeout 1");
// }, 2000);

// setTimeout(function () {
//   console.log("Timeout 2");
// }, 1000);

// console.log("End");
// ```

// #### Execution:

// 1. The code starts by logging "Start" to the console.
// 2. Two `setTimeout` functions are encountered. They are asynchronous and will be placed in the callback queue after the specified timeouts.
// 3. "End" is logged to the console.
// 4. The event loop continuously checks the call stack and the callback queue.
// 5. After 1 second, the first `setTimeout` callback is moved to the callback queue.
// 6. After 2 seconds, the second `setTimeout` callback is moved to the callback queue.
// 7. The event loop checks the call stack and finds it empty.
// 8. The first callback ("Timeout 2") is pushed to the call stack and executed.
// 9. The event loop repeats the process, finding the second callback ("Timeout 1") and pushing it to the call stack.

// #### Console Output:

// ```
// Start
// End
// Timeout 2
// Timeout 1
// ```

// This example demonstrates how the event loop ensures that asynchronous tasks, like those specified by `setTimeout`, are handled in a non-blocking manner, allowing the program to remain responsive to other tasks.