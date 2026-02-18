/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5aa1031a7c7a532be30000e5
/* ========== ========== ========== ========== ========== ==========*/
/*
The queen on the chessboard

Description:
In chess, the queen can be moved across any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop.
Task

Given the square of a queen on a chessboard, your function must output an array of the squares the queen can move to. Squares are represented as strings using chess algebraic notation.
Input

    A valid input position is a string of one letter from A to H followed by a digit from 1 to 8, for example "A1", "C8", "B3".
    If the input is anything else (e.g. not a string, or an invalid position such as A10 or H0), return an empty array.

Output

An array of positions (strings). It should be sorted in lexicographical order and should not include the starting square of the queen.
Example

For example when input position is A1 return value should be:

["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]

     A   B   C   D   E   F   G   H
   + - + - + - + - + - + - + - + - +
1  | Q | x | x | x | x | x | x | x |
   + - + - + - + - + - + - + - + - +
2  | x | x |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
3  | x |   | x |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
4  | x |   |   | x |   |   |   |   |
   + - + - + - + - + - + - + - + - +
5  | x |   |   |   | x |   |   |   |
   + - + - + - + - + - + - + - + - +
6  | x |   |   |   |   | x |   |   |
   + - + - + - + - + - + - + - + - +
7  | x |   |   |   |   |   | x |   |
   + - + - + - + - + - + - + - + - +
8  | x |   |   |   |   |   |   | x |
   + - + - + - + - + - + - + - + - +
   
Q = queen
x = available move

*/

// Solution
function availableMoves(position) {
	if (!position || position.length !== 2 || !/^[A-H][1-8]$/.test(position))
		return [];

	const file = position[0].charCodeAt(0);
	const rank = Number(position[1]);

	const res = [];
	const add = (f, r) => {
		if (f >= 65 && f <= 72 && r >= 1 && r <= 8) {
			const square = String.fromCharCode(f) + r;
			if (square !== position) res.push(square);
		}
	};

	for (let f = 65; f <= 72; f++) add(f, rank);
	for (let r = 1; r <= 8; r++) add(file, r);
	for (let d = 1; d < 8; d++) {
		add(file + d, rank + d); // NE
		add(file + d, rank - d); // SE
		add(file - d, rank + d); // NW
		add(file - d, rank - d); // SW
	}

	return res.sort();
}

// Test Codes
const tests = [
	{
		input: 'A1',
		expected: [
			'A2',
			'A3',
			'A4',
			'A5',
			'A6',
			'A7',
			'A8',
			'B1',
			'B2',
			'C1',
			'C3',
			'D1',
			'D4',
			'E1',
			'E5',
			'F1',
			'F6',
			'G1',
			'G7',
			'H1',
			'H8',
		],
	},
	{
		input: 'C5',
		expected: [
			'A3',
			'A5',
			'A7',
			'B4',
			'B5',
			'B6',
			'C1',
			'C2',
			'C3',
			'C4',
			'C6',
			'C7',
			'C8',
			'D4',
			'D5',
			'D6',
			'E3',
			'E5',
			'E7',
			'F2',
			'F5',
			'F8',
			'G1',
			'G5',
			'H5',
		],
	},
	{
		input: 'H3',
		expected: [
			'A3',
			'B3',
			'C3',
			'C8',
			'D3',
			'D7',
			'E3',
			'E6',
			'F1',
			'F3',
			'F5',
			'G2',
			'G3',
			'G4',
			'H1',
			'H2',
			'H4',
			'H5',
			'H6',
			'H7',
			'H8',
		],
	},
	{
		input: null,
		expected: [],
	},
	{
		input: [1, 2, 3],
		expected: [],
	},
	{
		input: 'work?',
		expected: [],
	},
	{
		input: 'A10',
		expected: [],
	},
	{
		input: 'B0',
		expected: [],
	},
	{
		input: 2,
		expected: [],
	},
];

const deepEqual = (a, b) => {
	const actual = JSON.stringify(a);
	const expected = JSON.stringify(b);
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

for (const i in tests) {
	const [input, expected] = [tests[i]['input'], tests[i]['expected']];
	const message = 'for position ' + JSON.stringify(input) + '\n';
	const actual = availableMoves(input);
	deepEqual(actual, expected, message);
}
