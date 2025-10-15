/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/586f6741c66d18c22800010a/
/* ========== ========== ========== ========== ========== ==========*/
/*
Sum of a sequence

Description:
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

*/

// Solution
// const sequenceSum = (begin, end, step) => {
// 	if (begin > end) return 0;
// 	if (begin === end) return begin;
// 	let sum = 0;
// 	for (let i = begin; i <= end; i += step) {
// 		sum += i;
// 	}
// 	return sum;
// };

const sequenceSum = (begin, end, step) => {
	if (begin > end) return 0;
	if (begin === end) return begin;

	const n = Math.floor((end - begin) / step) + 1;
	const lastNum = begin + (n - 1) * step;
	return ((begin + lastNum) * n) / 2;
};

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.long('Incorrect!', a, b);
};
strictEqual(sequenceSum(2, 6, 2), 12);
strictEqual(sequenceSum(1, 5, 1), 15);
strictEqual(sequenceSum(1, 5, 3), 5);
strictEqual(sequenceSum(0, 15, 3), 45);
strictEqual(sequenceSum(16, 15, 3), 0);
strictEqual(sequenceSum(2, 24, 22), 26);
