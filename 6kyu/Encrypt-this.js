/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5848565e273af816fb000449/
/* ========== ========== ========== ========== ========== ==========*/
/*
Encrypt this!

Description:
*/

// Solution
const encryptThis = function (text) {
	if (!text) return '';

	const arr = text.split(' ').map((w) => {
		const chars = w.split('');
		const firstChar = chars[0].charCodeAt(0);

		if (chars.length > 1) {
			[chars[1], chars[chars.length - 1]] = [chars[chars.length - 1], chars[1]];
		}
		return firstChar + chars.slice(1).join('');
	});
	return arr.join(' ');
};

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅PASSED');
	else console.log('❌FAILED');
};

strictEqual(encryptThis('A'), '65');
strictEqual(
	encryptThis('A wise old owl lived in an oak'),
	'65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
);
strictEqual(
	encryptThis('The more he saw the less he spoke'),
	'84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'
);
strictEqual(
	encryptThis('The less he spoke the more he heard'),
	'84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'
);
strictEqual(
	encryptThis('Why can we not all be like that wise old bird'),
	'87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'
);
strictEqual(
	encryptThis('Thank you Piotr for all your help'),
	'84kanh 121uo 80roti 102ro 97ll 121ruo 104ple'
);
