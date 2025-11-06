console.log("hello world");
var myname = "dimas";
var price = 1000;
var isMarried = true;
console.log(myname, price, isMarried);
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
var postalCode = 4567;
var address = "Kebashiran Street, \nPostal code : ".concat(postalCode);
var address2 = "Kebasiran Street , Postal Code : " + postalCode;
console.log(address);
console.log(address2);
var price2 = "45600";
var price3 = "34B56";
console.log(Number(price2));
console.log(typeof Number(price2));
console.log(typeof price2);
console.log(Number(price3));
var price4 = 345;
console.log(typeof String(price4));
console.log(Boolean(1));
var now = new Date();
console.log(now);
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getDay());
// console.log(num1)
var num1 = 12;
var num2 = 13;
var num3 = -34;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
// console.log(num1 / 2) // 12 / 2 = 6  6 * 2 = 12 --> 12 - 12 = 0
// console.log(num1 / 5)// 12 / 5 = 2 , 5 * 2 = 10 --> 12 - 10 = 2
console.log(num1 % 5); // 2
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
// unary 
console.log(-num1);
console.log(num3);
num1 = num1 - 1; // re-assign --> 11
console.log(num1); // 11 
num1 -= 1; // re-assign // 10
console.log(num1); // 10
console.log(" postfix -1 => ", num1--); //10
console.log(num1); // 9
num1 += 5; // 14 
console.log(num1); // 14 
num1++; // 14
console.log(num1); // 15
console.log(" prefix +1 => ", ++num1); // 16
// console.log(5 == 3) // false 
// console.log(4 != 5) // true
num2 = 16;
console.log(num1 == num2); // false , 16 == 13 --> true 
console.log(num1 != num2); // true  --> false 
console.log(num1 > num2); // 16 > 13 , true --> false 
console.log(num1 < num2); // false --> false 
console.log(num1 >= num2); // true --> true 
console.log(num1 <= num2); // false --> true 
// console.log("A" == "a") // 
// console.log(2 == '2')
// console.log(2 === '2')
// console.log(2 !== "2")
// console.log(hello)
// var hello = "hello"
hello2();
function hello2() {
    console.log("hello 2");
}
