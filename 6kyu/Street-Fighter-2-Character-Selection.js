/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Street Fighter 2 - Character Selection

Description:
You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

Screen:

screen

Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

Input

    the list of game characters in a 2x6 grid;
    the initial position of the selection cursor (top-left is (0,0));
    a list of moves of the selection cursor (which are up, down, left, right);

Output

    the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

Rules

Selection cursor is circular horizontally but not vertically!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

Test

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

Notice: changing some of the input data might not help you.

Examples

    fighters = [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
    initial_position = (0,0)
    moves = ['up', 'left', 'right', 'left', 'left']

    then I should get:

    ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

    as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

    fighters = [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ]
    initial_position = (0,0)
    moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

    Result:

    ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

*/

// Solution
function streetFighterSelection(fighters, position, moves) {
	let r = position[0];
	let c = position[1];

	const rows = fighters.length;
	const cols = fighters[0].length;
	const results = [];

	for (const move of moves) {
		if (move === 'up' && r > 0) r--;
		if (move === 'down' && r < rows - 1) r++;
		if (move === 'left') c = (c - 1 + cols) % cols;
		if (move === 'right') c = (c + 1) % cols;

		results.push(fighters[r][c]);
	}
	return results;
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

	const ok = equal(actual, expected);
	if (ok) console.log('✅ PASS');
	else console.log('❌ FAIL:', actual, 'expected to match', expected);
};

let moves = [];
let fighters = [
	['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
	['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

moves = ['up', 'left', 'right', 'left', 'left'];
deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
	'Ryu',
	'Vega',
	'Ryu',
	'Vega',
	'Balrog',
]);

moves = [];
deepEqual(streetFighterSelection(fighters, [0, 0], moves), []);

moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
	'Vega',
	'Balrog',
	'Guile',
	'Blanka',
	'E.Honda',
	'Ryu',
	'Vega',
	'Balrog',
]);

moves = [
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
];
deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
	'E.Honda',
	'Blanka',
	'Guile',
	'Balrog',
	'Vega',
	'Ryu',
	'E.Honda',
	'Blanka',
]);

moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];
deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
	'Ryu',
	'Vega',
	'M.Bison',
	'Ken',
	'Ryu',
	'Vega',
	'M.Bison',
	'Ken',
]);

moves = ['down', 'down', 'down', 'down'];
deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
	'Ken',
	'Ken',
	'Ken',
	'Ken',
]);

moves = ['up', 'up', 'up', 'up'];
deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
	'Ryu',
	'Ryu',
	'Ryu',
	'Ryu',
]);
