/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58583922c1d5b415b00000ff
/* ========== ========== ========== ========== ========== ==========*/
/*
Street Fighter 2 - Character Selection - Part 2

Description:
Empty space

The first character of the first row (Ryu) is not aligned with the first of the second row (Balrog) but with the second (Ken) and the same goes with the other side; therefore we need to introduce something new, like an offset: the Empty Space.

The empty space, represented as empty string "", will allow us to keep the grid aligned and rectangular, with spaces that won't be selectable. In this case we need 2 empty spaces (3 rows x 6 columns = 18 slots, 18 slots - 16 characters = 2 empty spaces). Like this:

|        | Ryu    | E.Honda  | Blanka  | Guile   |         |
| Balrog | Ken    | Chun Li  | Zangief | Dhalsim | Sagat   |
| Vega   | T.Hawk | Fei Long | Deejay  | Cammy   | M.Bison |

The moves of the selection cursor are the same as before: rotate horizontally but stop vertically. When you find empty spaces (1 or more) you need to skip them if you approach them horizontally and get to the next selectable slot with the next fighter on the left or right; and if you approach them vertically you need to just stop and stay where you are.

Example: if you are on Ryu and move left, you must get to Guile; if you are on Balrog and move up, you must stay on Balrog.

Notice: I might put empty spaces right in the middle and the rectangular grids can be any size, not only 3x6, deal with this too.
What's new

So, let's resume what are the new issues in this harder version of the Kata:

    The initial position might be any non-empty slot in the grid (given as input).
    The characters grid (also given as input) might have any rectangular layout, not only 3 rows.
    The grid might contain empty spaces, both on the borders or right in the middle.

Input

    Fighters grid;
    Initial position;
    List of moves.

The third input parameter is still the list of moves (all valid ones: left, right, up or down).
Output

The output is the same as before: the list of characters that have been hovered by the selection cursor after each move, successful or not.
*/

// Solution
function superStreetFighterSelection(fighters, position, moves) {
	const rows = fighters.length;
	const cols = fighters[0].length;
	let [r, c] = position;
	const result = [];

	for (const move of moves) {
		if (move === 'up' && r > 0 && fighters[r - 1][c] !== '') {
			r--;
		}
		if (move === 'down' && r < rows - 1 && fighters[r + 1][c] !== '') {
			r++;
		}
		if (move === 'left') {
			let nc = (c - 1 + cols) % cols;
			while (fighters[r][nc] === '') nc = (nc - 1 + cols) % cols;
			c = nc;
		}
		if (move === 'right') {
			let nc = (c + 1) % cols;
			while (fighters[r][nc] === '') nc = (nc + 1) % cols;
			c = nc;
		}
		result.push(fighters[r][c]);
	}
	return result;
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
	};

	const ok = equal(actual, expected);
	if (ok) console.log('✅ PASS');
	else console.log('❌ FAIL:', actual, 'expected to match', expected);
};

let fighters = [
	['', 'Ryu', 'E.Honda', 'Blanka', 'Guile', ''],
	['Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat'],
	['Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison'],
];
let opts = ['up', 'down', 'right', 'left'];

const copy = (x) => x.map((r) => r.slice());

let moves = [];
let position = [0, 0];
let solution = [];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

moves = ['up'];
position = [1, 0];
solution = ['Balrog'];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

moves = ['up', 'up', 'up', 'up'];
position = [1, 0];
solution = ['Balrog', 'Balrog', 'Balrog', 'Balrog'];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

moves = ['down', 'down', 'down', 'down'];
position = [1, 0];
solution = ['Vega', 'Vega', 'Vega', 'Vega'];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

moves = ['up', 'up', 'up', 'up'];
position = [1, 5];
solution = ['Sagat', 'Sagat', 'Sagat', 'Sagat'];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

moves = ['down', 'down', 'down', 'down'];
position = [1, 5];
solution = ['M.Bison', 'M.Bison', 'M.Bison', 'M.Bison'];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
position = [0, 2];
solution = [
	'Ryu',
	'Guile',
	'Blanka',
	'E.Honda',
	'Ryu',
	'Guile',
	'Blanka',
	'E.Honda',
];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
position = [1, 3];
solution = [
	'Chun Li',
	'Ken',
	'Balrog',
	'Sagat',
	'Dhalsim',
	'Zangief',
	'Chun Li',
	'Ken',
];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

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
position = [0, 2];
solution = [
	'Blanka',
	'Guile',
	'Ryu',
	'E.Honda',
	'Blanka',
	'Guile',
	'Ryu',
	'E.Honda',
];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

