"use strict";

// (function () {


// var x = 2;
//
// while (x < 65537) {
//     console.log(x);
//     x = x * 2;
// }
//
//
//
// var y = 2;
//
// do {
//     console.log(y);
//     y = y * 2;
// } while (y < 65537);
//
//




//
// ---------------
// 10
// 8
// 6
// 4
// 2
// 0
// -2




//
// var x = 10;
//
// while (x >= -2) {
//     console.log(x);
//     x = x -2;
// }
//
//
// var y =10;
//
// do {
//     console.log(y);
//     y = y - 2;
// } while (y >= -2);
//





// ---------------
// 2
// 4
// 16
// 256
// 65536
// ---------------




// var x = 2;
//
// while (x < 65537) {
//     console.log(x);
//     x = x * x;
// }
//
//
// var y = 2;
//
// do {
//     console.log(y);
//     y = y * y;
// } while (y < 65537);






// 1
// 2
// 3
// 4
// 5
// 6
// ---------------



// var x = 1;
//
// while (x <= 6) {
//     console.log(x);
//     x++;
// }
//
//
//
// var y = 1;
//
// do {
//     console.log(y);
//     y++;
// } while (y <= 6);






// 105
// 100
// 95
// ---------------


// var x = 105;
//
// while (x >= 95) {
//     console.log(x);
//     x -= 5;
// }
//
//
// var y = 105;
//
// do {
//     console.log(y);
//     y -= 5;
// } while (y >= 95);





// 1000000
// 100000
// 10000
// 1000
// 100
// 10
// 1




// var x = 1000000;
//
// while (x >= 1) {
//     console.log(x);
//     x /= 10;
// }
//
//
//
// var y = 1000000;
//
// do {
//     console.log(y);
//     y /= 10;
// } while (y >= 1);




// An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell.
// Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.
// This is how you get the random numbers.

// 5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;


// This expression will generate a random number between 1 and 5




// console.log(allCones);
//
// do {
//     var conesBeingBought = Math.floor(Math.random() * 5) + 1;
//     var conesLeft = allCones -= conesBeingBought;
//
//
//     if (conesLeft - conesBeingBought === 0) {
//         console.log(conesBeingBought + " cones were sold!");
//         console.log(conesLeft);
//         console.log("Yay, I sold them all!");
//         break;
//     } else if (conesLeft - conesBeingBought < 0) {
//         console.log(conesBeingBought + " cones were sold!");
//         console.log(conesLeft);
//         alert("Cannot sell " + conesBeingBought + " cones. I only have " + conesLeft + " cones left!");
//         break;
//     } else {
//         console.log(conesBeingBought + " cones were sold!");
//         console.log(conesLeft);
//     }
// } while (conesLeft >= 1);





















// })();