/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/genetic-algorithm-series-number-2-mutation
/* ========== ========== ========== ========== ========== ==========*/
/*
Genetic Algorithm Series - #2 Mutation

Description:
Mutation is a genetic operator used to maintain genetic diversity from one generation of a population of genetic algorithm chromosomes to the next.

Mutation

A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and by a given probability it will decide if a mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/

// Solution
const mutate = (chromosome, p) => {
	const probabilityRandom = (e, num) => {
		if (num <= p) return e ^ 1;
		else return e;
	};
	return chromosome
		.split('')
		.map((e) => probabilityRandom(e, Math.random()))
		.join('');
};

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect!', a, b);
};
const zero = Array(10).join('0');
const one = Array(10).join('1');

// '100% mutate'
strictEqual(mutate(zero, 1), one);
strictEqual(mutate(one, 1), zero);

// '0% mutate'
strictEqual(mutate(zero, 0), zero);
strictEqual(mutate(one, 0), one);

// '50% mutate'
console.log(Array.from(mutate(zero, 0.5)).some((x) => x == '1'));
console.log(Array.from(mutate(one, 0.5)).some((x) => x == '1'));
