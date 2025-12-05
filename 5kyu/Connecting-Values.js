/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5562aa03004710f3ab0001d5/
/* ========== ========== ========== ========== ========== ==========*/
/*
Connecting Values

Description:
Given a two-dimensional array of non negative integers arr, a value val, and a coordinate coord in the form (row, column), return an iterable (depending on the language) of all of the coordinates that contain the given value and are connected to the original coordinate by the given value. Connections may be made horizontally, vertically, and diagonally. If the value of arr at coord is not equal to val, return an empty iterable. The coordinates must include the original coordinate and may be in any order.
Examples:

With the following array:

    [1,0,2,0,2,1]
    [1,0,2,1,5,7]
    [4,1,1,0,1,9]

With val 1 and coord (0, 0), the output should contain (the order doesn't matter and the actual data structure depends on the language):

[(2, 4), (2, 1), (0, 0), (2, 2), (1, 0), (1, 3)]

With value 2 and coord (0,  2):

[(0, 2), (1, 2)]

With value 0 and coord (0, 0), the output should be empty.

*/

// Solution
function connectedValues(arr, val, coord) {
	const [initR, initC] = coord;
	if (arr[initR][initC] !== val) return [];

	const rows = arr.length;
	const cols = arr[0].length;

	const result = [];
	const visited = new Set();
	const stack = [[initR, initC]];

	const directions = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	while (stack.length) {
		const [r, c] = stack.pop();
		const key = `${r}${c}`;
		if (visited.has(key)) continue;
		visited.add(key);
		result.push([r, c]);

		for (const [dr, dc] of directions) {
			const nr = r + dr;
			const nc = c + dc;
			if (
				nr >= 0 &&
				nr < rows &&
				nc >= 0 &&
				nc < cols &&
				arr[nr][nc] === val &&
				!visited.has(`${nr}${nc}`)
			) {
				stack.push([nr, nc]);
			}
		}
	}
	return result;
}

// Test Codes
const deepEqual = (a, b) => {
	if (a === b) return true;

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		return a.every((val, i) => deepEqual(val, b[i]));
	}

	if (typeof a === 'object' && typeof b === 'object') {
		if (a === null || b === null) return false;
		const keysA = Object.keys(a);
		const keysB = Object.keys(b);
		if (keysA.length !== keysB.length) return false;
		return keysA.every((k) => deepEqual(a[k], b[k]));
	}

	return false;
};

const test = (actual, expected) => {
	if (deepEqual(actual, expected)) console.log('✅ PASS');
	else console.log(`❌ FAIL : ${actual} is expected to match ${expected}`);
};

let exampleArr = [
	[1, 0, 2, 0, 2, 1],
	[1, 0, 2, 1, 5, 7],
	[4, 1, 1, 0, 1, 9],
];
test(connectedValues(exampleArr, 1, [0, 0]).sort(), [
	[0, 0],
	[1, 0],
	[1, 3],
	[2, 1],
	[2, 2],
	[2, 4],
]);
test(connectedValues(exampleArr, 2, [0, 2]).sort(), [
	[0, 2],
	[1, 2],
]);
test(connectedValues(exampleArr, 0, [0, 0]), []);

var arr1 = [
	[0, 0, 0, 1, 3, 4, 0, 3],
	[0, 2, 0, 0, 2, 0, 0, 5],
	[0, 0, 0, 2, 0, 1, 1, 1],
	[2, 3, 4, 1, 3, 1, 0, 0],
	[0, 1, 5, 1, 6, 0, 2, 0],
	[2, 0, 2, 3, 1, 1, 1, 1],
	[2, 0, 2, 3, 1, 1, 1, 1],
];

test(connectedValues(arr1, 0, [4, 2]), []);
test(connectedValues(arr1, 2, [1, 1]), [[1, 1]]);
var ans1 = [
	[0, 0],
	[0, 1],
	[0, 2],
	[0, 6],
	[1, 0],
	[1, 2],
	[1, 3],
	[1, 5],
	[1, 6],
	[2, 0],
	[2, 1],
	[2, 2],
	[2, 4],
];
test(connectedValues(arr1, 0, [0, 0]).sort(), ans1);
