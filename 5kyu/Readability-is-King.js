/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Readability is King

Description:
We will use the Flesch–Kincaid Grade Level to evaluate the readability of a piece of text. This grade level is an approximation for what schoolchildren are able to understand a piece of text. For example, a piece of text with a grade level of 7 can be read by seventh-graders and beyond.

The way to calculate the grade level is as follows:

(0.39 * average number of words per sentence) + (11.8 * average number of syllables per word) - 15.59

Write a function that will calculate the Flesch–Kincaid grade level for any given string. Return the grade level rounded to two decimal points.

Ignore hyphens, dashes, apostrophes, parentheses, ellipses and abbreviations.

Remember that the text can contain more than one sentence: code accordingly!

HINT: Count the number of vowels as an approximation for the number of syllables, but count groups of vowels as one (e.g. deal is one syllable). Do not count y as a vowel!
Example

"The turtle is leaving." ==> 3.67

The average number of words per sentence is 4 and the average number of syllables per word is 1.5. The score is then (0.39 * 4) +  (11.8 * 1.5) - 15.59 = 3.67

*/

// Solution
function fleschKincaid(text) {
	if (!text) return 0.0;
	// remove the ignored
	text = text.replace(/[-–—'\"()\[\]…]/g, '');

	// split into sentences
	const sentences = text
		.split(/[.?!]+/)
		.map((s) => s.trim())
		.filter(Boolean);
	if (sentences.length === 0) return 0.0;

	// split sentence into words
	let words = [];
	for (let s of sentences) {
		words.push(...s.split(/\s+/).filter(Boolean));
	}
	if (words.length === 0) return 0.0;

	const totalSyllables = words.reduce((acc, w) => acc + countSyllables(w), 0);
	const totalWords = words.length;
	const totalSentences = sentences.length;

	const avgWordsPerSentence = totalWords / totalSentences;
	const avgSyllablePerWord = totalSyllables / totalWords;

	const grade = 0.39 * avgWordsPerSentence + 11.8 * avgSyllablePerWord - 15.59;
	return grade.toFixed(2);
}

// count syllables by counting vowels
function countSyllables(word) {
	word = word.toLowerCase().replace(/[^a-z]/g, '');
	const matches = word.match(/[aeiou]+/g);
	return matches ? matches.length : 1;
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};

var txts = [
	['The turtle is leaving.', 3.67],
	['A good book is hard to find.', -1.06],
	['To be or not to be. That is the question.', -0.66],
	['Oh no! The lemming is falling.', 1.31],
	[
		'Do not cut your fingers as your katana is getting sharper! Be gentle.',
		4.19,
	],
];

txts.forEach(function (test) {
	const fk = Number(fleschKincaid(test[0])),
		level = test[1];
	assertEquals(fk, level);
});
