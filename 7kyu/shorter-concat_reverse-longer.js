/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54557d61126a00423b000a45/
/* ========== ========== ========== ========== ========== ==========*/
/*
shorter concat [reverse longer]

Description:
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

*/

// Solution
function shorterReverseLonger(a, b) {
	return a.length < b.length
		? `${a}${b.split('').reverse().join('')}${a}`
		: `${b}${a.split('').reverse().join('')}${b}`;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect', a, b);
};
strictEqual(
	shorterReverseLonger('first', 'abcde'),
	'abcdetsrifabcde',
	'Incorrect answer for a="first", b="abcde"'
);
strictEqual(
	shorterReverseLonger('hello', 'bau'),
	'bauollehbau',
	'Incorrect answer for a="hello", b="bau"'
);
strictEqual(
	shorterReverseLonger('fghi', 'abcde'),
	'fghiedcbafghi',
	'Incorrect answer for a="fghi", b="abcde"'
);
strictEqual(
	shorterReverseLonger('hello', ''),
	'olleh',
	'Incorrect answer for a="hello", b=""'
);
strictEqual(
	shorterReverseLonger('', 'bau'),
	'uab',
	'Incorrect answer for a="", b="bau"'
);
strictEqual(
	shorterReverseLonger('', ''),
	'',
	'Incorrect answer for a="", b=""'
);
