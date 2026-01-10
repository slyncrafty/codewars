/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55e0a2af50adf50699000126
/* ========== ========== ========== ========== ========== ==========*/
/*
Pure odd digits primes

Description:
Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive a positive integer n >= 3, and output a list with three values:

[number pure odd digit primes less than or equal to n, largest pure odd digit prime smaller than or equal to n, smallest pure odd digit prime larger than n]

Let's see some cases:

only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
19, because is the nearest prime of this type to 20
31, is the first pure odd digit that we encounter after 20///

only_oddDigPrimes(40) ----> [9, 37, 53]
only_oddDigPrimes(13) ----> [5, 13, 17]

*/

// Solution
function onlyOddDigPrimes(n) {
	const isPrime = (num) => {
		if (num <= 2) return false;
		if (num % 2 === 0) return false;
		for (let i = 3; i * i <= num; i += 2) {
			if (num % i === 0) return false;
		}
		return true;
	};

	const onlyPureOdd = (num) => {
		for (const d of String(num)) {
			if ((d.charCodeAt(0) - 48) % 2 === 0) return false;
		}
		return true;
	};

	let count = 0;
	let max = null;

	for (let i = 3; i <= n; i += 2) {
		if (isPrime(i) && onlyPureOdd(i)) {
			count++;
			max = i;
		}
	}

	let next = n + 1;
	while (true) {
		if (next % 2 !== 0 && isPrime(next) && onlyPureOdd(next)) break;
		next++;
	}
	return [count, max, next];
}

// Test Codes
let list = [20, 40, 55, 60, 100];
let results = [
	[7, 19, 31],
	[9, 37, 53],
	[10, 53, 59],
	[11, 59, 71],
	[15, 97, 113],
];

const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};
	if (equal(actual, expected)) console.log('✅PASSED');
	else console.log('❌FAILED');
};

function tests(lst, r) {
	for (var i = 0; i < lst.length; i++) {
		deepEqual(onlyOddDigPrimes(lst[i]), r[i]);
	}
	return;
}
tests(list, results);
