/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57fe864854685b1c420002e0
/* ========== ========== ========== ========== ========== ==========*/
/*
Sorting Arrays

Description:
Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.
Example 1

a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

Example 2

a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

Each element in the arrays will start with a unique letter so there will only be a single match for each element.
*/

// Solution
function sortArray(a1, a2) {
	return [...a1].map((e) => a2.find((w) => w[0] === e[0]));
}

// Test Codes
const deepEqual = (a, b) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(a, b)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
deepEqual(sortArray(a1, a2), [
	'geko',
	'octopus',
	'iguana',
	'eagle',
	'rattlesnake',
]);

var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
deepEqual(sortArray(a1, a2), [
	'jaguar',
	'kangaroo',
	'camel',
	'ostrich',
	'deer',
]);

var a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
var a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
deepEqual(sortArray(a1, a2), [
	'narwhal',
	'llama',
	'sloth',
	'tortoise',
	'raven',
]);
