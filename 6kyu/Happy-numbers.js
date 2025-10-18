/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5464cbfb1e0c08e9b3000b3e
/* ========== ========== ========== ========== ========== ==========*/
/*
Happy numbers

Description:
A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers) (Wikipedia).

Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.
Examples

For example number 7 is happy because after a number of steps the computed sequence ends up with a 1: 7, 49, 97, 130, 10, 1 

While 3 is not, and would give us an infinite sequence: 3, 9, 81, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...
*/

// Solution
// Using Floyd’s cycle detection (O(1) space)
function isHappy(n) {
	const next = (x) => {
		let sum = 0;
		while (x > 0) {
			let digit = x % 10;
			sum += digit * digit;
			x = (x / 10) | 0;
		}
		return sum;
	};

	let slow = n;
	let fast = next(n);
	while (fast !== 1 && slow !== fast) {
		slow = next(slow);
		fast = next(next(fast));
	}
	return fast === 1;
}

// Test Codes
const tester = (a, b) => {
	if (isHappy(a) === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};
tester(1, true);
tester(7, true);
tester(16, false);
