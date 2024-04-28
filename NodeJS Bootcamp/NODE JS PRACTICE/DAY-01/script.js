// Problem 1: Conditional Statements (if-else)

// You run a movie theater, and you want to offer discounts based on a person's age. Write a JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display "You get a 20% discount!"
// - If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
// - If the age is 65 or older, display "You get a 30% senior discount!"

//Solution-1

function age() {
  let promt = prompt("Pleasae Enter Your Age:");
  if (promt < 18) {
    console.log("You Get a 20% discount");
  } else if (promt >= 18 && promt <= 65) {
    console.log("Normal Ticket Price Applies");
  } else {
    console.log("You get a 30% senior discount");
  }
}
//age()

// Problem 2: Variables (var and const)

// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length and width of the rectangle and store them in variables. Calculate and display the area using the formula: `area = length * width`.

//Solution-2

function areaOfRectange() {
  const lentgh = parseFloat(prompt("Enter Length"));
  const width = parseFloat(prompt("Enter Width"));

  const result = lentgh * width;
  console.log(`Area of Rectangle is : ${result}`);
}

//areaOfRectange()

// Problem 3: Objects and Properties

// You're creating an online store. Define a JavaScript object named "product" with the following properties:
// - name (string)
// - price (number)
// - inStock (boolean)

// Create at least three products using your object template and display their details using console.log.

//Solution-3

const Product1 = {
  name: "Iphine 14",
  price: 600000,
  inStock: true,
};

const Product2 = {
  name: "Motoral Enge 50",
  price: 380000,
  inStock: false,
};

const Product3 = {
  name: "Samsung Galaxy S23",
  price: 150000,
  inStock: true,
};

console.log(Product1);
console.log(Product2);
console.log(Product3);



// Problem 4: Arrays

// You're organizing a party and want to keep track of the guest list. Create an array called "guestList" and add the names of at least five guests. Then, write a program that checks if a given name is on the guest list. If the name is found, display "Welcome to the party, [name]!"; otherwise, display "Sorry, you're not on the guest list."

//Solution-4

const guestList = ["Kapil","John","Sachin","Virat","Rohit"]

function CheckGuest(){
   const nameCheck = prompt("Please Enter Your Name:")

   if(guestList.includes(nameCheck)){
    console.log(`Welcome to the Party : ${nameCheck}`)
   }

   else{
    console.log("Sorry You are not on the Guest List")
   }
}

//CheckGuest()


// Problem 5: JSON (JavaScript Object Notation)

// You're working on a weather app. Create a JSON object representing the weather forecast for a specific day. Include properties like "date," "temperature," "conditions," and "humidity." Display the information using console.log.

// Remember to encourage your students to experiment and think creatively while solving these problems. They can use the concepts you've taught them to come up with their own solutions. This will not only help solidify their understanding but also foster their problem-solving skills in JavaScript.

//Solution-5

const weatherForeCast = {
    Date : "25/05/2024",
    Temperature : 32 ,
    Conditions : "Sunny",
    Humidity : 41
}

console.log(weatherForeCast)
