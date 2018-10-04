// (function () {

"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


//
// function sayHello(name) {
//     return "Hello " + name + "!";
// }
//
//
// alert(sayHello("matthew"));


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


//
// var helloMessage = sayHello("Matthew");
// console.log(helloMessage);
//
//


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */




// var myName = "Matthew";
// console.log(sayHello(myName));




// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */



// function isTwo(number) {
//     return number === 2;
// }
//
// console.log(random);
//
// var result = isTwo(random);
//
// console.log(result);



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */


//
// function calculateTip(percentage, billAmount) {
//     return parseFloat(percentage) * parseFloat(billAmount);
// }




/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

//
// var bill = prompt("What is the bill total?");
//
// var userTipAmount = prompt("How much would you like to tip?");
// var tipPercentage = userTipAmount / 100;
//
// var tipCalculation = calculateTip(tipPercentage, bill);
//
// alert("The amount you would like to tip is $" + tipCalculation);
//



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) //
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */




//
// function applyDiscount(originalPrice, discount) {
//     var amountTakenOff = parseFloat(originalPrice) * parseFloat(discount);
//     return originalPrice - amountTakenOff;
//
// }
//
//
// console.log(applyDiscount(100, 0.2));
//









// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())



// function returnTwo() {
//     return 2;
// }
//
// console.log(returnTwo());






// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())



// function returnName() {
//     return "Matthew";
// }
//
// console.log(returnName());


// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))


// function addThree(number) {
//     return number + 3;
// }
//
// console.log(addThree(5));
//


// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())


//
// function sayString(string) {
//     return string;
// }
//
//
// console.log(sayString("Hello, this is a string."));
//


// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value


// function sayHowdy() {
//     console.log("Howdy!");
// }
//
//
// sayHowdy();
//




// Write a function called `identity(input)` that takes in an argument called input and returns that input.


//
// function identity(input) {
//     return input
// }
//




// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.


// function getRandomNumber(min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }
//
// console.log(getRandomNumber(20, 50));
//


// Write a function called `first(input)` that returns the first character in the provided string.



// function first(input) {
//     return input.substring(0, 1);
// }
//
// console.log(first("zpple"));





// Write a function called `last(input)` that returns the last character of a string



//
// function last(input) {
//     return input.slice(-1);
// }
//
// console.log(last("apple"));





// Write a function called `rest(input)` that returns everything but the first character of a string.




// function rest(input) {
//     return input.slice(1);
// }
//
// console.log(rest("Matthew"));





// Write a function called `reverse(input)` that takes a string and returns it reversed.



// function reverse(input) {
//     var splitString = input.split("");
//     var reverseArray = splitString.reverse();
//     return reverseArray.join("");
// }
//
// console.log(reverse("matthew"));





// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.


// function isNumeric(input) {
//     return isNaN(input);
// }
//
//
// console.log(isNumeric(8));





// Write a function called `count(input)` that takes in a string and returns the number of characters.



// function count(input) {
//     return input.length;
// }
//
// console.log(count("Matthew"));



// Write a function called `add(a, b)` that returns the sum of a and b

//
// function add(a, b) {
//     return a + b;
//
// }




// Write a function called `subtract(a, b)` that return the difference between the two inputs.


// function subtract(a, b) {
//     return a - b;
//
// }



// Write `multiply(a, b)` function that returns the product


// function multiply(a, b) {
//     return a * b;
//
// }





// Write a divide(numerator, denominator) function that returns a divided by b



// function divide(numerator, denominator) {
//     return numerator / denominator;
//
// }






// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`


//
// function divide(number, divisor) {
//     return number % divisor;
//
// }



// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.


// function square(a) {
//     return a * a;
//
// }







// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators



// function sumOfSquares(a, b) {
//     return add(square(a), square(b));
// }
//
//
// console.log(sumOfSquares(2, 2))
//




// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply.
// a and b are the two numbers to run that function on.

//
// function doMath(operator, a, b) {
//     return operator(a, b);
// }
//
// console.log(doMath(multiply, 10, 30));






//
// Make a function named isOdd(number)

