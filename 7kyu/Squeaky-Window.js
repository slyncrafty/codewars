/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55f8b5b09ec923860200000f/
/* ========== ========== ========== ========== ========== ==========*/
/*
Squeaky Window

Description:
Your function takes in parameter an array of integers nums and a strictly-positive integer k.

Imagine a sliding window of size k which is moving from left to right in the array. You can only see the k elements that are in the window. The sliding window moves right by one position until it is no longer possible to have k elements in the window. You have to return an array of the maximums for each successive window, from left to right.
Detailed Example:

Given nums = [1,3,-1,-3,5,3,6,7], and k = 3:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7      3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7

(nums = [1,3,-1,-3,5,3,6,7], k = 3) ---> [3, 3, 5, 5, 6, 7]

More examples:

(nums = [1, 2, 3, 4], k = 1) ---> [1, 2, 3, 4]
(nums = [1, 2, 3, 4], k = 2) ---> [2, 3, 4]
(nums = [1, 2, 3, 4], k = 3) ---> [3, 4]
(nums = [1, 2, 3, 4], k = 4) ---> [4]
(nums = [1, 2, 3, 4], k = 5) ---> [] because k is larger than the length of nums

*/

// Solution
function sliding(nums, k) {
	const n = nums.length;
	if (k > n) return [];

	const res = [];
	for (let i = 0; i <= n - k; i++) {
		const max = Math.max(...nums.slice(i, i + k));
		res.push(max);
	}
	return res;
}

// Test Codes
const doTest = (nums, k, expected) => {
	const actual = sliding(nums, k);
	const equal = (actual, expected) => {
		if (actual === expected) return true;
		else if (Array.isArray(actual) && Array.isArray(expected)) {
			if (actual.length !== expected.length) return false;
			return actual.every((e, i) => equal(e, expected[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

doTest([1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]);
doTest([-7, -8, 7, 5, 7, 1, 6, 0], 4, [7, 7, 7, 7, 7]);
doTest([7, 2, 4], 2, [7, 4]);
doTest([9, 11], 2, [11]);
doTest([9, 11, 12], 1, [9, 11, 12]);
doTest([], 50, []);
doTest([-1, -2, -3], 3, [-1]);
doTest([-1, -2, -3], 1, [-1, -2, -3]);
