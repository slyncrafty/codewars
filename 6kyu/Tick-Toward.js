/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Tick Toward

Description:
Define a function that generates medial values between two coordinates and returns them in an array from start to target. For example, if the starting point is [1,1] and the target point is [3,2] then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. The route should go only through integral coordinates.

Note: you should move diagonally until the path from your current position to the target can be represented as a fully horizontal/vertical line.
Examples:

tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/

// Solution
function tickToward(start, end) {
	const [x1, y1] = start;
	const [x2, y2] = end;
	const res = [[x1, y1]];

	let x = x1;
	let y = y1;

	while (x !== x2 || y !== y2) {
		if (x < x2) x++;
		else if (x > x2) x--;

		if (y < y2) y++;
		else if (y > y2) y--;

		res.push([x, y]);
	}

	return res;
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

	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

deepEqual(tickToward([5, 5], [5, 7]), [
	[5, 5],
	[5, 6],
	[5, 7],
]);
deepEqual(tickToward([3, 2], [4, 5]), [
	[3, 2],
	[4, 3],
	[4, 4],
	[4, 5],
]);
deepEqual(tickToward([5, 1], [5, -2]), [
	[5, 1],
	[5, 0],
	[5, -1],
	[5, -2],
]);
