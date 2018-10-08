"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */



// var numberEnter = confirm("Would you like to enter a number?");
//
//
// function numberNegPos() {
//     return numberVar >= 0;
// }
//
// function numberEven() {
//     return numberVar % 2 === 0;
// }
//
// function numberPlus100() {
//     return parseFloat(numberVar) + 100;
// }
//
// if (numberEnter === true) {
//     var numberVar = prompt("Please enter the number.");
//     if (!isNaN(parseFloat(numberVar)) === true){
//         alert("Your number plus 100 is equal to " + numberPlus100(numberVar));
//
//         if (numberEven(numberEnter) === true) {
//             alert("The number is even.");
//
//         } else {
//             alert("The number is odd.");
//         }
//         if (numberNegPos(numberEnter) === true) {
//             alert("Your number is positive.");
//
//         } else {
//             alert("Your number is negative.");
//         }
//     }
// } else {
//     alert("You did not enter a number...");
// }
//








/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


// var colorChoice = prompt("Pick a color");



//
// function analyzeColor(colorName) {
//     if (colorName === "red") {
//         alert("Strawberries are red.");
//     } else if (colorName === "orange") {
//         alert("Oranges are orange.");
//     } else if (colorName === "yellow") {
//         alert("Bananas are yellow.");
//     } else if (colorName === "green") {
//         alert("Grass is green.");
//     } else if (colorName === "blue") {
//         alert("Sky is blue.");
//     } else if (colorName === "indigo") {
//         alert("Something is indigo.");
//     } else if (colorName === "violet") {
//         alert("You picked violet.");
//     } else {
//         alert("You have a weird favorite color...");
//     }
// }
//
// console.log(analyzeColor(colorChoice.toLowerCase()));
//





/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


//
// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */





// switch (colorChoice.toLowerCase()) {
//     case "red":
//         alert("Strawberries are red.");
//         break;
//     case "orange":
//         alert("Oranges are orange.");
//         break;
//     case "yellow":
//         alert("Bananas are yellow.");
//         break;
//     case "green":
//         alert("Grass is green.");
//         break;
//     case "blue":
//         alert("Sky is blue.");
//         break;
//     case "indigo":
//         alert("Something is indigo.");
//         break;
//     case "violet":
//         alert("You picked violet.");
//         break;
//     default:
//         alert("You have a weird favorite color...");
//         break;
// }



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

//
// Generate a random number between 0 and 6





// var luckyNumber = Math.floor(Math.random() * 6);
//
//
// var totalAmount = prompt("How much was your bill?");
//
//
// function calculateTotal(luckyNumber, totalAmount) {
//     var result = 0;
//     if (luckyNumber === 5) {
//         result = 0;
//
//     } else if (luckyNumber === 4) {
//         result = totalAmount * 0.5;
//
//     } else if (luckyNumber === 3) {
//         var lucky3 = totalAmount * 0.35;
//         result = totalAmount - lucky3;
//
//     } else if (luckyNumber === 2) {
//         var lucky2 = totalAmount * 0.25;
//         result = totalAmount - lucky2;
//
//     } else if (luckyNumber === 1) {
//         var lucky1 = totalAmount * 0.10;
//         result = totalAmount - lucky1;
//     }
//     return result;
//
// }
//
// alert("Your lucky number is " + luckyNumber + "!");
//
// alert("Your price before the discount was " + totalAmount + ". And you price after your discount is " + calculateTotal(luckyNumber, totalAmount) + "!");
//






//
// ================================= CONDITIONALS BONUSES
// __
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".
//     __


// function makeJustinMessage(input) {
//     var result = "It's not Justin";
//     if (input === "justin") {
//         result = "It's Justin!";
//     } else if (!isNaN(input))  {
//         return "INVALID INPUT";
//     } else if (input.indexOf(' ') >= 0) {
//         result = "INVALID INPUT";
//     } else {
//         result = "It's not Justin";
//     }
//     return result;
// }
//
// console.log(makeJustinMessage("justin"));





// Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red",
// a message like "STOP!" could be returned from the function. Input should not be case sensitive.
//     __


//
// function streetLight(input) {
//     var lightColor = input.toLowerCase();
//     if (lightColor === "green") {
//         alert("Drive on through!");
//     } else if (lightColor === "yellow") {
//         alert("Start slowing down if you can!");
//     } else if (lightColor === "red") {
//         alert("STOP!");
//     } else {
//         alert("You didn't tell me an actual color...");
//     }
// }
//
//
// streetLight(prompt("What color is the street light?"));





// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."
// __




//
// function inputToOutput(input) {
//     if (input === undefined) {
//         alert("No Input Provided!");
//     } else {
//         return input;
//     }
// }
//
// console.log(inputToOutput("hi"));





// Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits".
// If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//     __


//
// function digit(input) {
//     var number = parseFloat(input);
//     if (isNaN(number)) {
//         alert("Invalid Input");
//     } else if (number >= 10 || number <= -10) {
//         alert("Too many digits!");
//     } else {
//         alert("You picked a nice number!");
//     }
// }
//
//
// digit(prompt("Please input a number!"));






// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
// __





//
// var dayOfWeek = prompt("What day of the week is it?");
//
// switch (dayOfWeek.toLowerCase()) {
//     case "monday":
//     case "mon":
//         alert("Today is Monday.");
//         break;
//     case "tuesday":
//     case "tue":
//         alert("Today is Tuesday.");
//         break;
//     case "wednesday":
//     case "wed":
//         alert("Today is Wednesday.");
//         break;
//     case "thursday":
//     case "thu":
//         alert("Today is Thursday.");
//         break;
//     case "friday":
//     case "fri":
//         alert("Today is Friday.");
//         break;
//     case "saturday":
//     case "sat":
//         alert("Today is Saturday.");
//         break;
//     case "sunday":
//     case "sun":
//         alert("Today is Sunday.");
//         break;
//     default:
//         alert("Thats not a day of the week bro...");
//         break;
// }










// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
// __



//
// function ifNumber(input) {
//     if (!isNaN(input)) {
//         alert("This is a number!");
//     } else {
//         alert("That is not a number!");
//     }
// }
//
//
// console.log(ifNumber("hiu"));





// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter).
// The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
// __



//
// function seasons(input) {
//     var seasonChoice = input.toLowerCase();
//     if (seasonChoice === "spring") {
//         var springMonth = prompt("Choose a spring month.");
//         switch (springMonth.toLowerCase()) {
//             case "march":
//             case "mar":
//                 alert("March is a cool month.");
//                 break;
//             case "april":
//             case "apr":
//                 alert("April is a cool month.");
//                 break;
//             case "may":
//                 alert("May is my favorite month.");
//                 break;
//             default:
//                 alert("Thats not a spring month...")
//         }
//     } else if (seasonChoice === "summer") {
//         var summerMonth = prompt("Choose a summer month.");
//         switch (summerMonth.toLowerCase()) {
//             case "june":
//             case "jun":
//                 alert("June is a cool month.");
//                 break;
//             case "july":
//             case "jul":
//                 alert("July is a cool month.");
//                 break;
//             case "august":
//             case "aug":
//                 alert("August is my favorite month.");
//                 break;
//             default:
//                 alert("Thats not a summer month...")
//         }
//     } else if (seasonChoice === "fall" || "autumn") {
//         var fallMonth = prompt("Choose a fall month.");
//         switch (fallMonth.toLowerCase()) {
//             case "september":
//             case "sept":
//                 alert("September is a cool month.");
//                 break;
//             case "october":
//             case "oct":
//                 alert("October is a cool month.");
//                 break;
//             case "november":
//             case "nov":
//                 alert("November is my favorite month.");
//                 break;
//             default:
//                 alert("Thats not a summer month...")
//         }
//     } else if (seasonChoice === "winter") {
//         var winterMonth = prompt("Choose a winter month.");
//         switch (winterMonth.toLowerCase()) {
//             case "december":
//             case "dec":
//                 alert("December is a cool month.");
//                 break;
//             case "january":
//             case "jan":
//                 alert("January is a cool month.");
//                 break;
//             case "february":
//             case "feb":
//                 alert("February is my favorite month.");
//                 break;
//             default:
//                 alert("Thats not a summer month...")
//         }
//     } else {
//         alert("Thats not a season!");
//     }
// }
//
//
//
// seasons(prompt("Please choose a season."));






// GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units





do {
    var unitOfMeasurement = prompt("Please choose a unit of measurement (inches, feet, miles, or lightyears):");
    var unitOfMeasurementInput = unitOfMeasurement
} while (unitOfMeasurementInput !== "inches" || "feet" || "miles" || "lightyears");


console.log("done");

// do {
//     var value = prompt("Please choose a unit of value:");
//
// } while (parseFloat(value) !== "inches" || "feet" || "miles" || "lightyears"); {
//     alert("That's not a valid choice!");
// }
//
// do {
//     var secondUnitOfMeasurement = prompt("Please choose a second unit of measurement different from first one (inches, feet, miles, or lightyears):");
//
// } while (secondUnitOfMeasurement.toLowerCase() !== "inches" || "feet" || "miles" || "lightyears" || unitOfMeasurement.toLowerCase()); {
//     alert("That's not a valid choice!");
// }







