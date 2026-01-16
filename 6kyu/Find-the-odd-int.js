/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54da5a58ea159efa38000836
/* ========== ========== ========== ========== ========== ==========*/
/*
Find the odd int

Description:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

// Solution
function findOdd(A) {
	const counts = new Map();
	for (const n of A) {
		counts.set(n, (counts.get(n) || 0) + 1);
	}
	for (const [key, value] of counts) {
		if (value % 2 === 1) {
			return key;
		}
	}
}

// Test Codes
const doTest = (input, expected) => {
	const actual = findOdd(input);
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};

doTest([7], 7);
doTest([0], 0);
doTest([1, 1, 2], 2);
doTest([0, 1, 0, 1, 0], 0);
doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4);
doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
doTest([10], 10);
doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
