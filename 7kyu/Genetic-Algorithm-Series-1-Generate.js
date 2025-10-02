/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/genetic-algorithm-series-number-1-generate
/* ========== ========== ========== ========== ========== ==========*/
/*
Genetic Algorithm Series - #1 Generate

Description:
A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we need to generate random binary strings with a specified length.

In this kata you have to implement a function generate that receives a length and has to return a random binary string with length characters.

Example:

Generate a chromosome with length of 4 generate(4) could return the chromosome 0010, 1110, 1111... or any of 2^4 possibilities.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/

// Solution
const generate = (length) => {
	let result = '';
	for (let i = 0; i < length; i++) {
		const digit = Math.random() < 0.5 ? 0 : 1;
		result += String(digit);
	}
	return result;
};

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect!', a, b);
};
strictEqual(generate(0).length, 0);
strictEqual(generate(1).length, 1);
strictEqual(generate(16).length, 16);
strictEqual(generate(32).length, 32);
strictEqual(generate(64).length, 64);
strictEqual(generate(10000).length, 10000);
strictEqual(generate(10000000).length, 10000000);
