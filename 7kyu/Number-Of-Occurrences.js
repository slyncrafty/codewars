/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52829c5fe08baf7edc00122b
/* ========== ========== ========== ========== ========== ==========*/
/*
Number Of Occurrences

Description:
Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).
Examples

var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;

*/

// Solution
Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
	value: function numberOfOccurrences(element) {
		return this.filter((e) => e === element).length;
	},
	writable: false,
});

// Test Codes
const strictEqual = (a, b, msg) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed', msg);
};
var arr = [0, 1, 2, 2, 3];

strictEqual(
	arr.slice().numberOfOccurrences(0),
	1,
	`Incorrect answer for 0, arr = [0, 1, 2, 2, 3]`,
);
strictEqual(
	arr.slice().numberOfOccurrences(4),
	0,
	`Incorrect answer for 4, arr = [0, 1, 2, 2, 3]`,
);
strictEqual(
	arr.slice().numberOfOccurrences(2),
	2,
	`Incorrect answer for 2, arr = [0, 1, 2, 2, 3]`,
);
strictEqual(
	arr.slice().numberOfOccurrences(3),
	1,
	`Incorrect answer for 3, arr = [0, 1, 2, 2, 3]`,
);
