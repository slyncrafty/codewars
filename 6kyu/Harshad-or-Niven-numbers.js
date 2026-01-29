/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54a0689443ab7271a90000c6
/* ========== ========== ========== ========== ========== ==========*/
/*
Harshad or Niven numbers

Description:
Harshad numbers (also called Niven numbers) are positive numbers that can be divided (without remainder) by the sum of their digits.

For example, the following numbers are Harshad numbers:

    10, because 1 + 0 = 1 and 10 is divisible by 1
    27, because 2 + 7 = 9 and 27 is divisible by 9
    588, because 5 + 8 + 8 = 21 and 588 is divisible by 21

While these numbers are not:

    19, because 1 + 9 = 10 and 19 is not divisible by 10
    589, because 5 + 8 + 9 = 22 and 589 is not divisible by 22
    1001, because 1 + 1 = 2 and 1001 is not divisible by 2

Harshad numbers can be found in any number base, but we are going to focus on base 10 exclusively.
Your task

Your task is to complete the skeleton Harshad object ("static class") which has 3 functions:

    isValid() that checks if n is a Harshad number or not
    getNext() that returns the next Harshad number > n
    getSerie() that returns a series of n Harshad numbers, optional start value not included

You do not need to care about the passed parameters in the test cases, they will always be valid integers (except for the start argument in getSerie() which is optional and should default to 0).

Note: only the first 2000 Harshad numbers will be checked in the tests.
Examples

Harshad.isValid(1)         ==>  true
Harshad.getNext(0)         ==>  1
Harshad.getSerie(3)        ==>  [ 1, 2, 3 ]
Harshad.getSerie(3, 1000)  ==>  [ 1002, 1008, 1010 ]

*/

// Solution
/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = (function () {
	'use strict';

	return {
		/**
		 * Returns true when the given number is a valid Harshad number.
		 *
		 * @param {Number} number The given number
		 * @returns {Boolean}
		 * @function Harshad.isValid
		 */
		isValid: function (number) {
			return number !== 0 && number % this.getDigitSum(number) === 0;
		},

		getDigitSum: function (number) {
			let sum = 0;
			let remainder;
			while (number) {
				sum = sum + (number % 10);
				number = Math.floor(number / 10);
			}
			return sum;
		},
		/**
		 * Gets the next Harshad number after the given number.
		 *
		 * @param {Number} number The given number
		 * @returns {Number}
		 * @function Harshad.getNext
		 */
		getNext: function (number) {
			for (let i = 1; ; i++) {
				if (this.isValid(number + i)) return number + i;
			}
		},
		/**
		 * Returns the suite of Harshad numbers, starting after a given number.
		 *
		 * @param {Number} count The number of elements to return
		 * @param {Number} start The number after which the serie should start;
		 *  defaults to 0
		 * @returns {Array}
		 * @function Harshad.getSerie
		 */
		getSerie: function (count, start = 0) {
			let serie = [];
			let next = start;
			while (serie.length < count) {
				next = this.getNext(next);
				serie.push(next);
			}
			return serie;
		},
	};
})();

// Test Codes
function expect(condition) {
	if (!condition) {
		throw new Error('❌Failed');
	}
	console.log('✅Test Passed');
}

function assertEquals(actual, expected) {
	if (actual === expected) console.log('✅Test Passed');
	else throw new Error('❌Test Failed');
}

function assertSimilar(actual, expected) {
	const a = JSON.stringify(actual);
	const e = JSON.stringify(expected);
	assertEquals(a, e);
}

expect(typeof Harshad === 'object');
expect(typeof Harshad.isValid === 'function');
expect(typeof Harshad.getNext === 'function');
expect(typeof Harshad.getSerie === 'function');

expect(Harshad.isValid(1) === true);
expect(Harshad.isValid(18) === true);
expect(Harshad.isValid(19) === false);

assertEquals(Harshad.getNext(1), 2);
assertEquals(Harshad.getNext(18), 20);
assertEquals(Harshad.getNext(1000), 1002);

assertSimilar(Harshad.getSerie(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertSimilar(
	Harshad.getSerie(20),
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],
);
assertSimilar(
	Harshad.getSerie(10, 1000),
	[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020],
);
