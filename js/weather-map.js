$(document).ready(function () {
    "use strict";

    var mapPosition = {
        lat: "29.4241",
        lon: "-98.4936"

    };

    function weatherData() {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "d8078a58900152b022c837716684ad65",
            lat: mapPosition.lat,
            lon: mapPosition.lon,
            units: "imperial"
        }).done(function (data) {
            // console.log(data);
            $("#marker-location").html(data.city.name);
            $("#weather-cards").html(createCards(data));
        });
    }
    weatherData();

    const getMinMaxDayTemp = (data, day) => {
        const temps = data.list.slice(day * 8 - 8, day * 8)
            .reduce((prev, curr) => {
                prev.push(curr.main.temp);
                return prev;
            }, []).sort();
        return {min: temps.shift(), max: temps.pop()};
    };


    function createCards(data) {
        var today = new Date();
        var html = '';

        // console.log(today);
        // console.log(typeof(today));

        for (var i = 0; i < 3; i++) {
            var day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
            day = day.toString();
            var temp = getMinMaxDayTemp(data, i + 1);

            html += '<article class="col s12 extra-content">';
            html += '<div class="card horizontal blue-grey darken-1 z-depth-1 hoverable border-radius-round">';
            html += '<div class="card-stacked">';
            html += '<section class="card-content white-text">';
            html += '<span class="card-title center">' + day.substring(0, 10) + '</span>';
            html += '<hr>';
            html += '<article class="row mb-0">';
            html += '<div class="center card-title">' + temp.min.toFixed(0) + ' / ' + temp.max.toFixed(0) + '</div>';
            html += '<div class="center"><img src="http://openweathermap.org/img/w/' + data.list[i * 8].weather[0].icon + '.png" alt=""></div>';
            html += '</article>';
            html += '</section>';
            html += '</div>';
            html += '<div class="card-stacked hide extra-slide">';
            html += '<section class="card-content white-text">';
            html += '<h6><span class="weather-header">CLOUDS:</span>' + ' ' + data.list[i * 8].weather[0].description + '</h6>';
            html += '<h6><span class="weather-header">HUMIDITY:</span>' + ' ' + data.list[i * 8].main.humidity + '</h6>';
            html += '<h6><span class="weather-header">WIND:</span>' + ' ' + data.list[i * 8].wind.speed + '</h6>';
            html += '<h6><span class="weather-header">PRESSURE:</span>' + ' ' + data.list[i * 8].main.pressure + '</h6>';
            html += '</section>';
            html += '</div>';
            html += '</div>';
            html += '</article>';
        }
        return html;
    }


    $(document).on('mouseenter', '.extra-content', function () {
        $(this).children().children().next().fadeIn(750).removeClass("hide");
    });
    $(document).on('mouseleave', '.extra-content', function () {
        $(this).children().children().next().fadeOut(750);
    });
    
    //------------------
    // Google Maps
    //------------------
    function googleMaps() {
        var mapOptions ={
            center: {
                lat: 29.397,
                lng: -98.5
            },
            zoom: 5
        };
        var geocoder = new google.maps.Geocoder();
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var address = "San Antonio";


        geocoder.geocode({ "address": address }, function(results, status) {

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
            if (status === google.maps.GeocoderStatus.OK) {

                // Recenter the map over the address
                map.setCenter(results[0].geometry.location);

                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP
                });
                marker.addListener("click", toggleBounce);
            } else {
                alert("Geocoding was not successful - STATUS: " + status);
            }

            marker.addListener('dragend', function (event) {
                mapPosition.lat = this.getPosition().lat();
                mapPosition.lon = this.getPosition().lng();

                weatherData()
            });
        });
    }
    googleMaps();




});