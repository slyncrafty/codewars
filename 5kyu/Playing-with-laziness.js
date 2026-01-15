/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5516b80d891547c9b50007fd
/* ========== ========== ========== ========== ========== ==========*/
/*
Playing with laziness

Description:
Given the following function definition, we can construct infinite 2 dimensional matrices that are infinite in both dimensions.

type Matrix = [[Bool]]

generate :: Int -> Int -> Matrix
generate n m =
  let falses = repeat False
      oneTrue = replicate m False ++ [ True ] ++ falses
  in replicate n falses ++ [oneTrue] ++ repeat falses

This generates a matrix where every element is False except the one under indices n, m. Write a function that takes such a matrix and returns the pair of indices where the matrix is True.

For JavaScript: The kata is implemented via ES6 proxies in the preloaded function generate:

You can use mat[j][i] normally to access "matrix" elements, which will be all false except when j = m and i = n. However, proxies behave entirely differently from arrays, so regular array methods will not work at all.

*/
const generate = (m, n) => {
	var hithandler = {
		get: (_, col) => (col == n ? true : false),
		set: () => false,
	};
	var misshandler = {
		get: () => false,
		set: () => false,
	};
	var hit = new Proxy({}, hithandler);
	var miss = new Proxy({}, misshandler);

	var rowhandler = {
		get: (_, row) => (row == m ? hit : miss),
		set: () => false,
	};
	var p = new Proxy({}, rowhandler);
	return p;
};

// Solution
function findTrue(mat) {
	for (let sum = 0; ; sum++) {
		for (let row = 0; row <= sum; row++) {
			const col = sum - row;
			if (mat[row][col] === true) {
				return [row, col];
			}
		}
	}
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};
	if (equal(actual, expected)) console.log('✅PASSED');
	else console.log('❌FAILED');
};

let mat = generate(0, 10);
deepEqual(findTrue(mat), [0, 10]);
mat = generate(1, 10);
deepEqual(findTrue(mat), [1, 10]);
