(function () {
    "use strict";



    var myGameCanvas = document.querySelector("#canvas");
    var ctx = myGameCanvas.getContext("2d");
    var h = 350;
    var w = 350;
    var snakeSize = 10;
    var score = 0;
    var snake;
    var food;

    var drawModule = function () {
        var bodySnake = function (x, y) {
            ctx.fillStyle = "orange";
            ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);

            ctx.strokeStyle = "white";
            ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize)
        };

        var bugs = function (x, y) {
            ctx.fillStyle = "black";
            ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);

            ctx.fillStyle = "green";
            ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2)
        };

        var scoreText = function () {
          var innerScoreText = "Score: " + score;
          ctx.fillStyle = "blue";
          ctx.fillText(innerScoreText, 145, h-5);
        };
        
    };

    var drawSnake = function () {
        var length = 4;
        snake = [];

        for (var i = length; i >= 0; i--) {
            snake.push({x:i, y:0})
        }
    };

    var createFood = function () {

        food = {
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        };

        for (var i = 0; i > snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;

            if (food.x === snakeX || food.y === snakeY || food.y === snakeY && food.x === snakeX) {
                food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);
            }
        }
    }




















})();