/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52449b062fb80683ec000024
/* ========== ========== ========== ========== ========== ==========*/
/*
The Hashtag Generator

Description:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.

    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

// Solution
function generateHashtag(str) {
	if (str === '') return false;
	const trimmedStr = str
		.trim()
		.split(' ')
		.filter((e) => e)
		.map((e) => e[0].toUpperCase() + e.slice(1))
		.join('');
	return trimmedStr.length === 0 || trimmedStr.length > 139
		? false
		: '#' + trimmedStr;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!', a, b);
};
strictEqual(
	generateHashtag(''),
	false,
	'Expected an empty string to return false'
);
strictEqual(generateHashtag(' '.repeat(200)), false, 'Still an empty string');
strictEqual(
	generateHashtag('Do We have A Hashtag'),
	'#DoWeHaveAHashtag',
	'Expected a Hashtag (#) at the beginning.'
);
strictEqual(
	generateHashtag('Codewars'),
	'#Codewars',
	'Should handle a single word.'
);
strictEqual(
	generateHashtag('Codewars Is Nice'),
	'#CodewarsIsNice',
	'Should remove spaces.'
);
strictEqual(
	generateHashtag('Codewars is nice'),
	'#CodewarsIsNice',
	'Should capitalize first letters of words.'
);
strictEqual(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');
strictEqual(
	generateHashtag(
		'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
	),
	false,
	'Should return false if the final word is longer than 140 chars.'
);
strictEqual(
	generateHashtag('a'.repeat(139)),
	'#A' + 'a'.repeat(138),
	'Should work'
);
strictEqual(generateHashtag('a'.repeat(140)), false, 'Too long');
strictEqual(
	generateHashtag(
		'  a  bb  ccc  dddd  eeeee  ffffff  ggggggg  hhhhhhhh  iiiiiiiii  jjjjjjjjjj  kkkkkkkkkkk  llllllllllll  mmmmmmmmmmmmm  nnnnnnnnnnnnnn  ooooooooooooooo  pppppppppppppppp  qqq'
	),
	'#ABbCccDdddEeeeeFfffffGggggggHhhhhhhhIiiiiiiiiJjjjjjjjjjKkkkkkkkkkkLlllllllllllMmmmmmmmmmmmmNnnnnnnnnnnnnnOooooooooooooooPpppppppppppppppQqq',
	'Should look at the resulting length'
);
