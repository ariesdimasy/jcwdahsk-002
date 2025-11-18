"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
hello(2);
console.log('==============================');
function hello(num) {
    for (var i = 1; i <= num; i++) {
        console.log("hello ");
    }
}
hello(5); // pemanggilan function
// ==================================================
console.log('==============================');
hello(15);
var showMessage = function (message) {
    console.log("showMessage : ", _this);
    console.log("Message : ", message);
};
showMessage("hello my family");
function sum(a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(" sum => ");
    return a + b + c;
}
var result = sum(10, 20, 5); // 35
var res = sum(20, 30);
console.log("Result : ", result);
console.log("Res : ", res);
function showPeople(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    console.log("a : ", a);
    console.log("b : ", b);
    console.log("c : ", c);
}
showPeople("Luffy", "Zoro", "Nami", "Usopp", "Sanji");
function addTotal(num) {
    var total = 0;
    total += num;
    return total;
}
console.log(addTotal(10));
console.log(addTotal(30));
// () => {} disebut dengan arrow function, expression function
function getMessage(name) {
    var sayHello = function () {
        return "Hello " + " " + name;
    };
    var welcomeMessage = function () {
        return "Welcome to Purwadhika";
    };
    return sayHello() + " " + welcomeMessage();
}
var message = getMessage("Adi");
console.log(message);
var merge = "aries" + " " + "syahputra";
console.log(merge);
console.log(" ============== ");
function countDown(num) {
    console.log(num);
    // 10 > 0  
    if (num > 0) { // BASE CASE
        num = num - 1;
        countDown(num);
    }
}
function addMore(num) {
    // 0 > 0
    if (num > 0) {
        return addMore(num - 1) + num; // 5
    }
    else {
        return num;
    }
}
countDown(11);
console.log("=====");
console.log(addMore(5)); //  0 +  1  + 2  +  3  +  4  +  5 = 15 
var addString = function () {
    var str = "a" + "b";
    return str;
};
console.log(addString());
console.log(isNaN(45)); // is Not a Number ? 
console.log(isNaN("a"));
