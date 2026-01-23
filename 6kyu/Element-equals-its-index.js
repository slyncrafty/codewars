/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5b7176768adeae9bc9000056
/* ========== ========== ========== ========== ========== ==========*/
/*
Element equals its index

Description:
Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.

Your algorithm should be very performant.

[input] array of integers ( with 0-based nonnegative indexing )
[output] integer
Examples:

input: [-8,0,2,5]
output: 2 # since array[2] == 2

input: [-1,0,3,6]
output: -1 # since no index in array satisfies array[index] == index

Random Tests Constraints:

Array length: 200 000

Amount of tests: 1 000

Time limit: 150 ms

*/

// Solution
function indexEqualsValue(a) {
	const n = a.length;
	let left = 0,
		right = n - 1,
		result = -1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (a[mid] === mid) {
			result = mid;
			right = mid - 1;
		} else if (a[mid] < mid) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return result;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅PASSED');
	else console.log('❌FAILED');
};

strictEqual(indexEqualsValue([-8, 0, 2, 5]), 2);
strictEqual(indexEqualsValue([-1, 0, 3, 6]), -1);
strictEqual(indexEqualsValue([-3, 0, 1, 3, 10]), 3);
strictEqual(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]), 1);
strictEqual(indexEqualsValue([9, 10, 11, 12, 13, 14]), -1);
strictEqual(indexEqualsValue([0]), 0);