//
// function isOdd(number) {
//     return number % 2 === 1;
// }
//
//
// console.log(isOdd(4));


// Make a function named isEven(number)




// function isEven(number) {
//     return number % 2 === 0;
// }
//
//
// console.log(isEven(4));


// Make a function named identity(input) that returns the input exactly as provided.


// function identity(input) {
//     return input;
//
// }






//     Make a function named isFive(input)


// function isFive(input) {
//     return 5;
// }




// Make a function named addFive(input) that adds five to some input.


// function addFive(input) {
//     return input + 5;
// }



//     Make a function named isMultipleOfFive(input)


// function isMultipleOfFive(input) {
//     return input % 5 === 0;
// }
//
//
// console.log(isMultipleOfFive(9));


// Make a function named isThree(input)


// function isThree(input) {
//     return 3;
// }



// Make a function named isMultipleOfThree(input)

//
// function isMultipleOfThree(input) {
//     return input % 3 === 0;
// }
//
// console.log(isMultipleOfThree(4));


// Make a function named isMultipleOfThreeAndFive(input)


// function isMultipleOfThreeAndFive(input) {
//     var multipleOfFive = input % 5 === 0;
//     var multipleOfThree = input % 3 === 0;
//     return multipleOfFive && multipleOfThree;
// }
//
//
// console.log(isMultipleOfThreeAndFive(10));


// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n



// function isMultipleOf(target, n) {
//     return target % n === 0;
// }
//
// console.log(isMultipleOf(10, 3));


// Make a function named isTrue(boolean)


// function isTrue(boolean) {
//     return true;
// }
//
// console.log(isTrue(100));






// Make a function named isFalse(boolean)



// function isFalse(boolean) {
//     return false;
// }
//
// console.log(isFalse(100));




// Make a function named isTruthy(input), remember that values other than true will behave like true



//
// function isTruthy(input) {
//     return !!input;
// }
//
// console.log(isTruthy(100));


// Make a function named isFalsy(input), remember that values other than false behave like false


//
//
// function isFalsy(input) {
//     return !input;
// }
//
// console.log(isFalsy(100));




// Make a function named isVowel(letter)



// function isVowel(letter){
//     var result = false;
//     if(letter.toUpperCase() === "A" || letter.toUpperCase() === "E" || letter.toUpperCase() === "I" || letter.toUpperCase() === "O" || letter.toUpperCase() === "U" ) {
//         result = true;
//     }
//     return result;
// }
//
//
// console.log(isVowel("E"));





// Make a function named isConsonant(letter)


// function isConsonant(letter){
//     var result = true;
//     if(letter.toUpperCase() === "A" || letter.toUpperCase() === "E" || letter.toUpperCase() === "I" || letter.toUpperCase() === "O" || letter.toUpperCase() === "U" ) {
//         result = false;
//     }
//     return result;
// }
//
//
// console.log(isConsonant("U"));




// Make a function named isCapital(letter)



// function isCapital(letter) {
//     return (letter !== letter.toLowerCase()) && (letter === letter.toUpperCase());
// }
//
//
// console.log(isCapital("A"));


// Make a function named isLowerCase(letter)

//
// function isLower(letter) {
//     return (letter === letter.toLowerCase()) && (letter !== letter.toUpperCase());
// }
//
//
// console.log(isLower("A"));


// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter


// function hasLowerCase(string) {
//     return (/[a-z]/.test(string));
// }
//
//
// console.log(hasLowerCase("MATTHEW"));


// Make a function named isSpace(letter) that returns if a character is a space character

//
// function isSpace(letter) {
//     var result = false;
//
//     if (letter === " ") {
//         result = true
//     }
//     return result;
// }
//
// console.log(isSpace(""));


// Make a function named isZero(number)


//
// function isZero(number) {
//     return number === 0
// }
//
// console.log(isZero(0));




// Make a function named notZero(input) that returns true if the input is not zero



//
// function notZero(number) {
//     return number !== 0
// }
//
// console.log(notZero(9));


// Write a function named lowerCase(string)


// function lowerCase(string) {
//     return string.toLowerCase()
// }
//
// console.log(lowerCase("MATTHEW"));


