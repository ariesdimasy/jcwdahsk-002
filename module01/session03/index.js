var name = "Aries Dimas";
var age = 20;
var condition = age >= 17 && age <= 65; // true
// console.log(age >= 17)
// age >= 17 kondisi ini harus berupa boolean 
if (age >= 17) {
    console.log("you are now have an ID");
}
else {
    console.log("you are underage");
}
var trafficLamp = "yellow";
if (trafficLamp == "red") {
    console.log("stop");
}
else if (trafficLamp == "yellow") {
    console.log("get ready");
}
else if (trafficLamp == "green") {
    console.log("go");
}
else {
    console.log("do what you want?");
}
// trafficLamp adalah patokan dibandingkan dengan case - case yang ada 
switch (trafficLamp) {
    case "red": // trafficLamp === "red"
        console.log("stop");
        break;
    case "yellow": // trafficLamp === "yellow"
        console.log("get ready");
        break;
    case "green": //    trafficLamp === "green"
        console.log("go");
        break;
    default:
        console.log("do what you want?");
}
// condition --> age >= 17 && age <= 65
if (condition) {
    console.log("you are an adult");
}
// age = 20
// age === ( age >= 17 && age <= 65 ) --> false
// true ===  (age >= 17 && age <= 65 ) --> true 
switch (true) {
    case age >= 17 && age <= 65:
        console.log("you are an adult");
        break;
    default:
        console.log("you are not an adult");
        break;
}
// true --> truthy 
// false --> falsy
// 12 --> truthy
// 0 --> falsy
// "hello" --> truthy
// "" --> falsy
// null --> falsy
// undefined --> falsy
// NaN --> falsy
if (null) {
    console.log("this will never run");
}
// block code 
// === strict equal data type dan nilai harus sama 
// logic gate 
// saya pesan nasi goreng dan jus apel
// pelayan membawakan nasi uduk dan jus apel
// AND 
// saya pesan mie goreng atau teh botol
// pelayan membawakan mie goreng atau teh pucuk
console.log(age >= 20 || age <= 20);
// true || true --> true 
console.log(age < 20 || age > 20);
// false || false --> false
console.log(age != 20); // false  
console.log(!false); // true 
// true
//console.log((true != (40 >= 21)) == (34 != 70 && 56 > 78)) // 
console.log(false && "hello");
console.log(true && "hello");
console.log(name || "guest");
// ternary operator
age >= 17 ? console.log("You are now have an ID") : console.log("you are underage");
trafficLamp == "red" ? console.log("stop") :
    trafficLamp == "yellow" ? console.log("get ready") : console.log("run");
