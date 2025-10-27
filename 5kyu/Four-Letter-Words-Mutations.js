/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Four Letter Words ~ Mutations

Description:
Our Setup

Alice and Bob work in an office. When the workload is light and the boss isn't looking, they sometimes play simple word games for fun. This is one of those days!
Today's Game

Alice and Bob are playing what they like to call Mutations, where they take turns trying to "think up" a new four-letter word (made up of four unique letters) that is identical to the prior word except for only one letter. They just keep on going until their memories fail out.
Their Words

Alice and Bob have memories of the same size, each able to recall 10 to 2000 different four-letter words. Memory words and initial game word are randomly taken from the same list of 4000 (unique, four-letter, lowercased) words, any of which may appear in both memories.

The expression to "think up" a new word means that for their turn, the player must submit as their response word the first valid, unused word that appears in their memory (by lowest array index), as their memories are ordered from the most "memorable" words to the least.
The Rules

    a valid response word must contain four unique letters
    1 letter is replaced while the other 3 stay in position
    it must be the lowest indexed valid word in that memory
    this word cannot have already been used during the game
    the final player to provide a valid word will win the game
    if 1st player fails 1st turn, 2nd can win with one word
    when both players fail the initial word, there is no winner

Your Task

To determine the winner!
Some Examples

alice = plat,rend,bear,soar,mare,pare,flap,neat,clan,pore

bob   = boar,clap,farm,lend,near,peat,pure,more,plan,soap

    In the case of word = "send" and first = 0:

    Alice responds to send with rend
    Bob responds to rend with lend
    Alice has no valid response to lend
    Bob wins the game.

    In the case of word = "flip" and first = 1:

    Bob has no valid response to flip
    Alice responds to flip with flap
    Alice wins the game.

    In the case of word = "calm" and first = 1:

    Bob has no valid response to calm
    Alice has no valid response to calm
    Neither wins the game.

    In the case of word = "more" and first = 1:

    Bob has no valid response to more **
    Alice responds to more with mare
    Alice wins the game.

    In the case of word = "maze" and first = 0:

    Alice responds to maze with mare
    Bob responds to mare with more **
    Alice responds to more with pore
    Bob responds to pore with pure
    Alice responds to pure with pare
    Bob has no valid response to pare
    Alice wins the game.

** Note that in these last two cases, Bob cannot use mere because it has two e's.
Input

    alice ~ a(n) array/list/tuple/vector (10 <= size <= 2000) of four-letter words
    bob ~ a(n) array/list/tuple/vector (10 <= size <= 2000) of four-letter words
    word ~ the initial four-letter challenge word of the game
    first ~ an integer (either 0 for Alice or 1 for Bob)

Output

    0 if Alice wins
    1 if Bob wins
    -1 if both fail

*/

// Solution
function mutations(alice, bob, word, first) {
	const used = new Set([word]);
	let curr = word,
		turn = first,
		firstLost = false;

	const players = [alice, bob];

	while (true) {
		const memory = players[turn];
		const found = memory.find(
			(w) => !used.has(w) && has4UniqueLetters(w) && isDiffByOneLetter(w, curr)
		);
		if (found) {
			if (firstLost) return turn;
			used.add(found);
			curr = found;
		} else {
			if (firstLost) return -1;
			if (used.size === 1) firstLost = true;
			else return 1 - turn;
		}
		turn = 1 - turn;
	}
}

const has4UniqueLetters = (w) => new Set(w).size === 4;

const isDiffByOneLetter = (a, b) => {
	let diffCount = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) diffCount++;
	}
	return diffCount === 1;
};

// Test Codes
const ab_lists = [
	[
		[
			'fare',
			'cans',
			'left',
			'slap',
			'gain',
			'slam',
			'pate',
			'even',
			'mane',
			'peel',
			'flat',
			'oxen',
			'claw',
			'meet',
			'mats',
			'pulp',
			'over',
			'faze',
			'goat',
			'gone',
		],
		[
			'oats',
			'gaze',
			'feet',
			'feat',
			'pats',
			'golf',
			'cope',
			'maze',
			'caps',
			'flaw',
			'boot',
			'slaw',
			'pare',
			'oven',
			'mine',
			'clap',
			'goof',
			'cane',
			'fool',
			'oast',
		],
	],
	[
		[
			'mows',
			'cowl',
			'bowl',
			'foil',
			'bale',
			'gown',
			'melt',
			'salt',
			'kilt',
			'ewer',
			'male',
			'cere',
			'lean',
			'film',
			'goop',
			'quit',
			'fair',
			'pile',
			'vile',
			'lain',
		],
		[
			'maze',
			'cows',
			'tilt',
			'lair',
			'boss',
			'sale',
			'file',
			'mown',
			'bean',
			'suit',
			'silt',
			'kiln',
			'solo',
			'malt',
			'quiz',
			'fowl',
			'boil',
			'fail',
			'kale',
			'held',
		],
	],
	[
		[
			'mart',
			'tern',
			'bent',
			'more',
			'meet',
			'farm',
			'silt',
			'raft',
			'mist',
			'norm',
			'oafs',
			'runt',
			'yurt',
			'gift',
			'warm',
			'pare',
			'doom',
			'dire',
			'lest',
			'sure',
		],
		[
			'plop',
			'rift',
			'harm',
			'gala',
			'part',
			'suns',
			'bunt',
			'worm',
			'pure',
			'mire',
			'sift',
			'rant',
			'list',
			'sore',
			'mast',
			'alfa',
			'vest',
			'peal',
			'okay',
			'form',
		],
	],
];
const sol_lists = [
	[
		['aver', 0, 0],
		['spam', 0, 1],
		['gulf', 0, 1],
		['wren', 0, -1],
		['maps', 1, 1],
		['oars', 1, 0],
		['moat', 1, 0],
		['kiln', 1, -1],
	],
	[
		['town', 0, 0],
		['felt', 0, 1],
		['helm', 0, 1],
		['gasp', 0, -1],
		['quip', 1, 1],
		['bear', 1, 0],
		['file', 1, 0],
		['deft', 1, -1],
	],
	[
		['lent', 0, 0],
		['dare', 0, 1],
		['peat', 0, 1],
		['ails', 0, -1],
		['fire', 1, 1],
		['wore', 1, 0],
		['hurt', 1, 0],
		['apse', 1, -1],
	],
];
function run_fixed(a, b, tlist) {
	tlist.forEach(function ([w, q, sol]) {
		strictEqual(mutations(a.slice(), b.slice(), w, q), sol);
	});
}

const strictEqual = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};

ab_lists.forEach(function ([r1, r2], i) {
	run_fixed(r1, r2, sol_lists[i]);
});
