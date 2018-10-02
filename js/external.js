"use strict";


/*
alert("Welcome to my website");


var userColor = prompt("What is your favorite color?");

alert(userColor + " is my favorite color too!");

*/




/* You have rented some movies for your kids: The little mermaid (for 3 days),
* Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet
* if they're going to like it). If price for a movie per day is $3, how much will you have to pay? */



/*

var mermaid = 3;

var bear = 5;

var hercules = 1;

var mermaidPrice = mermaid * 3;

var bearPrice = bear * 3;

var herculesPrice = hercules * 3;

var total = mermaidPrice + bearPrice + herculesPrice;

alert("The total cost for rented kids movies is $" + total.toFixed(2));


*/







/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours
for Google and 4 hours for Amazon.*/




var google = 400;

var googleHours = 6;

var amazon = 380;

var amazonHours = 4;

var facebook = 350;

var facebookHours = 10;

var totalPay = (google * googleHours) + (amazon * amazonHours) + (facebook * facebookHours);

alert("The total money I made for only 20 hours of work this week is $" + totalPay.toFixed(2));







/*A student can be enrolled to a class only if the class is not full and the class schedule
does not conflict with her current schedule.*/




var classFull = confirm("Is the class not full?");

var scheduleConflict = confirm("Does class not conflict with your schedule?");

var enrolled = classFull && scheduleConflict;

if (enrolled) {
    alert("You are enrolled in the class!")
}   else {
    alert("You are not enrolled in the class :(")
}





/*A product offer can be applied only if people buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products.*/



/*
var premiumMember = confirm("Are you a premium member?");


if (premiumMember) {
    var offerNotExpire = confirm("Did the offer not expire?");

    if (offerNotExpire) {
        alert("Congrats you get the offer!")
    }   else {
        alert("You did not get the offer...")
    }

}   else {
    var moreThan2 = prompt("How many items did you buy?");

    if (Number(moreThan2) >= 2) {
    var offerNotExpire2 = confirm("Did the offer not expire?");
    }

    if (moreThan2 && offerNotExpire2) {
        alert("Congrats you get the offer!")
    }   else {
        alert("You did not get the offer...")
    }
}*/















