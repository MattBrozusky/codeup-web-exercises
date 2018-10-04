
(function() {
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


/*


var google = 400;

var googleHours = 6;

var amazon = 380;

var amazonHours = 4;

var facebook = 350;

var facebookHours = 10;

var totalPay = (google * googleHours) + (amazon * amazonHours) + (facebook * facebookHours);

alert("The total money I made for only 20 hours of work this week is $" + totalPay.toFixed(2));

*/






/*A student can be enrolled to a class only if the class is not full and the class schedule
does not conflict with her current schedule.*/


/*

var classFull = confirm("Is the class not full?");

var scheduleConflict = confirm("Does class not conflict with your schedule?");

var enrolled = classFull && scheduleConflict;

if (enrolled) {
    alert("You are enrolled in the class!")
}   else {
    alert("You are not enrolled in the class :(")
}

*/




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







/*************
 * Bonus
 * ***********/










/*Mad libs are a simple game where you create a story template with blanks for words. You, or another player,
then construct a list of words and place them into the story,
creating an often silly or funny story as a result.
Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects
those into a story that you create.
    Example Output
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly
Do you walk your blue dog quickly? That's hilarious!*/




/*

var noun = prompt("Please input a noun:");

var verb = prompt("Please input a verb:");

var adjective = prompt("Please input an adjective:");

var adverb = prompt("Please input an adverb:");

alert("Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "?");


*/






/*

Compute Simple Interest
Computing simple interest is a great way to quickly figure out whether an investment has value.
It’s also a good way to get comfortable with explicitly coding the order of operations in your programs.
    Create a program that computes simple interest. Prompt for the principal amount, the rate as a percentage, and the time,
    and display the amount accrued (principal + interest).
    The formula for simple interest is A = P(1 + rt), where P is the principal amount, r is the annual rate of interest,
    t is the number of years the amount is invested, and A is the amount at the end of the investment.
    Example Output
Enter the principal: 1500
Enter the rate of interest: 4.3
Enter the number of years: 4
After 4 years at 4.3%, the investment will
be worth $1758.
    Constraints
• Prompt for the rate as a percentage (like 15, not .15). Divide the input by 100 in your program.
• Ensure that fractions of a cent are rounded up to the next penny.
• Ensure that the output is formatted as money.
    Challenges
• Ensure that the values entered for principal, rate, and number of years are numeric and that the program will not let the user proceed without valid inputs.
*/




/*

var principalAmount = parseFloat(prompt("What is the principal amount invested:"));
var timeInvested = parseFloat(prompt("Enter the number of years:"));
var rateOfInterest = parseFloat(prompt("What is the interest rate in percentage:"));
var trueInterest = rateOfInterest / 100;

var principalAmountTF = isNaN(principalAmount);
var rateOfInterestTF = isNaN(rateOfInterest);
var timeInvestedTF = isNaN(timeInvested);


if (principalAmountTF || rateOfInterestTF || timeInvestedTF) {
    alert("Please enter a valid number:");
}   else {
    var amountAccured = principalAmount * (1 + (trueInterest * timeInvested));

}

alert("After " + timeInvested + " years at " + rateOfInterest + "%, the amount gained is $" + amountAccured.toFixed(2));

*/










/*
Paint Calculator
Sometimes you have to round up to the next number rather
than follow standard rounding rules.
    Calculate gallons of paint needed to paint the ceiling of a room. Prompt for the length and width, and assume one gallon covers 350 square feet.
    Display the number of gallons needed to paint the ceiling as a whole number.
    Example Output
You will need to purchase 2 gallons of
paint to cover 360 square feet.
    Remember, you can’t buy a partial gallon of paint. You must round up to the next whole gallon.
    Constraints
• Use a constant to hold the conversion rate.
• Ensure that you round up to the next whole number.*/





/*
var ceilingWidth = prompt("What is the width of the room ceiling in square feet?");
var ceilingLength = prompt("What is the length of the room ceiling in square feet?");
var ceilingArea = ceilingLength * ceilingWidth;

const paint = 350;
var gallonsOfPaint = ceilingArea / paint;
var roundedGallonsOfPaint = Math.ceil(gallonsOfPaint);


alert("You will need to purchase " +  roundedGallonsOfPaint + " gallons of paint to cover " + ceilingArea + " square feet.");
*/










/*
Pizza Party
Division isn’t always exact, and sometimes you’ll write programs that will need to deal with the leftovers as a whole number instead of a decimal.
    Write a program to evenly divide pizzas. Prompt for the number of people, the number of pizzas, and the number of slices per pizza.
    Ensure that the number of pieces comes out even. Display the number of pieces of pizza each person should get. If there are leftovers, show the number of leftover pieces.
    Example Output
How many people? 8
    How many pizzas do you have? 2
    8 people with 2 pizzas
Each person gets 2 pieces of pizza.
    There are 0 leftover pieces.
*/




/*

var numberOfPeople = prompt("What is the number of people:");
var numberOfPizzas = prompt("What is the number of pizzas:");
var numberOfSlicesPerPizza = prompt("What is the number of slices per pizza:");


var totalNumberOfSlices = numberOfPizzas * numberOfSlicesPerPizza;


var numberOfSlicesPerPerson = totalNumberOfSlices / numberOfPeople;
var realNumberOfSlicesPerPerson = Math.floor(numberOfSlicesPerPerson);


var leftOverSlices = totalNumberOfSlices % numberOfPeople;


alert("Each person gets " + realNumberOfSlicesPerPerson + " pieces of pizza. There are " + leftOverSlices + " leftover pieces.");


*/






/*make a function, hasLetterA() that takes in a string and returns true if the string contains "a" and false if it does not; test the function*/





/*
    function hasLetterA(input) {
        var indexOfa = input.toLowerCase().indexOf("a");
        return indexOfa >= 0;
    }


    console.log(hasLetterA("dya"));

*/










})();















