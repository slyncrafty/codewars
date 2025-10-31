/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/595d4823c31ba629d90000d2/
/* ========== ========== ========== ========== ========== ==========*/
/*
The rarest pepe

Description:
The pepe market is on the verge of collapse. In a last-ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the internet to identify the rarest ones, which are worth more. Since doing this by hand would be tedious, you decide to use your programming skills to streamline the process.

Your task in this kata is to implement a function that, given a non-empty list of pepes (pepes), returns the rarest pepe in the list.

    If two or more pepes are equally rare, return a sorted list of these pepes.
    If the rarest pepe (or pepes) has a frequency of 5 or more, then there are no truly rare pepes, so your function should return "No rare pepes!".

*/

// Solution
// function findRarestPepe(pepes) {
// 	const seen = {};
// 	for (const pepe of pepes) {
// 		seen[pepe] = (seen[pepe] || 0) + 1;
// 	}
// 	let rare = [];
// 	let min = Infinity;
// 	for (const [key, value] of Object.entries(seen)) {
// 		if (min === value) rare.push(key);
// 		if (min > value) {
// 			min = value;
// 			rare = [key];
// 			console.log(key, value);
// 		}
// 	}
// 	return min < 5 && rare
// 		? rare.length === 1
// 			? rare[0]
// 			: rare.sort()
// 		: 'No rare pepes!';
// }

function findRarestPepe(pepes) {
	const seen = {};
	for (const pepe of pepes) {
		seen[pepe] = (seen[pepe] || 0) + 1;
	}
	const min = Math.min(...Object.values(seen));
	const result = Object.keys(seen).filter((k) => seen[k] === min);
	return min < 5
		? result.length === 1
			? result[0]
			: result.sort()
		: 'No rare pepes!';
}

// Test Codes
const deepEqual = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('Correct');
	else console.log('Incorrect', a, b);
};
const pepes = [
	'Machine Learning Pepe',
	'Deep Learning Pepe',
	'Clown Pepe',
	'Clown Pepe',
	'Machine Learning Pepe',
];
deepEqual(findRarestPepe(pepes), 'Deep Learning Pepe');

const multiPepes = [
	'Go Pepe',
	'Deep Learning Pepe',
	'Machine Learning Pepe',
	'Machine Learning Pepe',
	'Machine Learning Pepe',
];
deepEqual(findRarestPepe(multiPepes), ['Deep Learning Pepe', 'Go Pepe']);

const noPepes = [
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe',
	'Codewars Pepe',
];
deepEqual(findRarestPepe(noPepes), 'No rare pepes!');
