/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a62da60d39ec5d947000093
/* ========== ========== ========== ========== ========== ==========*/
/*
Squares in a Rectangle

Description:
A rectangle can be split up into a grid of 1x1 squares, the amount of which being equal to the product of the two dimensions of the rectangle. Depending on the size of the rectangle, that grid of 1x1 squares can also be split up into larger squares, for example a 3x2 rectangle has a total of 8 squares, as there are 6 distinct 1x1 squares, and two possible 2x2 squares. A 4x3 rectangle contains 20 squares.

Your task is to write a function that returns the total number of squares for any given rectangle, the dimensions of which being given as two integers with the first always being equal to or greater than the second.

*/

// Solution
function findSquares(x, y, memo = {}) {
	const key = `${x},${y}`;
	if (key in memo) return memo[key];

	if (y === 0) return 0;

	let count = 0;
	for (let size = 1; size <= y; size++) {
		count += x - size + 1;
	}

	memo[key] = count + findSquares(x, y - 1, memo);
	return memo[key];
}

// Test Codes
const assertEquals = (actual, expected) => {
	const ok = actual === expected;
	if (ok) console.log('✅ PASS');
	else console.log('❌ FAIL:', actual, 'expected to match', expected);
};

assertEquals(findSquares(3, 2), 8);
assertEquals(findSquares(4, 3), 20);
assertEquals(findSquares(11, 4), 100);
