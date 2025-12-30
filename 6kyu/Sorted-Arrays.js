/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56f2d43fe40b70a442000f26
/* ========== ========== ========== ========== ========== ==========*/
/*
Sorted Arrays

Description:
Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value

Be mindful of performance.

*/

// Solution
function nthSmallest(...args) {
	const n = args.pop();
	const all = args.flat();
	all.sort((a, b) => a - b);
	return all[n - 1];
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};
function doTest(arrays, n, expected) {
	const log = `for arguments:\n${arrays
		.map((array) => JSON.stringify(array))
		.join(', ')}, ${n}\n`;
	const actual = nthSmallest(...arrays, n);
	strictEqual(actual, expected, log);
}

doTest([[2, 4, 6, 8, 10, 12]], 5, 10);
doTest([[2, 2, 2, 2, 2]], 3, 2);
doTest(
	[
		[2, 8, 12],
		[4, 6, 10],
	],
	5,
	10
);
doTest([[1, 5], [2], [4, 8, 9]], 4, 5);
doTest([[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7, 7);
