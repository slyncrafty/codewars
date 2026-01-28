/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Backwards Read Primes

Description:
Backwards-read-primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:

13 17 31 37 71 73

13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.
Task

Find all Backwards-read-primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.
Examples (in general form):

(start = 2, end = 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
(start = 9900, end = 10000) => [9923, 9931, 9941, 9967]
(start = 501, end = 599) => []

*/

// Solution
function backwardsPrime(start, stop) {
	const result = [];
	for (let i = start; i <= stop; i++) {
		if (isPrime(i)) {
			const r = reverseNumber(i);
			if (i !== r && isPrime(r)) result.push(i);
		}
	}
	return result;
}

const reverseNumber = (n) => {
	let r = 0;
	while (n > 0) {
		r = r * 10 + (n % 10);
		n = Math.floor(n / 10);
	}
	return r;
};

const isPrime = (n) => {
	if (n < 2) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;

	const limit = Math.sqrt(n);
	for (let i = 3; i <= limit; i++) {
		if (n % i === 0) return false;
	}
	return true;
};

// Test Codes
const assertSimilar = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed', actual, 'expected to equal', expected);
};

assertSimilar(backwardsPrime(2, 100), [13, 17, 31, 37, 71, 73, 79, 97]);
assertSimilar(backwardsPrime(9900, 10000), [9923, 9931, 9941, 9967]);
assertSimilar(backwardsPrime(501, 599), []);
