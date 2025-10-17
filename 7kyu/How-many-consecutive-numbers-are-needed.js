/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/559cc2d2b802a5c94700000c/
/* ========== ========== ========== ========== ========== ==========*/
/*
How many consecutive numbers are needed?

Description:
Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.
Example

[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0

*/

// Solution
// not optimal since not guaranteed sorted
function consecutive(array) {
	array.sort((a, b) => a - b);
	const n = array.length;
	if (n < 2) return 0;
	return array[n - 1] - array[0] + 1 - n;
}

function consecutive(array) {
	if (array.length < 2) return 0;
	let min = array[0],
		max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) max = array[i];
		if (array[i] < min) min = array[i];
	}
	return max - min + 1 - array.length;
}

// Test Codes
const strictEqual = (input, b) => {
	const a = consecutive(input);
	if (a === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};
strictEqual([4, 8, 6], 2);
strictEqual([1, 2, 3, 4], 0);
strictEqual([], 0);
strictEqual([1], 0);
