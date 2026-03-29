/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Squeaky Clean

Description:
Write a solution to cleanup arrays. This can exist entirely in the squeakyClean function or contain multiple helper functions.

Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

Example:

var originalArray = ['click1','click2',null,'','','submitForm'];

the solution you write should return this:

var cleanedArray = ['click1', 'click2','submitForm'] 

*/

// Solution
function squeakyClean(arr) {
	return arr.filter((e) => e && e !== 0);
}

// Test Codes
function testArray(testType, testMsg, testInput, testOutput) {
	const deepEqual = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => deepEqual(e, b[i]));
		}
	};
	if (deepEqual(squeakyClean(testInput), testOutput))
		console.log('✅Test Passed');
	else console.log('❌Test Failed');
}

testArray(
	'Testing Valid Values',
	'should not filter out non-zero numbers',
	[1, 2, 3, -1, 1.1],
	[1, 2, 3, -1, 1.1],
);
testArray(
	'Testing Valid Values',
	'should not filter out non-empty strings',
	['hello', '14'],
	['hello', '14'],
);
