/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5bc027fccd4ec86c840000b7
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple sum of pairs

Description:
Given an integer n, find two integers a and b such that:

A) a >= 0 and b >= 0
B) a + b = n
C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.  

You will return the digitSum(a) + digitsum(b).

For example:
solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.

n will not exceed 10e10.
*/

// Solution
function solve(n) {
	const s = n.toString();
	const a = Number('9'.repeat(s.length - 1));
	const b = n - a;
	const digitSum = (x) =>
		x
			.toString()
			.split('')
			.reduce((acc, curr) => acc + Number(curr), 0);
	return digitSum(a) + digitSum(b);
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};
assertEquals(solve(29), 11);
assertEquals(solve(45), 18);
assertEquals(solve(50000000), 68);
assertEquals(solve(15569047737), 144);
assertEquals(solve(2452148459), 116);
assertEquals(solve(1140), 33);
assertEquals(solve(18), 18);
assertEquals(solve(7019), 35);
assertEquals(solve(1), 1);
assertEquals(solve(0), 0);
