/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca
/* ========== ========== ========== ========== ========== ==========*/
/*
Duplicates. Duplicates Everywhere.

Description:
You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}

Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}

Rules

    Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
    If duplicate characters are found in the same array, the first occurance should be kept.

Example 1

input = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}

output = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
}

Example 2

input = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}

output = {
  "1": [],
  "2": [],
  "3": ["A"],
}

Example 3

input = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}

output = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
}
*/

// Solution
const removeDuplicateIds = (obj) => {
	const keys = Object.keys(obj).sort((a, b) => Number(a) - Number(b));
	const result = {};

	const keep = {};
	for (const key of keys) {
		const seen = new Set();
		for (const ch of obj[key]) {
			if (!seen.has(ch)) {
				seen.add(ch);
				keep[ch] = key;
			}
		}
	}

	for (const key of keys) {
		const seen = new Set();
		result[key] = [];

		for (const ch of obj[key]) {
			if (!seen.has(ch)) {
				seen.add(ch);

				if (keep[ch] === key) {
					result[key].push(ch);
				}
			}
		}
	}
	return result;
};

// Test Codes

const obj = {
	1: ['A', 'B', 'C'],
	2: ['A', 'B', 'D', 'A'],
};
const result = removeDuplicateIds(obj);

const obj1 = {
	1: ['C', 'F', 'G'],
	2: ['A', 'B', 'C'],
	3: ['A', 'B', 'D'],
};
const result1 = removeDuplicateIds(obj1);

const obj2 = {
	1: ['A'],
	2: ['A'],
	3: ['A'],
};
const result2 = removeDuplicateIds(obj2);

const obj3 = {
	432: ['A', 'A', 'B', 'D'],
	53: ['L', 'G', 'B', 'C'],
	236: ['L', 'A', 'X', 'G', 'H', 'X'],
	11: ['P', 'R', 'S', 'D'],
};
const result3 = removeDuplicateIds(obj3);

const deepEqual = (a, b) => {
	const equal = (a, b) => {
		if (a === b) return true;
		return JSON.stringify(a) === JSON.stringify(b);
	};

	if (equal(a, b)) console.log('✅Test Passed');
	else console.log('❌Test Failed', a, 'expected to match', b);
};

deepEqual(result, { 1: ['C'], 2: ['A', 'B', 'D'] });
deepEqual(result1, { 1: ['F', 'G'], 2: ['C'], 3: ['A', 'B', 'D'] });
deepEqual(result2, { 1: [], 2: [], 3: ['A'] });
deepEqual(result3, {
	11: ['P', 'R', 'S'],
	53: ['C'],
	236: ['L', 'X', 'G', 'H'],
	432: ['A', 'B', 'D'],
});
