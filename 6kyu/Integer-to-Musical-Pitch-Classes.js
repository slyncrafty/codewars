/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54d84dc118438a0eed000a42
/* ========== ========== ========== ========== ========== ==========*/
/*
Integer to Musical Pitch Classes

Description:
This kata is the inverse of the previous one: you must write a method to_pitch_class that, when given an integer representing a musical pitch class, returns an array of every name for that note.

There are only twelve pitch classes (which are cyclical, e.g., the note above number 11 is number 0), and the numerical values of the natural notes are as follows:

C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11

A sharp ("♯") raises a note by one, and a flat ("♭") lowers it by one. For this kata, we'll also be using the double sharp and the double flat, which are exactly what they sound like: the double sharp raises a pitch by two, and the double flat lowers a pitch by two. Since Codewars doesn't allow the characters for sharp, flat, double sharp, and double flat, we'll use the strings "#", "b", "x", and "bb" instead.

Some examples:

toPitchClass(2) // - > should return ['D', 'Cx', 'Ebb']

toPitchClass(10) // -> should return ['A#', 'Bb', 'Cbb']

The order of the returned array doesn't matter.
*/

// Solution
const letterToNumber = {
	C: 0,
	D: 2,
	E: 4,
	F: 5,
	G: 7,
	A: 9,
	B: 11,
};

const numberToSign = {
	2: 'x',
	1: '#',
	'-1': 'b',
	'-2': 'bb',
};

function toPitchClass(n) {
	if (n === null || n > 11 || n < 0) return null;
	const result = [];
	for (const letter of Object.keys(letterToNumber)) {
		const natural = letterToNumber[letter];
		if (n === natural) {
			result.push(letter);
			continue;
		}
		const diff = ((((n - natural - 6) % 12) + 12) % 12) - 6;
		if (diff >= -2 && diff <= 2) {
			const sign = numberToSign[diff];
			result.push(letter + sign);
		}
	}
	return result;
}

// Test Codes
const assertSimilar = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('Correct');
	else console.log('Incorrect', a, b);
};
assertSimilar(toPitchClass(6).sort(), ['F#', 'Gb', 'Ex'].sort());
assertSimilar(toPitchClass(0).sort(), ['C', 'B#', 'Dbb'].sort());
assertSimilar(toPitchClass(8).sort(), ['Ab', 'G#'].sort());
