/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56d9439813f38853b40000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Genetic Algorithm Series - #3 Crossover

Description:
In genetic algorithms, crossover is a genetic operator used to vary the programming of chromosomes from one generation to the next.

The one-point crossover consists in swapping one's cromosome part with another in a specific given point. The image bellow shows the crossover being applied on chromosomes 1011011001111 and 1011100100110 with the cut point (index) 4:

In this kata you have to implement a function that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].
Example:

chromosome1 = "111000"
chromosome2 = "000110"
index = 3
# should return ["111110", "000000"]

*/

// Solution
function crossover(chromosome1, chromosome2, index) {
	if (chromosome1 === '' && chromosome2 === '') return ['', ''];
	return [
		chromosome1.slice(0, index) + chromosome2.slice(index),
		chromosome2.slice(0, index) + chromosome1.slice(index),
	];
}

// Test Codes
const deepEqual = (a, b) => {
	let ok = true;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('Correct!');
	else console.error('Incorrect', a, b);
};

for (const { chromosome1, chromosome2, index, expected } of [
	{
		chromosome1: '',
		chromosome2: '',
		index: 0,
		expected: ['', ''],
	},
	{
		chromosome1: '01',
		chromosome2: '10',
		index: 1,
		expected: ['00', '11'],
	},
	{
		chromosome1: '00000000',
		chromosome2: '11111111',
		index: 0,
		expected: ['11111111', '00000000'],
	},
	{
		chromosome1: '00000000',
		chromosome2: '11111111',
		index: 7,
		expected: ['00000001', '11111110'],
	},
]) {
	const actual = crossover(chromosome1, chromosome2, index);
	deepEqual(actual, expected);
}
