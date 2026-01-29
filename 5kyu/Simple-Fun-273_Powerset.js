/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59157809f05d9a8ad7000096/
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple Fun #273: Powerset

Description:
Task

For the given set S its powerset is the set of all possible subsets of S.

Given an array of integers nums, your task is to return the powerset of its elements.

Implement an algorithm that does it in a depth-first search fashion. That is, for every integer in the set, we can either choose to take or not take it. At first, we choose NOT to take it, then we choose to take it(see more details in exampele).
Example

For nums = [1, 2], the output should be [[], [2], [1], [1, 2]].

Here's how the answer is obtained:

don't take element 1
----don't take element 2
--------add []
----take element 2
--------add [2]
take element 1
----don't take element 2
--------add [1]
----take element 2
--------add [1, 2]

For nums = [1, 2, 3], the output should be

[[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]].
Input/Output

[input] integer array nums

Array of positive integers, 1 ≤ nums.length ≤ 10.

[output] 2D integer array

The powerset of nums.

*/

// Solution
// function powerset(nums) {
// 	const result = [];
// 	const subset = [];

// 	function dfs(index) {
// 		// base case
// 		if (index === nums.length) {
// 			result.push([...subset]);
// 			return;
// 		}
//         // don't take
// 		dfs(index + 1);
//         // take
// 		subset.push(nums[index]);
// 		dfs(index + 1);
// 		subset.pop();
// 	}

// 	dfs(0);
// 	return result;
// }

function powerset(nums) {
	const result = [];
	const stack = [{ index: 0, subset: [] }];

	while (stack.length) {
		const { index, subset } = stack.pop();
		if (index === nums.length) {
			result.push(subset);
			continue;
		}

		// FILO take first
		stack.push({
			index: index + 1,
			subset: [...subset, nums[index]],
		});

		stack.push({
			index: index + 1,
			subset: subset,
		});
	}
	return result;
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

deepEqual(powerset([1, 2]), [[], [2], [1], [1, 2]], 'powerset([1, 2])');

deepEqual(
	powerset([1, 2, 3]),
	[[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]],
	'powerset([1, 2, 3])',
);

deepEqual(powerset([1]), [[], [1]], 'powerset([1])');

deepEqual(
	powerset([125, 15, 155, 15, 158]),
	[
		[],
		[158],
		[15],
		[15, 158],
		[155],
		[155, 158],
		[155, 15],
		[155, 15, 158],
		[15],
		[15, 158],
		[15, 15],
		[15, 15, 158],
		[15, 155],
		[15, 155, 158],
		[15, 155, 15],
		[15, 155, 15, 158],
		[125],
		[125, 158],
		[125, 15],
		[125, 15, 158],
		[125, 155],
		[125, 155, 158],
		[125, 155, 15],
		[125, 155, 15, 158],
		[125, 15],
		[125, 15, 158],
		[125, 15, 15],
		[125, 15, 15, 158],
		[125, 15, 155],
		[125, 15, 155, 158],
		[125, 15, 155, 15],
		[125, 15, 155, 15, 158],
	],
	'powerset([125, 15, 155, 15, 158])',
);

deepEqual(
	powerset([1, 2, 3, 4]),
	[
		[],
		[4],
		[3],
		[3, 4],
		[2],
		[2, 4],
		[2, 3],
		[2, 3, 4],
		[1],
		[1, 4],
		[1, 3],
		[1, 3, 4],
		[1, 2],
		[1, 2, 4],
		[1, 2, 3],
		[1, 2, 3, 4],
	],
	'powerset([1, 2, 3, 4])',
);
