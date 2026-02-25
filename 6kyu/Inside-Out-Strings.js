/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Inside Out Strings

Description:
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

Words will be separated by exactly one space and there will be no leading or trailing spaces.

*/

// Solution
function insideOut(x) {
	const arr = x.split(' ');
	const res = arr.map((w) => {
		if (w.length <= 3) return w;
		if (w.length % 2 === 0) {
			const mid = w.length / 2;
			let start = w.slice(0, mid).split('').reverse().join('');
			let end = w.slice(mid).split('').reverse().join('');
			return start + end;
		} else {
			const mid = (w.length + 1) / 2;
			let start = w
				.slice(0, mid - 1)
				.split('')
				.reverse()
				.join('');
			let end = w.slice(mid).split('').reverse().join('');
			return start + w[mid - 1] + end;
		}
	});
	return res.join(' ');
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed', a, 'expected to equal', b);
};
strictEqual(
	insideOut('man i need a taxi up to ubud'),
	'man i ende a atix up to budu',
);
strictEqual(
	insideOut('what time are we climbing up the volcano'),
	'hwta item are we milcgnib up the lovcona',
);
strictEqual(insideOut('take me to semynak'), 'atek me to mesykan');
