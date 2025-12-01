/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/69178eb3a22411a3aab31347/
/* ========== ========== ========== ========== ========== ==========*/
/*
decoder arrow pin code

Description:
You are a junior employee hired to work in an office for a meager salary, but you are full of ambition to conquer the universe of professional heights. You were shown your workplace, which has a computer, but it is password protected. Your coworkers decided to play a joke on you by setting a password on your computer. They left you a bunch of stickers with a strange sequence of characters, always starting with a digit and continuing with arrows. Some stickers have an additional digit starting with *. Taking one sticker in your hands and looking at the keyboard, you realize that this is probably the computer's PIN code, encoded as a sequence of arrows, but which of the stickers contains the correct sequence? It seems that among the stickers there are impossible combinations of arrows that go beyond the limits of the numeric keypad. You try to enter the first PIN code from the sticker, get confused by the arrows, and decide to write a function to decode the PIN code with arrows. Fortunately, you have your laptop with you.

+---+---+---+     +---sticker---+ 
| 7 | 8 | 9 |     |             |
+---+---+---+     |  1→↑→       |
| 4 | 5 | 6 |     |             |
+---+---+---+     |             |
| 1 | 2 | 3 |     +-------------+
+---+---+---+   presumably encoded
| 0 |                1256
+---+

Task

Your task is to write a decoder function for the arrow pin code that takes a string as input and returns a list containing a sequence of digits.

    The sticker contains between 4 and 8 characters.
    The PIN code on the sticker always begins with a digit and contains at least one arrow.
    There are no more than four types of arrows on the stickers ↓, ↑, →, ←.
    In addition to the first digit, the sticker may contain another digit with an asterisk *n, which probably indicates the number of times the previous key was pressed. The digit is always in the range 0 < *n < 10.
    The sticker may contain an incorrect PIN code consisting of an incorrect combination of arrows that goes beyond the digital keypad. In this case, return [].

Examples

correct sequence of arrows

    "1→↑→"       ==>   [1, 2, 5, 6]
    "1*2↓"       ==>   [1, 1, 1, 0]
    "0*2↑"       ==>   [0, 0, 0, 1]
    "0↑↑↑"       ==>   [0, 1, 4, 7]
    "5↓*1←↑↓"    ==>   [5, 2, 2, 1, 4, 1]
    "1→→↑↑←←↓↓"  ==>   [1, 2, 3, 6, 9, 8, 7, 4, 1]

incorrect sequence of arrows

    "0↑↑↑↑"      ==>   []
    "8↑*5→"      ==>   []
    "0←*2←"      ==>   []
    "8↑↑↑"       ==>   []
    "3↓←*4↑"     ==>   []
    "6→←→↓↑"     ==>   []

*/

// Solution
const coords = {
	0: [0, 0],
	1: [1, 0],
	2: [1, 1],
	3: [1, 2],
	4: [2, 0],
	5: [2, 1],
	6: [2, 2],
	7: [3, 0],
	8: [3, 1],
	9: [3, 2],
};

const moves = {
	'↓': [-1, 0],
	'↑': [1, 0],
	'→': [0, 1],
	'←': [0, -1],
};

function decArrowPinCode(arrowStr) {
	if (!arrowStr) return [];
	const start = Number(arrowStr[0]);
	if (isNaN(start)) return [];
	const n = arrowStr.length;
	const coordToDigit = {};
	for (const d in coords) coordToDigit[coords[d].join(',')] = Number(d);

	const result = [start];

	for (let i = 1; i < n; i++) {
		const entry = arrowStr[i];
		const prev = result.at(-1);
		if (entry === '*') {
			if (i + 1 >= n) return [];
			const count = Number(arrowStr[i + 1]);
			if (isNaN(count)) return [];
			for (let k = 0; k < count; k++) result.push(prev);
			i += 1;
			continue;
		}

		if (moves[entry]) {
			const [cx, cy] = coords[prev];
			const [dx, dy] = moves[entry];
			const nx = cx + dx;
			const ny = cy + dy;
			const newKey = coordToDigit[`${nx},${ny}`];
			if (newKey === undefined) return [];
			result.push(newKey);
			continue;
		}
		return [];
	}
	return result;
}

// Test Codes
const deepStrictEqual = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('PASSED : Correct');
	else console.log(`Failed. Output ${a} is expected to match ${b}`);
};

deepStrictEqual(decArrowPinCode('1→↑→'), [1, 2, 5, 6]);
deepStrictEqual(decArrowPinCode('1*2↓'), [1, 1, 1, 0]);
deepStrictEqual(decArrowPinCode('0*2↑'), [0, 0, 0, 1]);
deepStrictEqual(decArrowPinCode('0↑↑↑'), [0, 1, 4, 7]);
deepStrictEqual(decArrowPinCode('0↑↑↑↑'), []);
deepStrictEqual(decArrowPinCode('8↑*5→'), []);
deepStrictEqual(decArrowPinCode('0←*2←'), []);
