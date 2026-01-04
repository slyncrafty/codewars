/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/51edd51599a189fe7f000015/
/* ========== ========== ========== ========== ========== ==========*/
/*
Mean Square Error

Description:
Complete the function that

    accepts two integer arrays of equal length
    compares the value each member in one array to the corresponding member in the other
    squares the absolute value difference between those two values
    and returns the average of those squared absolute value difference between each member pair.

Examples

[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]    
*/

// Solution
const solution = function (firstArray, secondArray) {
	return (
		firstArray
			.map((e, i) => Math.pow(Math.abs(e - secondArray[i]), 2))
			.reduce((a, c) => a + c) / firstArray.length
	);
};

// Test Codes
const assertApproximately = (actual, expected, tolerance, message = '') => {
	if (typeof actual !== 'number' || typeof expected !== 'number') {
		throw new Error(
			message + `Expected numbers but got ${actual} and ${expected}`
		);
	}

	if (Math.abs(actual - expected) > tolerance) {
		throw new Error(
			message + `Expected ${expected} ± ${tolerance}, but got ${actual}`
		);
	} else console.log('✅PASSED');
};

function tester(arr1, arr2, expected) {
	const TOLERANCE = 1e-9;
	const err_msg = `Failed for inputs:\n- arr1: ${JSON.stringify(
		arr1
	)}\n- arr2: ${JSON.stringify(arr2)}\n`;

	assertApproximately(solution(arr1, arr2), expected, TOLERANCE, err_msg);
}

tester([1, 2, 3], [4, 5, 6], 9);
tester([10, 20, 10, 2], [10, 25, 5, -2], 16.5);
tester([0, -1], [-1, 0], 1);
