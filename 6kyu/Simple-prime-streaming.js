/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a908da30025e995880000e3
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple prime streaming

Description:
Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

"2357111317192329313741434753596167717379..."

You will be given two numbers: a and b, and your task will be to return b elements starting from index a in this sequence.

For example:
solve(10,5) == `19232` Because these are 5 elements from index 10 in the sequence.

Tests go up to about index 20000.:
*/

// Solution
function solve(a, b) {
	let result = '';
	let i = 2;
	while (result.length < a + b) {
		if (isPrime(i)) result += `${i}`;
		i++;
	}
	return result.slice(a, a + b);
}

const isPrime = (n) => {
	if (n <= 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	const limit = Math.sqrt(n);
	for (let i = 3; i <= limit; i += 2) {
		if (n % i === 0) return false;
	}
	return true;
};

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed', a, 'expected to match', b);
};
strictEqual(solve(2, 2), '57');
strictEqual(solve(10, 3), '192');
strictEqual(solve(20, 9), '414347535');
strictEqual(solve(30, 12), '616771737983');
strictEqual(solve(40, 8), '83899710');
strictEqual(solve(50, 6), '031071');
strictEqual(solve(10000, 5), '02192');
strictEqual(solve(20000, 5), '09334');
