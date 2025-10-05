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

function largestRectangleInGrid(matrix) {
	let n = matrix.length,
		m = matrix[0].length;
	// heights will store histogram heights
	let heights = new Array(m).fill(0);
	let answer = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (matrix[i][j] === 1) heights[j]++;
			else heights[j] = 0;
		}
		answer = Math.max(answer, getMaxArea(heights));
	}
	return answer;
}

// find the maximum area of rectangle in a histogram
function getMaxArea(heights) {
	let n = heights.length;
	let s = [];
	let result = 0;

	for (let i = 0; i < n; i++) {
		// process all bars that are higher or equal to current
		while (s.length > 0 && heights[s[s.length - 1]] >= heights[i]) {
			let tp = s.pop();
			// width between previous smaller (stack top) and current index
			let width = s.length === 0 ? i : i - s[s.length - 1] - 1;
			result = Math.max(result, heights[tp] * width);
		}
		s.push(i);
	}
	// Process remaining bars in stack
	while (s.length > 0) {
		let tp = s.pop();
		let width = s.length === 0 ? n : n - s[s.length - 1] - 1;
		result = Math.max(result, heights[tp] * width);
	}

	return result;
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
