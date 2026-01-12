/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/533f854e8fedc222fd000001/
/* ========== ========== ========== ========== ========== ==========*/
/*
Find All Array Values That Fall Within a Given Difference

Description:
You are given an array of non-negative integers.

The goal is to find all the values in the array that are within a given range of each other.

Return the final values in ascending order.
For Example
Given

numbers = [5, 32, 5, 1, 31, 70, 30, 8]
difference = 2

You want to know all the values that fall within a difference of 2 of each other:
Should Return

[5, 5, 30, 31, 32]

If an empty array is given, then an empty array should be returned regardless of the difference value passed in.

Example solution call...

new GroupByDifference([5, 32, 5, 1, 31, 70, 30, 8]).find(3) // => [5,5,8,30,31,32]

*/

// Solution
class GroupByDifference {
	constructor(numbers = []) {
		this.numbers = numbers;
	}

	find(difference) {
		// find all number that is within local range of given difference
		if (this.numbers.length === 0) return [];

		const nums = [...this.numbers].sort((a, b) => a - b);
		const n = nums.length;
		const included = Array(n).fill(false);

		let left = 0;
		for (let right = 1; right < n; right++) {
			while (nums[right] - nums[left] > difference) {
				left++;
			}
			if (right !== left) {
				for (let i = left; i <= right; i++) {
					included[i] = true;
				}
			}
		}
		return nums.filter((_, i) => included[i]);
	}
}

// Test Codes
const assertDeepEquals = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
	};
	if (equal(actual, expected)) console.log('✅PASS');
	else console.log('❌FAILED');
};

let numbers = [5, 32, 5, 1, 31, 70, 30, 8];

assertDeepEquals(
	new GroupByDifference(numbers).find(100),
	[1, 5, 5, 8, 30, 31, 32, 70]
);
assertDeepEquals(new GroupByDifference(numbers).find(3), [5, 5, 8, 30, 31, 32]);
assertDeepEquals(new GroupByDifference(numbers).find(2), [5, 5, 30, 31, 32]);
assertDeepEquals(new GroupByDifference(numbers).find(0), [5, 5]);
assertDeepEquals(new GroupByDifference([]).find(10), []);