moves = [
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'down',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'down',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
];
position = [0, 2];
solution = [
	'Blanka',
	'Guile',
	'Ryu',
	'E.Honda',
	'Blanka',
	'Guile',
	'Dhalsim',
	'Zangief',
	'Chun Li',
	'Ken',
	'Balrog',
	'Sagat',
	'Dhalsim',
	'Zangief',
	'Chun Li',
	'Ken',
	'Balrog',
	'Sagat',
	'Dhalsim',
	'Cammy',
	'M.Bison',
	'Vega',
	'T.Hawk',
	'Fei Long',
	'Deejay',
	'Cammy',
	'M.Bison',
	'Vega',
	'T.Hawk',
	'Fei Long',
	'Deejay',
	'Cammy',
];
deepEqual(
	superStreetFighterSelection(copy(fighters), position, moves),
	solution
);

// DO NOT CHANGE THIS VARIABLE!
// LIST WITH HOLES AND DUPLICATES
fighters3 = [
	['', 'Ryu', 'E.Honda', 'Cammy', 'Blanka', 'Guile', '', 'Chun Li'],
	['Balrog', 'Ken', 'Chun Li', '', 'M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
	['Vega', '', 'Fei Long', 'Balrog', 'Deejay', 'Cammy', '', 'T.Hawk'],
];

moves = [
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'down',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'left',
	'down',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
	'right',
];
position = [0, 2];
solution = [
	'Cammy',
	'Blanka',
	'Guile',
	'Chun Li',
	'Ryu',
	'E.Honda',
	'Chun Li',
	'Ken',
	'Balrog',
	'Sagat',
	'Dhalsim',
	'Zangief',
	'M.Bison',
	'Chun Li',
	'Ken',
	'Balrog',
	'Sagat',
	'Dhalsim',
	'Zangief',
	'Cammy',
	'T.Hawk',
	'Vega',
	'Fei Long',
	'Balrog',
	'Deejay',
	'Cammy',
	'T.Hawk',
	'Vega',
	'Fei Long',
	'Balrog',
	'Deejay',
	'Cammy',
];
deepEqual(
	superStreetFighterSelection(copy(fighters3), position, moves),
	solution
);

moves = [
	'down',
	'right',
	'right',
	'right',
	'down',
	'left',
	'left',
	'down',
	'right',
	'right',
	'right',
	'up',
];
position = [0, 3];
solution = [
	'Cammy',
	'Blanka',
	'Guile',
	'Chun Li',
	'Sagat',
	'Dhalsim',
	'Zangief',
	'Cammy',
	'T.Hawk',
	'Vega',
	'Fei Long',
	'Chun Li',
];
deepEqual(
	superStreetFighterSelection(copy(fighters3), position, moves),
	solution
);

// DO NOT CHANGE THIS VARIABLE!
fighters4 = [
	['', 'Ryu', 'E.Honda', 'Cammy'],
	['Balrog', 'Ken', 'Chun Li', ''],
	['Vega', '', 'Fei Long', 'Balrog'],
	['Blanka', 'Guile', '', 'Chun Li'],
	['M.Bison', 'Zangief', 'Dhalsim', 'Sagat'],
	['Deejay', 'Cammy', '', 'T.Hawk'],
];

moves = [
	'left',
	'left',
	'down',
	'right',
	'right',
	'right',
	'right',
	'down',
	'left',
	'left',
	'left',
	'left',
	'down',
	'right',
	'right',
	'down',
	'right',
	'right',
	'right',
	'down',
	'left',
	'left',
	'left',
	'down',
	'left',
	'left',
	'left',
];
position = [0, 3];
solution = [
	'E.Honda',
	'Ryu',
	'Ken',
	'Chun Li',
	'Balrog',
	'Ken',
	'Chun Li',
	'Fei Long',
	'Vega',
	'Balrog',
	'Fei Long',
	'Vega',
	'Blanka',
	'Guile',
	'Chun Li',
	'Sagat',
	'M.Bison',
	'Zangief',
	'Dhalsim',
	'Dhalsim',
	'Zangief',
	'M.Bison',
	'Sagat',
	'T.Hawk',
	'Cammy',
	'Deejay',
	'T.Hawk',
];
deepEqual(
	superStreetFighterSelection(copy(fighters4), position, moves),
	solution
);

moves = [
	'left',
	'left',
	'down',
	'right',
	'right',
	'right',
	'right',
	'down',
	'left',
	'left',
	'left',
	'left',
	'up',
	'right',
	'right',
	'up',
	'right',
	'right',
	'right',
];
position = [3, 3];
solution = [
	'Guile',
	'Blanka',
	'M.Bison',
	'Zangief',
	'Dhalsim',
	'Sagat',
	'M.Bison',
	'Deejay',
	'T.Hawk',
	'Cammy',
	'Deejay',
	'T.Hawk',
	'Sagat',
	'M.Bison',
	'Zangief',
	'Guile',
	'Chun Li',
	'Blanka',
	'Guile',
];
deepEqual(
	superStreetFighterSelection(copy(fighters4), position, moves),
	solution
);
