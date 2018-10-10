// (function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetsString2 = planetsArray.join("<br>");
    //
    //
    // console.log(planetsString2);











/**
 * JS Array Practice
 * Array creation, manipulation, searching etc...
 */

// Exercise 0. Write a function named first() that returns only the first element of an array





// function first(array) {
//     return array.slice(0, 1);
// }
//
// console.log(first(planetsArray));



// Exercise 1. Write a function named secondToLast() that returns the second to last element



// function secondToLast(array) {
//
//     var almostLast = array.length -2;
//     return array.slice(almostLast, (almostLast + 1));
//
// }
//
// console.log(secondToLast(planetsArray));



// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.



// function rest(array) {
//     array.shift();
//     return array
// }
//
// console.log(rest(planetsArray));




// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array




// function getlongestString(array) {
//     var longestString = "";
//
//     array.forEach(function (element) {
//         if (element.length > longestString.length) {
//             longestString = element;
//         }
//
//     });
//
//     return longestString;
// }
//
// console.log(getlongestString(planetsArray));








// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.


// function getShortestString(array) {
//     var shortestString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
//
//     array.forEach(function (element) {
//
//         if (element.length < shortestString.length) {
//             shortestString = element;
//         }
//
//     });
//     return shortestString;
// }
//
//
// console.log(getShortestString(planetsArray));








// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays.
// The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]





// var names = ["john", "jim", "jake", "jill"];
//
//
//
// function addTwoArrays(array1, array2) {
//
//     var split1 = array1.join(", ");
//     var split2 = array2.join(", ");
//     var concat = split1 + ", " + split2;
//     return concat.split(", ");
//
// }
//
//
// console.log(addTwoArrays(planetsArray, names));




// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]



// var numbers = ["1", "2", "2", "2", "3", "3", "1", "4"];
//
//
// var numbersUnique = numbers.filter(function(item, index){
//     return numbers.indexOf(item) >= index;
// });
//
//
// console.log(numbersUnique);






// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.



// function reverseArray(array) {
//     return array.slice().reverse();
// }
//
// console.log(reverseArray(planetsArray));
//
// console.log(planetsArray);




// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.


function getRandomQuote() {

    var randomQuote = ["a", "b", "c", "f", "k", "s", "w"];
    var number = randomQuote.length;
    var randomNumber = Math.ceil(Math.random() * number) - 1;
    return randomQuote.indexOf(randomNumber);



}


console.log(getRandomQuote());










// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array []









// })();