/*
Slay Achilles!

Description:

A horde of Grecian warriors is storming towards you. Among them is Achilles. Pick him off and slay him. Your city depends on it.

Your function will be passed an array of positive integers containing an Achilles number. An Achilles number is "powerful" but not a perfect power, meaning every term of its prime factorization is at least squared, but it cannot be represented as the power of a single number (i.e. it cannot be mk, but may be of the form mx · ny where x!=y, etc.).

For example:

    99 = 32 · 11 (not powerful; not Achilles)
    100 = 102 (perfect power; not Achilles)
    108 = 2233 (Achilles!)

Remove Achilles from the array and return the array.

Note: it's guaranteed that the army does not exceed 1000 numbers, and each number can't exceed 1010 as well.

*/



// Solution
// trial division prime factorization
// returns { primeNumber: exponent, ...}
function primeFactors(n) {
    const factors = {};
    let d = 2;
    while (d * d <= n) {
        while (n % d === 0) {
            factors[d] = (factors[d] || 0) + 1;
            n /= d;
        }
        d++;
    }
    if (n > 1) {
      factors[n] = (factors[n] || 0) + 1;
    }
    return factors;
}

function gcd(a, b){
    return b === 0 ? a : gcd(b, a % b);
}

function computeGCD(arr) {
    return arr.reduce((acc, val) => gcd(acc, val));
}

// Check if n is a perfect power, n = a^k for some integers a > 1, k > 1.
function isPerfectPower(n) {
    if ( n <= 1 ) return false;
    const factors = primeFactors(n); 
    const exponents = Object.values(factors);
    if(exponents.length === 1) return exponents[0] > 1;
    return computeGCD(exponents) > 1; // if all exponents > 1, n is perfect power
}

function isAchilles(n) {
    if( n === 1 ) return false;
    const factors = primeFactors(n);
    if ( Math.min(...Object.values(factors)) < 2 ) return false;
    return !isPerfectPower(n);
}

// Main function: remove the Achilles number(s) from the array.
function slayAchilles(arr) {
    return arr.filter(n => !isAchilles(n));
}