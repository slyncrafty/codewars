/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56d9439813f38853b40000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Convert an array of strings to array of numbers

Description:
Oh no!

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

// Solution
function toNumberArray(stringarray) {
	return stringarray.map(parseFloat);
}

// Test Codes
const assertEqual = (a, b) => {
	if (deepEqual(a, b)) console.log('Correct!');
	else console.log('Incorrect!', a, b);
};
const deepEqual = (a, b) => {
	if (a === b) return true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		return a.every((e, i) => deepEqual(e, b[i]));
	}
	return false;
};
assertEqual(toNumberArray(['1.1', '2.2', '3.3']), [1.1, 2.2, 3.3]);
