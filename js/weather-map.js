$(document).ready(function () {
    "use strict";

    function weatherData() {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "d8078a58900152b022c837716684ad65",
            lat: "29.4241",
            lon: "-98.4936",
            units: "imperial"
        }).done(function (data) {
            // console.log(data);
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
        var html = '';
        for (var i = 0; i < 3; i++) {
            var temp = getMinMaxDayTemp(data, i + 1);

            html += '<article class="col s4">';
            html += '<div class="card blue-grey darken-1">';
            html += '<div class="card-content white-text">';
            html += '<span class="card-title center">' + temp.min.toFixed(0) + ' / ' + temp.max.toFixed(0) + '</span>';
            html += '<div class="center"><img src="http://openweathermap.org/img/w/' + data.list[i * 8].weather[0].icon + '.png" alt=""></div>';
            html += '<hr>';
            html += '<h6><span class="weather-header">CLOUDS:</span>' + ' ' + data.list[i * 8].weather[0].description + '</h6>';
            html += '<h6><span class="weather-header">HUMIDITY:</span>' + ' ' + data.list[i * 8].main.humidity + '</h6>';
            html += '<h6><span class="weather-header">WIND:</span>' + ' ' + data.list[i * 8].wind.speed + '</h6>';
            html += '<h6><span class="weather-header">PRESSURE:</span>' + ' ' + data.list[i * 8].main.pressure + '</h6>';
            html += '</div>';
            html += '</div>';
            html += '</article>';
        }
        return html;
    }



    //------------------
    // Google Maps
    //------------------
    function googleMaps() {
        var mapOptions ={
            center: {
                lat: 29.397,
                lng: -98.5
            },
            zoom: 12
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
                var lat = this.getPosition().lat();
                var lon = this.getPosition().lng();

                $.get("http://api.openweathermap.org/data/2.5/forecast", {
                    APPID: "d8078a58900152b022c837716684ad65",
                    lat: lat,
                    lon: lon,
                    units: "imperial"
                }).done(function (data) {
                    $("#marker-location").html(data.city.name);
                    $("#weather-cards").html(createCards(data));
                });
            });
        });
    }
    googleMaps();









});