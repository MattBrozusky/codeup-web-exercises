"use strict";


var game = game || {};
var keyboard = keyboard || {};
var component = component || {};




keyboard.keyMap = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};



keyboard.controllerEvents = function () {

    var self = this;
    this.pressKey = null;
    this.keyMap = keyboard.keyMap;

    document.onkeydown = function (event) {
        self.pressKey = event.which;
    };

    this.getKey = function () {
        return this.keyMap[this.pressKey]
    };
};


component.stage = function (canvas, conf) {


    this.keyEvent = new keyboard.controllerEvents();
    this.width = canvas.width;
    this.height = canvas.height;
    this.length = [];
    this.food = {};
    this.score = 0;
    this.direction = "right";
    this.conf = {
        cw: 10,
        size: 5,
        fps: 1000
    };

    if (typeof conf === "object") {
        for (var key in conf) {
            if (conf.hasOwnProperty(key)) {
                this.conf[key] = conf[key];
            }
        }
    }

};
