"use strict";
// intro.ts
// Basic TypeScript examples with input validation
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.toInt = toInt;
exports.greet = greet;
exports.average = average;
// A safe adder with validation
function add(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError("add() expects two numbers. Received a=".concat(stringify(a), " b=").concat(stringify(b)));
    }
    return a + b;
}
// Parse an integer from string or number with range validation
function toInt(value, opts) {
    var _a = opts !== null && opts !== void 0 ? opts : {}, min = _a.min, max = _a.max, _b = _a.radix, radix = _b === void 0 ? 10 : _b;
    var n;
    if (typeof value === 'number') {
        n = Math.trunc(value);
    }
    else if (typeof value === 'string') {
        if (value.trim() === '')
            throw new TypeError('toInt() received an empty string');
        n = Number.parseInt(value, radix);
    }
    else {
        throw new TypeError("toInt() expects a number or string. Received ".concat(stringify(value)));
    }
    if (!Number.isFinite(n) || Number.isNaN(n)) {
        throw new TypeError("toInt() failed to parse a valid integer from ".concat(stringify(value)));
    }
    if (!Number.isInteger(n)) {
        // Should not happen due to parsing, but keep as guard
        n = Math.trunc(n);
    }
    if (typeof min === 'number' && n < min) {
        throw new RangeError("toInt() result ".concat(n, " is less than min ").concat(min));
    }
    if (typeof max === 'number' && n > max) {
        throw new RangeError("toInt() result ".concat(n, " is greater than max ").concat(max));
    }
    return n;
}
// Create a greeting with validation
function greet(name, opts) {
    if (typeof name !== 'string') {
        throw new TypeError("greet() expects name to be a string. Received ".concat(stringify(name)));
    }
    var safe = name.trim();
    if (safe.length === 0) {
        throw new TypeError('greet() name must not be empty');
    }
    var result = "Hello, ".concat(safe, "!");
    return (opts === null || opts === void 0 ? void 0 : opts.uppercase) ? result.toUpperCase() : result;
}
// Average an array of numbers with validation
function average(values) {
    if (!Array.isArray(values)) {
        throw new TypeError("average() expects an array of numbers. Received ".concat(stringify(values)));
    }
    if (values.length === 0) {
        throw new TypeError('average() requires at least one value');
    }
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        var v = values[i];
        if (!isNumber(v)) {
            throw new TypeError("average() encountered a non-number at index ".concat(i, ": ").concat(stringify(v)));
        }
        sum += v;
    }
    return sum / values.length;
}
// Narrowing helpers
function isNumber(x) {
    return typeof x === 'number' && Number.isFinite(x);
}
function stringify(x) {
    try {
        if (typeof x === 'string')
            return JSON.stringify(x);
        return JSON.stringify(x);
    }
    catch (_a) {
        return String(x);
    }
}
// Example usages (commented out for library-style file)
// console.log(add(1, 2));
// console.log(toInt('42', { min: 0 }));
console.log(greet('Alice', { uppercase: true }));
// console.log(average([1, 2, 3, 4]));
