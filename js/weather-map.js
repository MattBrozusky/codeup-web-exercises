$(document).ready(function () {
    "use strict";


    function weatherData() {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "d8078a58900152b022c837716684ad65",
            q:     "San Antonio, US"
        }).done(function (data) {
            console.log(data);
        });
    }

    weatherData();




// MAKE THE WEATHER FORECAST
    // practice writing console.logs of various parts of the OpenWeatherMap object...
    // console.log the current weather description
    // console.log the humidity of the 2nd day
    // console.log the humidity of all the days (use a for loop)
    // console.log the temperature of the 3rd day in celsius
    // console.log the temperature of the 3rd day in Fahrenheit
    // console.log all types of information you will ultimately display for a single day in the 3-day forecast div
    // console.log all type of information you will ultimately display for all days in the 3-day forecast divs
    // write html and css to make/style a three-day forecast set of divs (may use design from curriculum)
    // create a function to append specific parts of the OpenWeatherMap map object to the DOM and call it in the .done() of the OpenWeatherMap map GET request.
    // remember to first console.log specific data from the OpenWeatherMap object, then work on adding to the DOM
    // read and reread the curriculum and OpenWeatherMap docs carefully on how to get an image of the weather forecast
    // hint: "http://openweathermap.org/img/w/" + whateverTheWeatherIconValueIs
    // verify that the OpenWeatherMap data populates by hard coding in lat and lon values
    // create lat and lon variables to hold lat and lon values.
    // add lat and lon properties to the function that calls the OpenWeatheMap API GET request
    // add an input field for lat and lon with button that fires a new request to the OpenWeatherMap API and passes the lat and lon values from the input fields into the request.
// CREATE THE MAP
    // using syntax from the previous Maps exercise, add a map below the OpenWeatherMap forecast
    // add a marker to the map and make it draggable
    // create a marker drag event that console logs the lat and lon where the marker is dropped
// WIRE UP MAP TO WEATHER API
    // add the function call that makes the Weather API request to the marker drag event and pass in the lat and lon values of the marker to the Weather API request function
















});