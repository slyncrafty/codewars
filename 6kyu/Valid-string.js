/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Valid string

Description:
You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.
Task

Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

For example:

dictionary: ["code", "wars"]

s1:         "codewars" =>  true  -> match 'code', 'wars'
s2:         "codewar"  =>  false -> match 'code', unmatched 'war'

One word from the dictionary can be used several times.

*/

// Solution
function validWord(dictionary, s) {
	const n = s.length;
	const dp = Array(n + 1).fill(false);
	dp[0] = true;

	// group by word length
	const lengths = {};
	for (const w of dictionary) {
		(lengths[w.length] ||= new Set()).add(w);
	}

	const lens = Object.keys(lengths).map(Number);

	for (let i = 0; i < n; i++) {
		if (!dp[i]) continue;

		for (const len of lens) {
			const j = i + len;
			if (j <= n && lengths[len].has(s.slice(i, j))) {
				dp[j] = true;
			}
		}
	}

	return dp[n];
}

// Test Codes
const act = ([dictionary, word, expected]) => {
	const input = `dictionary: [${dictionary}], word: ${word}`;
	const actual = validWord(dictionary, word);
	console.log(input);
	strictEqual(actual, expected);
};

const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed', a, 'expected to match', b);
};

act([['code', 'wars'], 'codewars', true]);
act([['wars', 'code'], 'codewars', true]);
act([['code', 'wars'], 'codecodewars', true]);
act([['code', 'wars'], 'codewar', false]);
act([['code', 'wars'], 'codewarscode', true]);
act([['code', 'star', 'wars'], 'starwars', true]);
act([['Star', 'Code', 'Wars'], 'StarCodeWars', true]);
act([['Star', 'Code', 'Wars'], 'WarsStarCode', true]);
act([['Star', 'Code', 'Wars'], 'CodeStarsWar', false]);
act([[], 'codewars', false]);
act([['code', 'wars'], 'code', true]);
act([['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef', true]);
act([['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg', false]);
act([['ab', 'a', 'bc'], 'abc', true]);
act([['ab', 'bc'], 'abc', false]);
