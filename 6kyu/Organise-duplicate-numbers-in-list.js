/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5884b6550785f7c58f000047
/* ========== ========== ========== ========== ========== ==========*/
/*
Organise duplicate numbers in list

Description:
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]

Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.

*/

// Solution
function group(arr) {
	const map = new Map();
	const order = [];
	for (const n of arr) {
		if (!map.has(n)) {
			map.set(n, []);
			order.push(n);
		}
		map.get(n).push(n);
	}
	return order.map((n) => map.get(n));
}

// Test Codes
const deepEqual = (a, b) => {
	const equal = (a, b) => {
		if (a === b) return true;
		return JSON.stringify(a) === JSON.stringify(b);
	};

	if (equal(a, b)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

deepEqual(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);
deepEqual(group([3, 2, 6, 2]), [[3], [2, 2], [6]]);
