/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
/* ========== ========== ========== ========== ========== ==========*/
/*
Find the unique number

Description:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// Solution
function findUniq(arr) {
	const seen = {};
	for (const elem of arr) {
		seen[elem] = (seen[elem] || 0) + 1;
		if (Object.keys(seen).length > 1) {
			const key = Object.keys(seen).filter((key) => seen[key] === 1);
			if (key.length === 1) return Number(key);
		}
	}
	return '';
}

function findUniq(arr) {
	const seen = {};
	for (const x of arr) seen[x] = (seen[x] || 0) + 1;
	for (const x in seen) if (seen[x] === 1) return Number(x);
}

function findUniq(arr) {
	const [a, b, c] = arr;
	const common = a === b ? a : a === c ? a : b;
	for (const x of arr) if (x !== common) return x;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};
strictEqual(findUniq([1, 0, 0]), 1);
strictEqual(findUniq([0, 1, 0]), 1);
strictEqual(findUniq([0, 0, 1]), 1);
strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