// Write a function named double(n) that returns a number times two


// function double(n) {
//     return n * 2;
// }
//
// console.log(double(4));


// Write a function named triple(n) that returns a number times 3


// function triple(n) {
//     return n * 3;
// }




// Write a function named quadruple(n) that returns a number times 4


// function quadruple(n) {
//     return n * 4;
// }




// Write a function named half(n) that returns 1/2 of the provided input



// function half(n) {
//     return n * 0.5;
// }



// Write a function named subtract(a, b) that returns a minus b

// function subtract(a, b) {
//     return a - b;
// }




// Write a function named multiply(a, b) that returns the product of a times b


// function multiply(a, b) {
//     return a * b;
// }



// Write a function named divide(a, b) that returns a divided by b


// function divide(a, b) {
//     return a / b;
// }



// Write a function named remainder(a, b) that returns the remainder after dividing a by b



// function remainder(a, b) {
//     return a % b;
// }



// Write a function named cube(n) that returns n * n * n


// function cube(n) {
//     return n * n * n;
// }





// Write a function named squareRoot(n) that returns the square root of the input

//
// function squareRoot(n) {
//     return Math.sqrt(n);
// }
//
// console.log(squareRoot(4));


// Write a function named cubeRoot(n) that returns the cube root of the input



// function cubeRoot(n) {
//     return Math.cbrt(n);
// }
//
// console.log(cubeRoot(27));


// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.


//
// function invertSign(number) {
//     var result = false;
//     if (number >= 1) {
//         result = -number;
//     }   else if (number <= -1) {
//         result = -number
//     }
//     return result;
// }
//
// console.log(invertSign("hi"));


// Write a function named degreesToRadians(number)


// function degreesToRadians(number) {
//     return parseFloat(number / 57.2958).toFixed(2);
// }
//
//
// console.log(degreesToRadians(360));


// Write a function named radiansToDegrees(number)


// function radiansToDegrees(number) {
//     return parseFloat(number * 57.2958).toFixed(2);
// }
//
// console.log(radiansToDegrees(6));


// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.


// function isBlank() {
//     var input = prompt("Enter what you want.");
//     return input.split(" ").length -1;
// }
//
//
// console.log(isBlank());


//     Make a function named trim(string) that removes empty spaces before and after the input.

//
// function trim(string) {
//     var beforeTrim = string.indexOf(string);
//     var afterTrim = string.trim();
//     var final = beforeTrim - (string.indexOf(afterTrim));
//     return (final * -1) + 1;
// }
//
// console.log(trim("      Matthew      "));




// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.


// function areaEqual(input1, input2) {
//     var result = false;
//     if (input1 === input2) {
//         result = true;
//     }
//     return result;
// }
//
// console.log(areaEqual(5, 7));






//     Make a function named not(input) returns the input with a flipped boolean

//
// function not(input) {
//     return !input;
// }
//
// console.log(not(false));


// Make a function named notNot(input) that the negation of the negation of the input.


// function notNot(input) {
//     return !!input;
// }


//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND


// function and(predictable1, predictable2) {
//     return predictable1 && predictable2;
// }




// Make a function named or(predicate1, predicate2) that returns the logical operation of OR


// function or(predictable1, predictable2) {
//     return predictable1 || predictable2;
// }



// Write a function called reverseString(string) that reverses a string


// function reverseString(string) {
//     var splitString = string.split("");
//     var reverseArray = splitString.reverse();
//     return reverseArray.join("");
// }
//
// console.log(reverseString("matthew"));




// Make a function named absoluteValue(number) that returns the absolute value of a number.


// function absoluteValue(number) {
//     var result = number;
//     if (number <= -1) {
//         result = number * -1;
//     }
//     return result;
// }
//
// console.log(absoluteValue(40));


//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

//
// function rollDice(sides) {
//     return Math.floor(Math.random() * sides) + 1;
// }
//
//
// console.log(rollDice(6));







// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
// The function will return true if the username is not the same as the password and the user is at least 18 years old.
// If the user is an admin, they do not have to be a certain age but the password must still not match the username.



function willLoginUser(username, password, age, admin) {








}









/*})();*/
