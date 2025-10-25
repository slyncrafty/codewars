/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5898b4b71d298e51b600014b
/* ========== ========== ========== ========== ========== ==========*/
/*
Srot the inner ctonnet in dsnnieedcg oredr

Description:
You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"

    Words are made up of lowercase letters.
    The string will never be null and will never be empty.
    words will be separated by a single space character
    the string will have neither leading nor trailing spaces

*/

// Solution
function sortTheInnerContent(words) {
	return words
		.split(' ')
		.map((str) => {
			if (str.length < 2) return str;
			return (
				str[0] +
				str
					.slice(1, str.length - 1)
					.split('')
					.sort()
					.reverse()
					.join('') +
				str[str.length - 1]
			);
		})
		.join(' ');
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};
assertEquals(
	sortTheInnerContent('sort the inner content in descending order'),
	'srot the inner ctonnet in dsnnieedcg oredr'
);
assertEquals(sortTheInnerContent('wait for me'), 'wiat for me');
assertEquals(sortTheInnerContent('this kata is easy'), 'tihs ktaa is esay');
