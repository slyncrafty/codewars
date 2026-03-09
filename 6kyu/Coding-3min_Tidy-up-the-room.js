/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Coding 3min : Tidy up the room

Description:
Task:

Give you a room(n x n matrix), there are some sundries(any character except spaces). Our task is to put the sundries neatly placed in the upper left corner of the room(a small metrix)
Example:

example1:

room:[
["a"," "," "," "," "],
[" "," ","b"," "," "],
[" "," "," "," "," "],
[" ","c"," "," "," "],
[" "," ","d"," "," "]
]

There are 4 sundries in the room(a,b,c,d), so we put them in the 2x2 matrix, output should be:

[
["a","b"," "," "," "],
["c","d"," "," "," "],
[" "," "," "," "," "],
[" "," "," "," "," "],
[" "," "," "," "," "]
]

example2:

room:[
["a"," "," "," "," "],
[" "," ","b"," "," "],
[" "," "," "," "," "],
[" ","c"," "," "," "],
[" "," ","d","e"," "]
]

There are 5 sundries in the room(a,b,c,d,e), they cannot be put into the 2x2 matrix, so we put them in the 3x3 matrix, output should be:

[
["a","b","c"," "," "],
["d","e"," "," "," "],
[" "," "," "," "," "],
[" "," "," "," "," "],
[" "," "," "," "," "]
]

For more example see the testcases.
*/

// Solution
function sc(room) {
	const n = room.length;

	const items = [];
	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (room[r][c] !== ' ') items.push(room[r][c]);
		}
	}
	const k = items.length;

	const s = Math.ceil(Math.sqrt(k));

	const result = Array.from({ length: n }, () => Array(n).fill(' '));

	let idx = 0;
	for (let r = 0; r < s && idx < k; r++) {
		for (let c = 0; c < s && idx < k; c++) {
			result[r][c] = items[idx++];
		}
	}

	return result;
}

// Test Codes
const assertSimilar = (a, b) => {
	const equal = (a, b) => {
		if (a === b) return true;
		return JSON.stringify(a) === JSON.stringify(b);
	};
	if (equal(a, b)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

var room = [
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
	],
	answer = [
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' '],
	];
assertSimilar(sc(room), answer);
room = [
	['a', ' ', ' ', ' ', ' '],
	[' ', ' ', 'b', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', 'c', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
];
answer = [
	['a', 'b', ' ', ' ', ' '],
	['c', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
];
assertSimilar(sc(room), answer);
room = [
	['a', ' ', ' ', ' ', ' '],
	[' ', ' ', 'b', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', 'c', ' ', ' ', ' '],
	[' ', ' ', 'd', ' ', ' '],
];
answer = [
	['a', 'b', ' ', ' ', ' '],
	['c', 'd', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
];
assertSimilar(sc(room), answer);
room = [
	['a', 'b', ' ', ' ', ' '],
	[' ', 'c', 'd', ' ', ' '],
	[' ', ' ', 'e', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
];
answer = [
	['a', 'b', 'c', ' ', ' '],
	['d', 'e', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
];
assertSimilar(sc(room), answer);
room = [
	['a', 'b', ' ', ' ', ' '],
	[' ', 'c', 'd', ' ', ' '],
	[' ', ' ', 'e', 'f', ' '],
	[' ', ' ', ' ', 'g', 'h'],
	['i', 'j', 'k', ' ', ' '],
];
answer = [
	['a', 'b', 'c', 'd', ' '],
	['e', 'f', 'g', 'h', ' '],
	['i', 'j', 'k', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
];
assertSimilar(sc(room), answer);
room = [
	['1', '2', '3', ' ', ' '],
	[' ', '6', '5', '4', ' '],
	[' ', ' ', '7', '9', '8'],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
];
answer = [
	['1', '2', '3', ' ', ' '],
	['6', '5', '4', ' ', ' '],
	['7', '9', '8', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' '],
];
assertSimilar(sc(room), answer);
