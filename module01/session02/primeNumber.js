/**
 * Check if a number is prime.
 * Returns true for prime integers >= 2, false otherwise.
 */
function isPrime(n) {
    if (typeof n !== 'number' || !Number.isFinite(n) || Math.floor(n) !== n) return false;
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

module.exports = { isPrime };

// CLI usage: node primeNumber.js 17
if (require.main === module) {
    const arg = process.argv[2];
    if (!arg) {
        console.log('Usage: node primeNumber.js <integer>');
        process.exit(1);
    }
    const num = Number(arg);
    console.log(isPrime(num) ? `${num} is prime` : `${num} is not prime`);
}