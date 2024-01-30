// In JavaScript, coercion refers to the process of converting a value from one type to another. There are two types of coercion: explicit coercion (also known as type casting) and implicit coercion (also known as type coercion).

// ### 1. Explicit Coercion (Type Casting):

// Explicit coercion occurs when you deliberately convert a value from one type to another using functions or operators designed for that purpose.

// #### Examples:

// ```javascript
// // String to Number
// let strNumber = "123";
// let num = Number(strNumber);

// // Number to String
// let number = 456;
// let str = String(number);

// // Boolean to Number
// let boolValue = true;
// let numValue = Number(boolValue);
```

// ### 2. Implicit Coercion (Type Coercion):

// Implicit coercion happens automatically when operations between different types are performed. JavaScript tries to convert values to a common type before performing an operation.

#### Examples:

// ``javascript
// // String and Number concatenation
// let result = "5" + 3; // Result: "53" (String)

// // Addition with string and number
// let sum = "5" - 2; // Result: 3 (Number)
// ```

// In the above examples, JavaScript automatically converts the number `3` to a string when concatenated with the string `"5"`. Similarly, in the second example, it converts the string `"5"` to a number before performing the subtraction operation.

// ### Important Considerations:

// 1. **Truthy and Falsy Values:**
//    - In boolean contexts (e.g., conditions), JavaScript implicitly coerces values to booleans. Values like `0`, `null`, `undefined`, `NaN`, and empty strings (`""`) are considered falsy, while others are truthy.

//     ```javascript
//     if ("hello") {
//       // This block will be executed because "hello" is truthy
//     }
//     ```

// 2. **Loose Equality (`==`) and Strict Equality (`===`):**
//    - The equality operator (`==`) performs type coercion, while the strict equality operator (`===`) does not. It checks both value and type.

//     ```javascript
//     console.log(5 == "5");   // true (coercion)
//     console.log(5 === "5");  // false (no coercion)
//     ```

// Coercion can lead to unexpected behavior if not used carefully. It's essential to understand how JavaScript handles types and be explicit when necessary to avoid potential issues.


// Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

// Examples
// JS
// Copy to Clipboard
// const value1 = "5";
// const value2 = 9;
// let sum = value1 + value2;

// console.log(sum);
// In the above example, JavaScript has coerced the 9 from a number into a string and then concatenated the two values together, resulting in a string of 59. JavaScript had a choice between a string or a number and decided to use a string.

// The compiler could have coerced the 5 into a number and returned a sum of 14, but it did not. To return this result, you'd have to explicitly convert the 5 to a number using the Number() method:

// JS
// Copy to Clipboard
// sum = Number(value1) + value2;
