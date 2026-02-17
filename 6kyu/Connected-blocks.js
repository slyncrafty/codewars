/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a306685e1ce0e3fa500010b
/* ========== ========== ========== ========== ========== ==========*/
/*
Connected blocks

Description:
Given a 10x10 grid of 100 cells, with columns indexed 0 to 9 (left to right) and rows indexed 0 to 9 (bottom to top). The input of your program will be a comma-separated string of cell identifiers, identifyng the cells that are coloured black. Each cell identifier is a two digit number of the form <column_index><row_index>.

For example, an input of 18,00,95,40,36,26,57,48,54,65,76,87,97,47 represents the following grid:

When given this input, your program should output the size of the largest block of connected black cells, witch is outlined in red in the example above. So in this case your program would return 3.

Note that two black cells are considered to be connected if they share an edge, but they are not connected if the share only a corner.

The input could have some cells with invalid format or repeated cells that should not be taken into account.

For example: 00,00,111,1,1a is the same as 00

*/

// Solution
function solution(input) {
	if (!input) return 0;
	const parts = input.split(',').map((s) => s.trim());
	const valid = parts.filter(
		(n) => n.length === 2 && n[0] >= 0 && n[0] <= 9 && n[1] >= 0 && n[1] <= 9,
	);
	const cells = [...valid].map((d) => [Number(d[0]), Number(d[1])]);
	const blackList = new Set(valid);
	const seen = new Set();

	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	const dfs = (cx, cy) => {
		const key = `${cx}${cy}`;
		if (!blackList.has(key) || seen.has(key)) return 0;
		seen.add(key);

		let size = 1;
		for (const [dx, dy] of directions) {
			size += dfs(cx + dx, cy + dy);
		}
		return size;
	};

	let maxBlockNum = 0;
	for (const [x, y] of cells) {
		const key = `${x}${y}`;
		if (!seen.has(key)) {
			maxBlockNum = Math.max(maxBlockNum, dfs(x, y));
		}
	}
	return maxBlockNum;
}

// Test Codes
const strictEqual = (a, b, msg) => {
	console.log(`${msg}`);
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

strictEqual(
	solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'),
	3,
	'one repeated cell',
);
strictEqual(
	solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,46'),
	6,
	'bigger area',
);
strictEqual(
	solution('18,00,01,02,95,40,36,26,57,48,54,65,76,87,97,47,00'),
	3,
	'multiple maximums',
);
strictEqual(solution('18'), 1, 'single cell');
strictEqual(solution(''), 0, 'no cells');
strictEqual(solution('1,a1,-10,100'), 0, 'no valid cells');
strictEqual(
	solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,98,910,911,912,92,93'),
	3,
	'with invalid cells',
);
