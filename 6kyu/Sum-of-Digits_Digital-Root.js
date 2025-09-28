/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/541c8630095125aba6000c00
/* ========== ========== ========== ========== ========== ==========*/
/*
Sum of Digits / Digital Root

Description:

Digital root is the recursive sum of all the digits in a number.(https://en.wikipedia.org/wiki/Digital_root)

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

// Solution
function digitalRoot(n) {
	while (n >= 10) {
		let sum = 0;
		while (n > 0) {
			sum += n % 10;
			n = Math.floor(n / 10);
		}
		n = sum;
	}
	return n;
}

// (digital root of n is 1 + (n-1) % 9)
function digitalRoot(n) {
	return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect', a, b);
};
strictEqual(digitalRoot(16), 7);
strictEqual(digitalRoot(456), 6);
