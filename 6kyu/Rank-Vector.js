/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/545f05676b42a0a195000d95
/* ========== ========== ========== ========== ========== ==========*/
/*
Rank Vector

Description:
Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values. For example:

    array = [9,3,6,10] --> ranks = [2,4,3,1]

    array = [3,3,3,3,3,5,1] --> ranks = [2,2,2,2,2,1,7]

    because there is one 1st place value, a five-way tie for 2nd place, and one in 7th place.
*/

// Solution
function ranks(a) {
	const sorted = [...a].sort((a, b) => b - a);

	const rankMap = new Map();
	for (let i = 0; i < sorted.length; i++) {
		if (!rankMap.has(sorted[i])) {
			rankMap.set(sorted[i], i + 1);
		}
	}
	return a.map((e) => rankMap.get(e));
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((v, i) => equal(v, b[i]));
		}
		return false;
	};

	const ok = equal(actual, expected);
	if (ok) console.log('✅ PASS');
	else console.log('❌ FAIL:', actual, 'expected to match', expected);
};

const test = (input, expected) => {
	deepEqual(ranks(input), expected);
};

const tests = [
	[[], []],
	[[2], [1]],
	[
		[2, 2],
		[1, 1],
	],
	[
		[1, 2, 3],
		[3, 2, 1],
	],
	[
		[5, 2, 3, 5, 5, 4, 9, 8, 0],
		[3, 8, 7, 3, 3, 6, 1, 2, 9],
	],
];

for (const [input, expected] of tests) {
	test(input, expected);
}
