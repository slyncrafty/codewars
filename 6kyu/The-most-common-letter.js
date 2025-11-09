/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a434a9dc5e284724f000011/
/* ========== ========== ========== ========== ========== ==========*/
/*
The most common letter

Description:
Find the most common letter (not a space) in the given string (comprised of at least 3 lowercase words) and replace it with the given letter.

If such letters are two or more, choose the one that appears earliest in the string.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'

*/

// Solution
function replaceCommon(string, letter) {
	const arr = string.replaceAll(' ', '').split('');
	const freqMap = {};
	for (const char of arr) {
		freqMap[char] = (freqMap[char] || 0) + 1;
	}
	let freqChar,
		freqCount = 0;
	for (const [key, val] of Object.entries(freqMap)) {
		if (val > freqCount) {
			freqCount = val;
			freqChar = key;
		}
	}
	return string.replaceAll(freqChar, letter);
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect');
};

strictEqual(
	replaceCommon('my mom loves me as never did', 't'),
	'ty tot loves te as never did'
);
strictEqual(replaceCommon('real talk bro', 'n'), 'neal talk bno');
strictEqual(replaceCommon('great job go ahead', 'k'), 'grekt job go khekd');
strictEqual(
	replaceCommon('yyyaaa twwww ttt uuu ccca', 'p'),
	'yyyppp twwww ttt uuu cccp'
);
