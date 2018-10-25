// $(document).ready(function () {
    "use strict";


    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];


    // $("#names-btn").on("click", function () {
    //     var namesDiv = $("#names-list");
    //     $.each(people, function (index, properties) {
    //         if (index === 0) {
    //             namesDiv.html('<ul>');
    //         }
    //         namesDiv.children().append('<li>' + properties.name + '</li>');
    //         if (index === people.length) {
    //             namesDiv.append('</ul>');
    //         }
    //     });
    //
    // });

    // function colorBonus(peopleObjects) {
    //     $("li").each(function (index, properties) {
    //         $(this).css("color", peopleObjects[index].favColor);
    //     });
    // }
    //
    // colorBonus(people);



    $.ajax({
        url: "https://swapi.co/api/films",
        type: "GET",
        data: {
            search: "Revenge of The Sith"
        }
    }).done(function(data) {
        console.log(data.results[0].planets[0]);
    }).fail(function() {
        console.log("Request failed");
    });



// });