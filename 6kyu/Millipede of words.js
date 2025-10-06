/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/6344701cd748a12b99c0dbc4
/* ========== ========== ========== ========== ========== ==========*/
/*
Millipede of words

The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.
Input

Array of 3 to 7 words of random length. No capital letters.
Example true

Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.
Example false

Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.

*/

// Solution
function solution(words) {
	function canChain(path, used) {
		if (path.length === words.length) return true;
		const lastWord = path[path.length - 1];
		const lastChar = lastWord[lastWord.length - 1];
		for (let i = 0; i < words.length; i++) {
			if (!used[i] && words[i][0] === lastChar) {
				used[i] = true;
				path.push(words[i]);
				if (canChain(path, used)) return true;
				path.pop();
				used[i] = false;
			}
		}
		return false;
	}

	for (let i = 0; i < words.length; i++) {
		const used = Array(words.length).fill(false);
		used[i] = true;
		if (canChain([words[i]], used)) return true;
	}
	return false;
}

// Test Codes
const strictEqual = (a, b) => {
	let result = false;
	if (a === b) {
		result = true;
	} else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		result = a.every((e, i) => e === b[i]);
	}
	if (result) console.log('Correct!');
	else console.error('Incorrect!', a, b);
	return result;
};

strictEqual(
	solution([
		'excavate',
		'endure',
		'desire',
		'screen',
		'theater',
		'excess',
		'night',
	]),
	true
);
strictEqual(
	solution([
		'trade',
		'pole',
		'view',
		'grave',
		'ladder',
		'mushroom',
		'president',
	]),
	false
);
strictEqual(solution(['screen', 'desire', 'theater', 'excess', 'night']), true);
strictEqual(solution(['engine', 'endure', 'elite', 'excess']), true);
strictEqual(solution(['east', 'e', 'e', 't', 't', 'e', 'time']), true);
strictEqual(solution(['no', 'dog', 'on', 'good']), false);
