/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a33ec23ee1aaebecf000130/
/* ========== ========== ========== ========== ========== ==========*/
/*
How many feelings?

Description:
You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

For example:

string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'


string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'


string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'

If the feeling can be formed once - plus one to the answer.

If the feeling can be formed several times from different letters - plus one to the answer.

Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.

*/

// Solution
function countFeelings(string, array) {
	// bag of chars
	const bag = countChars(string);
	let count = 0;
	for (const emotion of array) {
		// check if each char of word has freq <= from the bag
		const need = countChars(emotion);
		let ok = true;
		for (const [ch, freq] of need) {
			if ((bag.get(ch) || 0) < freq) {
				ok = false;
				break;
			}
		}
		if (ok) count += 1;
	}
	return count === 1 ? `1 feeling.` : `${count} feelings.`;
}

const countChars = (str) => {
	const m = new Map();
	for (const ch of str) m.set(ch, (m.get(ch) || 0) + 1);
	return m;
};

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect', a, b);
};
assertEquals(
	countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']),
	'3 feelings.'
);
assertEquals(
	countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']),
	'2 feelings.'
);
assertEquals(
	countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief']),
	'1 feeling.'
);
assertEquals(
	countFeelings('abcdkasdfvkadf', [
		'desire',
		'joy',
		'shame',
		'longing',
		'fear',
	]),
	'0 feelings.'
);
