/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/
/* ========== ========== ========== ========== ========== ==========*/
/*
Sort array by string length

Description:
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

// Solution
function sortByLength(array) {
	return array.sort((a, b) => a.length - b.length);
}

// Test Codes
const assertDeepEquals = (a, b) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};
	if (equal(a, b)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
assertDeepEquals(sortByLength(['Beg', 'Life', 'I', 'To']), [
	'I',
	'To',
	'Beg',
	'Life',
]);
assertDeepEquals(sortByLength(['', 'Moderately', 'Brains', 'Pizza']), [
	'',
	'Pizza',
	'Brains',
	'Moderately',
]);
assertDeepEquals(sortByLength(['Longer', 'Longest', 'Short']), [
	'Short',
	'Longer',
	'Longest',
]);
