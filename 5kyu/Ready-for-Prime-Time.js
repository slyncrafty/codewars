/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/521ef596c106a935c0000519
/* ========== ========== ========== ========== ========== ==========*/
/*
(Ready for) Prime Time

Description:
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example,

11 => [2, 3, 5, 7, 11]

*/

// Solution
function prime(num) {
	if (num < 2) return [];
	const sieve = new Array(num + 1).fill(true);
	sieve[0] = sieve[1] = false;
	for (let i = 2; i * i <= num; i++) {
		if (sieve[i]) {
			for (let j = i * i; j <= num; j += i) {
				sieve[i] = false;
			}
		}
	}

	const primes = [];
	for (let i = 2; i <= num; i++) {
		if (sieve[i]) primes.push(i);
	}
	return primes;
}

// Test Codes
const deepEqual = (a, b) => {
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('✅PASS');
	else console.log('❌FAILED.', `${a} expected to match ${b}`);
};
deepEqual(prime(0), []);
deepEqual(prime(1), []);
deepEqual(prime(2), [2]);
deepEqual(prime(11), [2, 3, 5, 7, 11]);
deepEqual(prime(23), [2, 3, 5, 7, 11, 13, 17, 19, 23]);
