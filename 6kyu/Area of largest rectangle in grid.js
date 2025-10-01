/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5e74588a25ba6800325e9233/
/* ========== ========== ========== ========== ========== ==========*/
/*
Area of largest rectangle in grid

Description:
You are given a 2D array matrix of 0s and 1s and your task is to find the area of the largest rectangle which can be placed on top of a group of adjacent 1s.
Example input

matrix = 
[
  [1,0,1,1,1],
  [0,1,1,0,1],
  [0,1,1,0,1],
  [0,1,1,0,1],
 ]

Output

6
*/

// Solution
function largestRectangleInGrid(matrix) {
	if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
	const rows = matrix.length;
	const cols = matrix[0].length;
	const heights = new Array(cols).fill(0);
	let maxArea = 0;

	const largestRectangleArea = (h) => {
		const stack = [];
		let best = 0;
		const extended = h.concat(0);
		for (let i = 0; i < extended.length; i++) {
			while (stack.length && extended[i] < extended[stack[stack.length - 1]]) {
				const height = extended[stack.pop()];
				const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
				best = Math.max(best, height * width);
			}
			stack.push(i);
		}
		return best;
	};

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			heights[c] = matrix[r][c] === 1 ? heights[c] + 1 : 0;
		}
		maxArea =
			maxArea < largestRectangleArea(heights)
				? largestRectangleArea(heights)
				: maxArea;
	}
	return maxArea;
}

// Test Codes
console.log(
	largestRectangleInGrid([
		[1, 0, 1, 1, 1],
		[0, 1, 1, 0, 1],
		[0, 1, 1, 0, 1],
		[0, 1, 1, 0, 1],
	]),
	6
);
console.log(
	largestRectangleInGrid([
		[1, 1, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 1, 1, 0, 1],
		[0, 1, 1, 0, 1],
	]),
	5
);
