/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/
/* ========== ========== ========== ========== ========== ==========*/
/*
Find the unique string

Description:
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
*/

// Solution
function findUniq(arr) {
	const normalizeStr = (s) =>
		[...new Set(s.toLowerCase().replaceAll(' ', '').split('').sort())].join('');
	const normalizedArr = arr.map(normalizeStr);
	const freqMap = {};
	for (const str of normalizedArr) freqMap[str] = (freqMap[str] || 0) + 1;
	const uniqueKey = Object.keys(freqMap).find((key) => freqMap[key] === 1);
	return arr[normalizedArr.indexOf(uniqueKey)];
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!', a, b);
};
strictEqual(
	findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']),
	'BbBb'
);
strictEqual(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
strictEqual(findUniq(['silvia', 'vasili', 'victor']), 'victor');
strictEqual(
	findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']),
	'Harry Potter'
);
strictEqual(findUniq(['    ', 'a', ' ']), 'a');
