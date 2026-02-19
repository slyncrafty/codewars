/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f
/* ========== ========== ========== ========== ========== ==========*/
/*
Twisted Sum

Description:
Find the sum of the digits of all the numbers from 1 to N (both ends included).
Examples

# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

*/

// Solution
const twistedSum = (n) => {
	return Array.from({ length: n }, (_, i) => i + 1).reduce(
		(acc, curr) => acc + [...String(curr)].reduce((a, c) => a + +c, 0),
		0,
	);
};

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
strictEqual(twistedSum(3), 6, 'n = 3');
strictEqual(twistedSum(10), 46, 'n = 10');
strictEqual(twistedSum(11), 48, 'n = 11');
strictEqual(twistedSum(12), 51, 'n = 12');
