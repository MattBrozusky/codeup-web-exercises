"use strict";


var myGameCanvas = document.querySelector("#canvas");
var ctx = myGameCanvas.getContext("2d");
var h = 350;
var w = 350;
var snakeSize = 10;
var score = 0;
var snake;
var food;