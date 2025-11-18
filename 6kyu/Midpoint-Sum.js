/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54d3bb4dfc75996c1c000c6d
/* ========== ========== ========== ========== ========== ==========*/
/*
Midpoint Sum

Description:
For a given list of integers, return the index of the element where the sums of the integers to the left and right of the current element are equal.

Ex:

ints = [4, 1, 7, 9, 3, 9]
# Since 4 + 1 + 7 = 12 and 3 + 9 = 12, the returned index would be 3

ints = [1, 0, -1]
# Returns None/nil/undefined/etc (depending on the language) as there
# are no indices where the left and right sums are equal

Here are the 2 important rules:

    The element at the index to be returned is not included in either of the sum calculations!
    Both the first and last index cannot be considered as a "midpoint" (So None for [X] and [X, X]) ```if:python
    For python, return -1 if there exists no such index ```

*/

// Solution
const midpointSum = function (n) {
	if (n.length < 3) return null;
	for (let i = 1; i < n.length - 1; i++) {
		const leftSum = n.slice(0, i).reduce((a, c) => a + c, 0);
		const rightSum = n.slice(i + 1).reduce((a, c) => a + c, 0);
		if (leftSum === rightSum) return i;
	}
	return null;
};

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};

strictEqual(
	midpointSum([4, 1, 7, 9, 3, 9]),
	3,
	'[4,1,7,9,3,9] should return 3'
);
strictEqual(midpointSum([1, 0, 1]), 1, '[1,0,1] should equal 1');
strictEqual(midpointSum([9, 0, 1, 2, 3, 4]), 2, '[9,0,1,2,3,4] should equal 2');
strictEqual(midpointSum([0, 0, 4, 0]), 2, '[0,0,4,0] should equal 2');
strictEqual(
	midpointSum([-10, 3, 7, 8, -6, -13, 21]),
	4,
	'[-10,3,7,8,-6,-13,21] should equal 4'
);
strictEqual(
	midpointSum([
		1, 1, 1, 1, -5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	]),
	52,
	'Large valid sequence: [1,1,1,1,-5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] should equal 52'
);
