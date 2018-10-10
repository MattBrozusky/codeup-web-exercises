// (function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */



    var names = ["john", "jane", "jim", "jake"];



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */


    // console.log(names.length);


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */


    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);




    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */




    // for (var i = 0; i < names.length; i += 1) {
    //     console.log(names[i])
    // }




    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */



    // names.forEach(function (element, index, array) {
    //     console.log(element);
    // });



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    // var numberArray = [1, 2, 3, 4, 5];
    //
    // function first() {
    //     console.log(numberArray[0]);
    // }
    //
    // first();
    //
    // function second() {
    //     console.log(numberArray[1]);
    // }
    //
    // second();
    //
    // function fifth() {
    //     console.log(numberArray[4]);
    // }
    //
    // fifth();





//
// ================================= ARRAY BONUSES
// 1. Create a function that returns a random day of the week




//
// var daysInWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//
// function randomDay() {
//     var randomNumber = Math.ceil(Math.random() * 7) -1 ;
//     return daysInWeek[randomNumber];
// }
//
// console.log(randomDay());









// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.




// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//
//
// function alphabetIndex(letter) {
//     var letterNoCase = letter.toLowerCase();
//     return  alphabet.indexOf(letterNoCase) + 1;
// }
//
//
// console.log(alphabetIndex("Z"));






// 3. Create a function that returns the longest string in a given array of string elements






var randomArray = ["banana", "dragon fruit", "apple", "pear"];






function longestString(array) {
    var longestString = "";

    array.forEach(function (element) {
        if (element.length > longestString.length) {
            longestString = element;
        }

    });

    return longestString;
}

console.log(longestString(randomArray));








// 4. Create a function that takes in two arrays of number inputs. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//     var arr1 = ['bob', 1, true, 1, 2];
// var arr2 = [2, null, undefined, 0, 2, "apple"]
// exampleFunction(arr1, arr2) // returns true













// })();