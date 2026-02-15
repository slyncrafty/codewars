/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/
/* ========== ========== ========== ========== ========== ==========*/
/*
+1 Array

Description:
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).
Examples

Valid arrays

    [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
    [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
    [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
    [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)

Invalid arrays

    [] is invalid because it is empty
    [1, -9] is invalid because -9 is not a non-negative integer
    [1, 2, 33] is invalid because 33 is not a single-digit integer

*/

// Solution
function upArray(arr) {
	if (!Array.isArray(arr) || arr.length === 0) return null;
	if (!arr.every((n) => Number.isInteger(n) && n >= 0 && n <= 9)) return null;

	let res = arr.slice();
	let i = arr.length - 1;
	res[i]++;

	while (i > 0 && res[i] === 10) {
		res[i] = 0;
		res[i - 1]++;
		i--;
	}
	if (res[0] === 10) {
		res[0] = 0;
		res.unshift(1);
	}
	return res;
}

// Test Codes
const sameOrderedMembers = (actual, expected) => {
	const equal = (a, b) => {
		if (!Array.isArray(actual)) return false;
		return JSON.stringify(actual) === JSON.stringify(expected);
	};
	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

sameOrderedMembers(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
sameOrderedMembers(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
sameOrderedMembers(upArray([9, 9]), [1, 0, 0]);
sameOrderedMembers(upArray([0, 7]), [0, 8]);
sameOrderedMembers(
	upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
);
const isNull = (actual) => {
	let check = actual === null;
	if (check) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
isNull(upArray([1, -9]));
isNull(upArray([1, 10]));
