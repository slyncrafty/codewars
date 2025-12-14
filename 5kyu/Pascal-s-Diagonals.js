/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/576b072359b1161a7b000a17
/* ========== ========== ========== ========== ========== ==========*/
/*
Pascal's Diagonals

Description:
Create a function that returns an array containing the first l numbers from the nth diagonal of Pascal's triangle.

n = 0 should generate the first diagonal of the triangle (the ones).
The first number in each diagonal should be 1.
If l = 0, return an empty array.
Both n and l will be non-negative integers in all test cases.

*/

// Solution
function generateDiagonal(n, l) {
	if (l === 0) return [];
	const result = [];
	let val = 1;
	for (let k = 0; k < l; k++) {
		result.push(val);
		val = (val * (n + k + 1)) / (k + 1);
	}
	return result;
}

// Test Codes
const deepEqual = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('✅PASS');
	else console.log('❌FAILED');
};

deepEqual(generateDiagonal(2, 5), [1, 3, 6, 10, 15]);
deepEqual(generateDiagonal(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
deepEqual(generateDiagonal(3, 7), [1, 4, 10, 20, 35, 56, 84]);
