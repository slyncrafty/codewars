/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple frequency sort

Description:
In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.

*/

// Solution
function solve(arr) {
	const freq = {};
	for (const e of arr) {
		freq[e] = (freq[e] || 0) + 1;
	}
	return arr.sort((a, b) => freq[b] - freq[a] || a - b);
}

// Test Codes
const deepEqual = (a, b) => {
	let ok = false;
	if (a == b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('Correct!');
	else console.log('Incorrect!');
};

deepEqual(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]), [3, 3, 3, 5, 5, 7, 7, 2, 9]);
deepEqual(
	solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]),
	[1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]
);
deepEqual(
	solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]),
	[9, 9, 9, 9, 4, 4, 5, 5, 6, 6]
);
deepEqual(
	solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]),
	[1, 1, 2, 2, 3, 3, 4, 4, 5, 8]
);
deepEqual(
	solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0]),
	[0, 0, 4, 4, 9, 9, 3, 5, 7, 8]
);
