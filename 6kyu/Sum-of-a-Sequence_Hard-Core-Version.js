/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/sum-of-a-sequence-hard-core-version/
/* ========== ========== ========== ========== ========== ==========*/
/*
Sum of a Sequence [Hard-Core Version]

Description:
The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter:

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4

If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. See the provided test cases for further examples :)

Note: differing from the other base kata, much larger ranges are going to be tested, so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.
*/

// Solution
function sequenceSum(begin, end, step) {
	if ((step > 0 && begin > end) || (step < 0 && begin < end)) return 0;
	if (begin === end) return begin;

	const n = Math.floor((end - begin) / step) + 1;
	const lastNum = begin + step * (n - 1);
	return ((begin + lastNum) * n) / 2;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!', a, b);
};
strictEqual(sequenceSum(2, 6, 2), 12);
strictEqual(sequenceSum(1, 5, 1), 15);
strictEqual(sequenceSum(1, 5, 3), 5);
strictEqual(sequenceSum(-1, -5, -3), -5);
strictEqual(sequenceSum(16, 15, 3), 0);
strictEqual(sequenceSum(-24, -2, 22), -26);
strictEqual(sequenceSum(-2, 4, 658), -2);
strictEqual(sequenceSum(780, 68515438, 5), 469436517521190);
strictEqual(sequenceSum(9383, 71418, 2), 1253127200);
strictEqual(sequenceSum(20, 67338879, 5), 453452442295970);
