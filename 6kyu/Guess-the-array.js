/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Guess the array

Description:
In this kata, you should determine the values in an unknown array of numbers. You'll be given a function f, which you can call like this:

f(a, b)

where a and b are indexes of two different elements in the unknown array, 1 or 2 indexes apart. f will return the sum of those two elements.

The absolute difference between a and b must not be 0 nor greater than 2 (that is: the chosen indexes must be exactly 1 or 2 apart).

Your goal is to figure out the correct array.

The whole procedure is:

    You are given f and the length of the array n.
    Ask f for any element sums you want.
    Create and return the correct array according to the answers.

The array will always have at least 3 elements.
*/

// Solution
function guess(f, n) {
	const A = new Array(n);

	const S01 = f(0, 1);
	const S12 = f(1, 2);
	const S02 = f(0, 2);

	A[0] = (S01 + S02 - S12) / 2;
	A[1] = S01 - A[0];
	A[2] = S12 - A[1];

	for (let i = 3; i < n; i++) {
		A[i] = f(i - 1, i) - A[i - 1];
	}

	return A;
}

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

function ArrayWrapper(arr) {
	return function (a, b) {
		// Check that both indexes are in range
		if (a < 0 || b < 0 || a >= arr.length || b >= arr.length) {
			throw new RangeError('b is out of range');
		}

		// Must be exactly 1 or 2 apart
		if (Math.abs(a - b) === 0 || Math.abs(a - b) > 2) {
			throw new RangeError('indexes must be 1 or 2 apart');
		}
		return arr[a] + arr[b];
	};
}

let f = ArrayWrapper([2, 3, 3]);
deepEqual(guess(f, 3), [2, 3, 3]);
f = ArrayWrapper([6, 6, 6]);
deepEqual(guess(f, 3), [6, 6, 6]);
f = ArrayWrapper([1, 2, 3, 4, 5, 6, 7]);
deepEqual(guess(f, 7), [1, 2, 3, 4, 5, 6, 7]);
f = ArrayWrapper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
deepEqual(guess(f, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
