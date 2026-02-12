/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/557dd2a061f099504a000088
/* ========== ========== ========== ========== ========== ==========*/
/*
LinkedList -> Array

Description:
Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

Here's an example of a list:

{value: 1, next: {value: 2, next: {value: 3, next: null}}}

Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

[1, 2, 3]

Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

*/

// Solution
function listToArray(list) {
	if (list === null) return [];
	return [list.value, ...listToArray(list.next)];
}

// Test Codes
const deepEqual = (actual, expected) => {
	if (JSON.stringify(actual) === JSON.stringify(expected))
		console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

const lists = [
	{ value: 1, next: { value: 2, next: { value: 3, next: null } } },
	{ value: 'string', next: null },
	{
		value: true,
		next: {
			value: false,
			next: { value: 'true', next: { value: 'false', next: null } },
		},
	},
	{
		value: 1,
		next: {
			value: 1,
			next: {
				value: 1,
				next: { value: 1, next: { value: 1, next: { value: 1, next: null } } },
			},
		},
	},
];

deepEqual(listToArray(lists[0]), [1, 2, 3]);
deepEqual(listToArray(lists[1]), ['string']);
deepEqual(listToArray(lists[2]), [true, false, 'true', 'false']);
deepEqual(listToArray(lists[3]), [1, 1, 1, 1, 1, 1]);
