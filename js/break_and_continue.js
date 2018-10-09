"use strict";







// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.







//
// for (var x = 2; x % 2 === 0;) {
//
//     x = prompt("Please give an odd number between 1 and 50:");
//
//     if (x <= 0) {
//         alert("Invalid input");
//         x = 0;
//         continue;
//     }
//     if (x >= 51) {
//         alert("Invalid input");
//         x = 0;
//         continue;
//     }
//     if (x % 2 === 0) {
//         alert("That's an even number!")
//     }
//
// }








// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.







// var y = prompt("Please give an odd number between 1 and 50:");
//
//
// for (var x = 1; x <= 50; x += 2) {
//
//
//     if (x === parseFloat(y)) {
//         console.log("Number skipped is " + y);
//         continue;
//     } else if (y % 2 === 0) {
//         while (y % 2 === 0) {
//             alert("Enter a valid input!");
//             y = prompt("Please give an odd number between 1 and 50:");
//
//         }
//
//     }
//     console.log("Here is an odd number: " + x);
//
//
// }












// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"







// function changeCase(str) {
//     var str2 = '';
//
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === str.charAt(i).toLowerCase()) {
//             str2 += str.charAt(i).toUpperCase();
//         } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
//             str2 += str.charAt(i).toLowerCase()
//         } else {
//             str2 += str.charAt(i);
//         }
//     }
//     console.log(str2);
// }
//
//
// console.log(changeCase("HeLlO"));








// BONUS 2:
// Write a function that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended.
// If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"




// function stringNumber(input) {
//
//
//
//     for (var i = 0; i < input.length; i++) {
//
//         if (!isNaN(parseFloat(input.charAt(i)))) {
//             var number = parseFloat(input.charAt(i));
//             if (number === input.length) {
//                 console.log("yes");
//             } else {
//                 console.log("No");
//             }
//         }
//
//     }
//
//     console.log(number);
//
// }
//
// stringNumber("matthewsays11");
// //















