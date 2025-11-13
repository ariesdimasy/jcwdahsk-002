// intro.ts
// Basic TypeScript examples with input validation

// A safe adder with validation
export function add(a: unknown, b: unknown): number {
    if (!isNumber(a) || !isNumber(b)) {
        throw new TypeError(`add() expects two numbers. Received a=${stringify(a)} b=${stringify(b)}`);
    }
    return a + b;
}

// Parse an integer from string or number with range validation
export function toInt(value: unknown, opts?: { min?: number; max?: number; radix?: number }): number {
    const { min, max, radix = 10 } = opts ?? {};

    let n: number;
    if (typeof value === 'number') {
        n = Math.trunc(value);
    } else if (typeof value === 'string') {
        if (value.trim() === '') throw new TypeError('toInt() received an empty string');
        n = Number.parseInt(value, radix);
    } else {
        throw new TypeError(`toInt() expects a number or string. Received ${stringify(value)}`);
    }

    if (!Number.isFinite(n) || Number.isNaN(n)) {
        throw new TypeError(`toInt() failed to parse a valid integer from ${stringify(value)}`);
    }

    if (!Number.isInteger(n)) {
        // Should not happen due to parsing, but keep as guard
        n = Math.trunc(n);
    }

    if (typeof min === 'number' && n < min) {
        throw new RangeError(`toInt() result ${n} is less than min ${min}`);
    }
    if (typeof max === 'number' && n > max) {
        throw new RangeError(`toInt() result ${n} is greater than max ${max}`);
    }

    return n;
}

// Create a greeting with validation
export function greet(name: unknown, opts?: { uppercase?: boolean }): string {
    if (typeof name !== 'string') {
        throw new TypeError(`greet() expects name to be a string. Received ${stringify(name)}`);
    }
    const safe = name.trim();
    if (safe.length === 0) {
        throw new TypeError('greet() name must not be empty');
    }
    const result = `Hello, ${safe}!`;
    return opts?.uppercase ? result.toUpperCase() : result;
}

// Average an array of numbers with validation
export function average(values: unknown): number {
    if (!Array.isArray(values)) {
        throw new TypeError(`average() expects an array of numbers. Received ${stringify(values)}`);
    }
    if (values.length === 0) {
        throw new TypeError('average() requires at least one value');
    }
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        const v = values[i];
        if (!isNumber(v)) {
            throw new TypeError(`average() encountered a non-number at index ${i}: ${stringify(v)}`);
        }
        sum += v;
    }
    return sum / values.length;
}

// Narrowing helpers
function isNumber(x: unknown): x is number {
    return typeof x === 'number' && Number.isFinite(x);
}

function stringify(x: unknown): string {
    try {
        if (typeof x === 'string') return JSON.stringify(x);
        return JSON.stringify(x);
    } catch {
        return String(x);
    }
}

// Example usages (commented out for library-style file)
// console.log(add(1, 2));
// console.log(toInt('42', { min: 0 }));
console.log(greet('Alice', { uppercase: true }));
// console.log(average([1, 2, 3, 4]));
