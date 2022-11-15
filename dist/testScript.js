"use strict";
exports.__esModule = true;
var testLibrary_1 = require("./testLibrary");
var hello = "world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Franklin", "Melden"));
var user = {
    name: "Manny",
    age: 50,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Philmore",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log((0, testLibrary_1.addNumbers)(1, 2));
