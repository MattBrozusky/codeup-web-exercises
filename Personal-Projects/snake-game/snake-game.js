
"use strict";

var drawModule = (function () {

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
    };

    var checkCollision= function (x, y, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].x === x && array[i].y === y ) {
                return true;
            }
        }
        return false
    };


    var paint = function () {
        //Space where snake moves
        ctx.fillStyle = "lightgrey";
        ctx.fillRect(0, 0, w, h);

        //Border of that space
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, w, h);

        btn.setAttribute("disabled", true);

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        //Make snake move by popping last element of array to front
        if (direction === "right") {
            snakeX++;
        } else if (direction === "left") {
            snakeX--;
        } else if (direction === "up") {
            snakeY--;
        } else if (direction === "down") {
            snakeY++;
        }


        //Check to make sure the snake stays inside the canvas
        if (snakeX === - 1 || snakeX === w / snakeSize || snakeY === - 1 || snakeY === h / snakeSize || checkCollision(snakeX, snakeY, snake)) {
            //Stop game, Activate button, and Clean canvas

            btn.removeAttribute("disabled", true);

            ctx.clearRect(0, 0, w, h);
            gameloop = clearInterval(gameloop);
            return;
        }

        //Make snake longer when he eats the food
        if (snakeX === food.x && snakeY === food.y) {
            var tail = {
                x: snakeX,
                y: snakeY
            };
            score++;
            createFood();
        } else {

            var tail = snake.pop();
            tail.x = snakeX;
            tail.y = snakeY;
        }

        snake.unshift(tail);

        //Creates a square for each element in snake array
        for (var i = 0; i < snake.length; i++){
            bodySnake(snake[i].x, snake[i].y)
        }

        //Create food
        bugs(food.x, food.y);

        //Show score
        scoreText();
    };

    var init = function () {
        direction = "down";
        drawSnake();
        createFood();
        gameloop = setInterval(paint, 80);

    };

    var btn = document.getElementById("btn");
    btn.addEventListener("click", init());

    return init();

}());



