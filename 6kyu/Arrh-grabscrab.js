/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52b305bec65ea40fe90007a7
/* ========== ========== ========== ========== ========== ==========*/
/*
Arrh, grabscrab!

Description:
Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )

Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.
*/

// Solution
// function grabscrab(anagram, dictionary) {
// 	const createFreqMap = (str) => {
// 		const freqMap = {};
// 		for (const ch of str) {
// 			freqMap[ch] = (freqMap[ch] || 0) + 1;
// 		}
// 		return freqMap;
// 	};

// 	const deepEqualArray = (a, b) => {
// 		if (a === b) return true;
// 		const keysA = Object.keys(a);
// 		const keysB = Object.keys(b);
// 		if (keysA.length !== keysB.length) return false;
// 		return keysA.every((key) => a[key] === b[key]);
// 	};

// 	const anagramMap = createFreqMap(anagram);
// 	const result = [];
// 	for (const word of dictionary) {
// 		const wordMap = createFreqMap(word);
// 		if (deepEqualArray(anagramMap, wordMap)) result.push(word);
// 	}
// 	return result;
// }

// Simple and better
function grabscrab(anagram, dictionary) {
	const sortedAnagram = anagram.split('').sort().join();
	return dictionary.filter((e) => e.split('').sort().join() === sortedAnagram);
}

// Test Codes
const deepEqualArray = (a, b) => {
	let result = false;
	if (a === b) result = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		result = a.every((e, i) => e === b[i]);
	}
	if (result) console.log('Correct!');
	else console.log('Incorrect', a, b);
	return result;
};

deepEqualArray(
	grabscrab('trisf', ['first']),
	['first'],
	"Should have found 'first'"
);
deepEqualArray(
	grabscrab('oob', ['bob', 'baobab']),
	[],
	'Should not have found anything'
);
deepEqualArray(
	grabscrab('ainstuomn', ['mountains', 'hills', 'mesa']),
	['mountains'],
	"Should have found 'mountains'"
);
deepEqualArray(
	grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop']),
	['pool', 'loop'],
	"Should have found 'pool' and 'loop'"
);
deepEqualArray(
	grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey']),
	['sport', 'ports'],
	"Should have found 'sport' and 'ports'"
);
deepEqualArray(
	grabscrab('ourf', ['one', 'two', 'three']),
	[],
	'Should not have found anything'
);
