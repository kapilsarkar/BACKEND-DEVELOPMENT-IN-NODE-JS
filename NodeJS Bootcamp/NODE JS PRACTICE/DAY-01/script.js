// Problem 1: Conditional Statements (if-else)

// You run a movie theater, and you want to offer discounts based on a person's age. Write a JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display "You get a 20% discount!"
// - If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
// - If the age is 65 or older, display "You get a 30% senior discount!"


//Solution-1
let promt = prompt("Pleasae Enter Your Age:");
function age(){
   
    if(promt < 18){
        console.log("You Get a 20% discount")
    }
    else if (promt >= 18 && promt <= 65) {
        console.log("Normal Ticket Price Applies");
    }
        
    
    else {
        console.log("You get a 30% senior discount");
    }
       
    
}
age()
