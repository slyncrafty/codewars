/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58daa7617332e59593000006/
/* ========== ========== ========== ========== ========== ==========*/
/*
Most digits

Description:
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

// Solution
function findLongest(array) {
	let maxLength = 0;
	let resultNumber = array[0];
	for (const num of array) {
		const numString = String(num).replace('.', '').length;
		if (numString > maxLength) {
			maxLength = numString;
			resultNumber = num;
		}
	}
	return resultNumber;
}
//
//
// One liner solution using reduce -- faster
const findLongest = (n) =>
	n.reduce((a, b) =>
		`${b}`.replace('.', '').length > `${a}`.replace('.', '').length ? b : a
	);
//
//
//
// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect!', a, b);
};
assertEquals(findLongest([1, 10, 100]), 100);
assertEquals(findLongest([9000, 8, 800]), 9000);
assertEquals(findLongest([8, 900, 500]), 900);
assertEquals(findLongest([8000, 0.9, 5.001]), 8000);
