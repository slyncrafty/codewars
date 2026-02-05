/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52dd72494367608ac1000416
/* ========== ========== ========== ========== ========== ==========*/
/*
Prime Numbers

Description:
Preface

A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

A more detailed description of prime numbers can be found at: http://en.wikipedia.org/wiki/Prime_number
The Problem

You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)
isPrime(number)

Should return boolean true if prime, otherwise false
getPrimes(start, finish)

Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.
Sample Input:

isPrime(number):

isPrime(0); // === false
isPrime(1); // === false
isPrime(2); // === true
isPrime(3); // === true
isPrime(4); // === false
isPrime(5); // === true 

getPrimes(start, finish):

getPrimes(0, 0); // === []
getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

*/

// Solution
function isPrime(number) {
	if (number <= 1) return false;
	if (number === 2) return true;
	if (number % 2 === 0) return false;
	const limit = Math.sqrt(number);
	for (let i = 3; i <= limit; i += 2) {
		if (number % i === 0) return false;
	}
	return true;
}

function getPrimes(start, finish) {
	let s = Math.min(start, finish);
	let f = Math.max(start, finish);
	const result = [];
	for (let i = s; i <= f; i++) {
		if (isPrime(i)) {
			result.push(i);
		}
	}
	return result;
}

// Test Codes
const assertEquals = (actual, expected) => {
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
assertEquals(isPrime(0), false);
assertEquals(isPrime(1), false);
assertEquals(isPrime(2), true);
assertEquals(isPrime(3), true);
assertEquals(isPrime(4), false);
assertEquals(isPrime(5), true);

assertEquals(getPrimes(0, 0).join(), '');
assertEquals(getPrimes(0, 30).join(), '2,3,5,7,11,13,17,19,23,29');
assertEquals(getPrimes(30, 0).join(), '2,3,5,7,11,13,17,19,23,29');
