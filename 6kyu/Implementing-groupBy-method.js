/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/53c2c3e78d298dddda000460/
/* ========== ========== ========== ========== ========== ==========*/
/*
Implementing Array.prototype.groupBy method

Description:
Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating a function on each element.

The method should return an object, in which for each different value returned by the function there is a property whose value is the array of elements that return the same value.

If no function is passed, the element itself should be taken.

Example:

[1,2,3,2,4,1,5,1,6].groupBy()
{
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
}

[1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
{
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
}

*/

// Solution
Object.defineProperty(Array.prototype, 'groupBy', {
	value: function groupBy(hashFunc) {
		const fn = typeof hashFunc === 'function' ? hashFunc : (v) => v;
		const result = {};

		for (const v of this) {
			const key = String(fn(v));
			if (!(key in result)) result[key] = [];
			result[key].push(v);
		}
		return result;
	},
});

// Test Codes
function doTest(array, expected, hashFunc) {
	const message = `${JSON.stringify(array)}.groupBy(${(hashFunc || '').toString()})`;
	const actual = hashFunc ? array.groupBy(hashFunc) : array.groupBy();
	deepEqual(actual, expected, message);
}

const deepEqual = (actual, expected, message) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		} else if (typeof a === 'object' && typeof b === 'object') {
			return JSON.stringify(a) === JSON.stringify(b);
		}
		return false;
	};
	console.log(message);
	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed', actual, 'expected equal', expected);
};

doTest([1, 2, 3, 2, 4, 1, 5, 1, 6], {
	1: [1, 1, 1],
	2: [2, 2],
	3: [3],
	4: [4],
	5: [5],
	6: [6],
});
doTest(
	[1, 2, 3, 2, 4, 1, 5, 1, 6],
	{ 0: [3, 6], 1: [1, 4, 1, 1], 2: [2, 2, 5] },
	function mod3(n) {
		return n % 3;
	},
);
doTest(
	[
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
	],
	{
		3: ['one', 'two', 'six', 'ten'],
		4: ['four', 'five', 'nine'],
		5: ['three', 'seven', 'eight'],
	},
	function getLength(xs) {
		return xs.length;
	},
);
