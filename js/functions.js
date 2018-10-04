/*(function () {*/

"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */



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





function applyDiscount(originalPrice, discount) {
    var amountTakenOff = parseFloat(originalPrice) * parseFloat(discount);
    return originalPrice - amountTakenOff;

}


console.log(applyDiscount(100, 0.2));










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


function add(a, b) {
    return a + b;

}




// Write a function called `subtract(a, b)` that return the difference between the two inputs.


function subtract(a, b) {
    return a - b;

}



// Write `multiply(a, b)` function that returns the product


function multiply(a, b) {
    return a * b;

}





// Write a divide(numerator, denominator) function that returns a divided by b



function divide(numerator, denominator) {
    return numerator / denominator;

}






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


// function doMath(operator, a, b) {
//     return operator(a, b);
// }
//
// console.log(doMath(multiply, 10, 30));
//




/*
})();*/
