/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56b861671d36bb0aa8000819/
/* ========== ========== ========== ========== ========== ==========*/
/*
Basics 06: Reversing and Combining Text

Description:
Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:

Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"

*/

// Solution
function reverse_and_combine_text(str) {
	let words = str.split(' ');
	while (words.length > 1) {
		const reversedWords = words.map((w) => w.split('').reverse().join(''));
		const combined = [];
		for (let i = 0; i < reversedWords.length; i += 2) {
			if (i + 1 < reversedWords.length) {
				combined.push(reversedWords[i] + reversedWords[i + 1]);
			} else {
				combined.push(reversedWords[i]);
			}
		}
		words = combined;
	}
	return words[0] || '';
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};

assertEquals(reverse_and_combine_text('abc def'), 'cbafed');
assertEquals(reverse_and_combine_text('abc def ghi jkl'), 'defabcjklghi');
assertEquals(reverse_and_combine_text('dfghrtcbafed'), 'dfghrtcbafed');
assertEquals(
	reverse_and_combine_text('234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44'),
	'trzwqfdstrteettr45hh4325543544hjhjh21lllll'
);
assertEquals(
	reverse_and_combine_text('sdfsdf wee sdffg 342234 ftt'),
	'gffds432243fdsfdseewttf'
);
