// (function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var area = 0;
            area = Math.PI * Math.pow(this.radius, 2);
            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                var rounded = Math.round(this.getArea());
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + rounded);
            } else {
                var notRounded = this.getArea();
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + notRounded);
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value


        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");



    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);




















// })();

