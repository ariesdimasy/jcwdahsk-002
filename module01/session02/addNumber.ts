const firstInput = prompt("Enter first number:")
const secondInput = prompt("Enter second number:")

// Validate inputs are provided
if (firstInput === null || firstInput.trim() === "") {
    console.error("Invalid input: first number is required.")
    throw new TypeError("First input must be a number string.")
}
if (secondInput === null || secondInput.trim() === "") {
    console.error("Invalid input: second number is required.")
    throw new TypeError("Second input must be a number string.")
}

// Convert to numbers
const firstNumber: number = Number(firstInput)
const secondNumber: number = Number(secondInput)

// Validate numeric conversion
if (!Number.isFinite(firstNumber)) {
    console.error(`Invalid input: \"${firstInput}\" is not a valid number.`)
    throw new TypeError("First input must be a valid number.")
}
if (!Number.isFinite(secondNumber)) {
    console.error(`Invalid input: \"${secondInput}\" is not a valid number.`)
    throw new TypeError("Second input must be a valid number.")
}

const totalSum: number = firstNumber + secondNumber

console.log("The sum is:", totalSum)