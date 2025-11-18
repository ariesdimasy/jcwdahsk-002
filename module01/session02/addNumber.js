var firstInput = prompt("Enter first number:");
var secondInput = prompt("Enter second number:");
// Validate inputs are provided
if (firstInput === null || firstInput.trim() === "") {
    console.error("Invalid input: first number is required.");
    throw new TypeError("First input must be a number string.");
}
if (secondInput === null || secondInput.trim() === "") {
    console.error("Invalid input: second number is required.");
    throw new TypeError("Second input must be a number string.");
}
// Convert to numbers
var firstNumber = Number(firstInput);
var secondNumber = Number(secondInput);
// Validate numeric conversion
if (!Number.isFinite(firstNumber)) {
    console.error("Invalid input: \"".concat(firstInput, "\" is not a valid number."));
    throw new TypeError("First input must be a valid number.");
}
if (!Number.isFinite(secondNumber)) {
    console.error("Invalid input: \"".concat(secondInput, "\" is not a valid number."));
    throw new TypeError("Second input must be a valid number.");
}
var totalSum = firstNumber + secondNumber;
console.log("The sum is:", totalSum);
