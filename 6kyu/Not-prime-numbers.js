/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a9a70cf5084d74ff90000f7
/* ========== ========== ========== ========== ========== ==========*/
/*
Not prime numbers

Description:
You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.
*/

// Solution
function notPrimes(a, b) {
	const result = [];
	const allowed = new Set(['2', '3', '5', '7']);
	for (let i = a; i < b; i++) {
		if (![...String(i)].every((e) => allowed.has(e))) continue;
		if (!isPrime(i)) result.push(i);
	}
	return result;
}

const isPrime = (n) => {
	if (n <= 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0) return false;
	}
	return true;
};

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};
	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

deepEqual(notPrimes(2, 222), [22, 25, 27, 32, 33, 35, 52, 55, 57, 72, 75, 77]);
deepEqual(
	notPrimes(2700, 3000),
	[
		2722, 2723, 2725, 2727, 2732, 2733, 2735, 2737, 2752, 2755, 2757, 2772,
		2773, 2775,
	],
);
deepEqual(
	notPrimes(500, 999),
	[
		522, 525, 527, 532, 533, 535, 537, 552, 553, 555, 572, 573, 575, 722, 723,
		725, 732, 735, 737, 752, 753, 755, 772, 775, 777,
	],
);
deepEqual(
	notPrimes(999, 2500),
	[
		2222, 2223, 2225, 2227, 2232, 2233, 2235, 2252, 2253, 2255, 2257, 2272,
		2275, 2277, 2322, 2323, 2325, 2327, 2332, 2335, 2337, 2352, 2353, 2355,
		2372, 2373, 2375,
	],
);
