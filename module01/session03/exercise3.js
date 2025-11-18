var num = 33;
if (num % 2 == 0) {
    console.log(num, "is an even number");
}
else {
    console.log(num, "is an odd number");
}
var isPrime = true;
for (var i = 2; i < num; i++) { // 2 - 36
    if (num % i == 0) {
        console.log(num, " is divisible by ", i);
        isPrime = false;
        break;
    }
}
console.log(num, " is ", isPrime ? "a prime number" : "not a prime number");
var n = 5;
var result = 0;
var result2 = 1;
for (var i = 1; i <= n; i++) {
    result = result + i; // 1 + 2 = 3 
}
console.log(result);
for (var i = 1; i <= n; i++) {
    result2 = result2 * i; // 
}
console.log(result2);
