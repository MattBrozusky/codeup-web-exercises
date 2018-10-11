// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */



    // var person = {
    //     "firstName": "Rick",
    //     "lastName": "Sanchez"
    // };
    //
    //
    // console.log(person.firstName);
    // console.log(person.lastName);






    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */




    // var person = {
    //     "firstName": "Rick",
    //     "lastName": "Sanchez",
    //     "sayHello": function () {
    //         return "Hello from " + this.firstName + " " + this.lastName + "!";
    //     }
    // };
    //
    //
    // console.log(person.sayHello());






    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */




    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    //
    // function discount(totalPrice) {
    //     var amountRemoved = totalPrice * 0.12;
    //     return totalPrice - amountRemoved;
    // }
    //
    //
    // var finalPrice = shoppers.forEach(function (shopper) {
    //     if (shopper.amount >= 200){
    //         var finalAmount = discount(shopper.amount);
    //         console.log("Congrats " + shopper.name + " your original total was $" + shopper.amount + ". Your new total is $" + finalAmount);
    //     } else {
    //         console.log("I'm sorry " + shopper.name + " you did not spend enough money to receive the discount");
    //     }
    //
    // });












    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */




    // var books = [
    //     {
    //         "title": "To Kill a Mockingbird",
    //         "author": {
    //             "firstName": "Harper",
    //             "lastName": "Lee"
    //         }
    //     },
    //     {
    //         "title": "Pride and Prejudice",
    //         "author": {
    //             "firstName": "Jane",
    //             "lastName": "Austen"
    //         }
    //     },
    //     {
    //         "title": "Adventures of Huckleberry Finn",
    //         "author": {
    //             "firstName": "Mark",
    //             "lastName": "Twain"
    //         }
    //     },
    //     {
    //         "title": "The Catcher in the Rye",
    //         "author": {
    //             "firstName": "J.D.",
    //             "lastName": "Salinger"
    //         }
    //     },
    //     {
    //         "title": "Moby-Dick",
    //         "author": {
    //             "firstName": "Herman",
    //             "lastName": "Melville"
    //         }
    //     }
    // ];






    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */



    // books.forEach(function (book, index, array) {
    //    var bookNumber = "Book # " + (index + 1);
    //    var title = "Title: " + book.title;
    //    var author = "Author: " + book.author.firstName + " " + book.author.lastName;
    //    console.log(bookNumber, title, author)
    //
    // });










    
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



    //
    // function createBook(title, authorFirstName, authorLastName) {
    //     var bookObject = {};
    //     bookObject.title = title;
    //     bookObject.author = {};
    //     bookObject.author.firstName = authorFirstName;
    //     bookObject.author.lastName = authorLastName;
    //     return bookObject;
    //
    // }
    //
    //
    // console.log(createBook("To Kill a Mockingbird", "Harper", "Lee"));








// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}

// Exercise 2. Use the following data to create a sales report
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67

// Exercise 3. On the objects object above, add the following methods
// - getEmployee count should return the total number of employees
// - total number of units sold
// - avg units sold per employee


// Exercise 5. On the report object you created with the data above, add the following methods
//  getProfileCount() should return the total number of profiles
//  getActiveCount() should return the number of active profiles
//  sumOfAllBalances() should return sum of the balance of all profiles
//  getAverageBalance() should return the average balance per users
//  getAverageAge() should return the average age of all users
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
//  getAllCompanyNames() should return an array of all companies represented by the users
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.







// Practice with assignment by reference



// })();