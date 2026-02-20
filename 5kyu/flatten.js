/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
flatten()

Description:
For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) ==> [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, 666, [[4], ['c']]) ==> ['a', 'b', 2, 3, 666, 4, 'c']
*/

// Solution
function flatten(...args) {
	const res = [];
	const flat = (v) => {
		if (Array.isArray(v)) v.forEach(flat);
		else res.push(v);
	};

	args.forEach(flat);
	return res;
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) {
			return true;
		} else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed', actual, 'expected to equal', expected);
};

deepEqual(flatten([1, [2, 3], 4, 5, [6, [7, [8]]]]), [1, 2, 3, 4, 5, 6, 7, 8]);
deepEqual(flatten([[[[[[1]]]]], ['a', [3, ['b']]], null, 5, 'c']), [
	1,
	'a',
	3,
	'b',
	null,
	5,
	'c',
]);
