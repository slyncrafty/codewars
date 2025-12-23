/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/525a566985a9a47bc8000670/
/* ========== ========== ========== ========== ========== ==========*/
/*
Rotate an array matrix

Description:
*/

// Solution
function rotate(matrix, direction) {
	const rows = matrix.length;
	const cols = matrix[0].length;

	const matrixT = Array.from({ length: cols }, (_, c) =>
		Array.from({ length: rows }, (_, r) => matrix[r][c])
	);
	if (direction === 'clockwise') return matrixT.map((row) => row.reverse());
	if (direction === 'counter-clockwise') return matrixT.reverse();
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((v, i) => equal(v, b[i]));
		}
		return false;
	};

	const ok = equal(actual, expected);
	if (ok) console.log('✅ PASS');
	else console.log('❌ FAIL:', actual, 'expected to match', expected);
};

// Test a matrix with equal numbers of rows/cols
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
deepEqual(rotate(matrix, 'counter-clockwise'), [
	[3, 6, 9],
	[2, 5, 8],
	[1, 4, 7],
]);
deepEqual(rotate(matrix, 'clockwise'), [
	[7, 4, 1],
	[8, 5, 2],
	[9, 6, 3],
]);
deepEqual(rotate(rotate(matrix, 'counter-clockwise'), 'clockwise'), [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
deepEqual(
	rotate(
		rotate(rotate(rotate(matrix, 'clockwise'), 'clockwise'), 'clockwise'),
		'clockwise'
	),
	[
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]
);

// Test a matrix with unequal number of rows/cols
matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[10, 11, 12],
];
deepEqual(rotate(matrix, 'counter-clockwise'), [
	[3, 6, 9, 12],
	[2, 5, 8, 11],
	[1, 4, 7, 10],
]);
deepEqual(rotate(matrix, 'clockwise'), [
	[10, 7, 4, 1],
	[11, 8, 5, 2],
	[12, 9, 6, 3],
]);

// Test a matrix with only one row/col
matrix = [[1, 2, 3]];
deepEqual(rotate(matrix, 'counter-clockwise'), [[3], [2], [1]]);
deepEqual(rotate(matrix, 'clockwise'), [[1], [2], [3]]);
deepEqual(rotate(rotate(matrix, 'clockwise'), 'clockwise'), [[3, 2, 1]]);

// Test a single cell matrix
matrix = [[1]];
deepEqual(rotate(matrix, 'counter-clockwise'), [[1]]);
