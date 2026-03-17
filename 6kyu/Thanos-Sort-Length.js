/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/69aff09e67eb0ef1d5be0d73
/* ========== ========== ========== ========== ========== ==========*/
/*
Thanos Sort Length

Description:
Thanos Sort Length

The Mad Titan believes the universe must be perfectly balanced.

Given an array of integers, he repeatedly performs the following operation:

    If the current array is sorted in non-decreasing order, he stops.
    Otherwise, he destroys exactly half of the elements.

The removed elements must form one contiguous half of the array:

    either the left half, or
    the right half.

This process may repeat multiple times.

Your task is not to return the array itself. Instead, you must determine the maximum possible length of a sorted array that can remain after performing these operations optimally.

Implement this function:

function thanosSort(arr: List[Integer]) -> Integer

that solves this task.
Disclaimer

The original task was to simply implement thanos sort and return a possible resulting array. However the user can just simply:

const thanosSort=(arr)=> arr[0];

And since the true thanos sort is random, the user is technically correct. Therefore this kata is no longer the true thanos sort, rather a modified version.
IMPORTANT

For odd length arrays, include the middle element with the left half.

Example: [1,2,3,6,5] -> [1,2,3] and [6,5]
Examples
Example 1

thanosSort([3, 1, 4, 2]) -> 1

Explanation

Possible sequences:

Remove right half → [3,1] → not sorted → snap again → [1]

Remove left half → [4,2] → not sorted → snap again → [2]

The largest sorted result has length 1.
Example 2

thanosSort([1, 2, 3, 7, 5, 6]) -> 3

Explanation

Removing the right half gives [1,2,3], which is already sorted.

No other sequence yields a longer sorted result.
Constraints

0 ≤ len(arr) ≤ 1000

Elements may appear multiple times.

Return 0 for an empty array.
Notes

    A single element is always sorted.

    The optimal strategy is not always obvious.

    Efficiency does not matter for large inputs.

*/

// Solution
function thanosSort(arr) {
	let sorted = true;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			sorted = false;
			break;
		}
	}

	if (sorted) return arr.length;

	const mid = Math.ceil(arr.length / 2);

	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return Math.max(thanosSort(left), thanosSort(right));
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
strictEqual(thanosSort([3, 1, 4, 2]), 1, `Failed for arr = [3,1,4,2]`);
strictEqual(thanosSort([1, 2, 3, 4]), 4, `Failed for arr = [1,2,3,4]`);
strictEqual(thanosSort([4, 3, 2, 1]), 1, `Failed for arr = [4,3,2,1]`);
strictEqual(thanosSort([1]), 1, `Failed for arr = [1]`);
strictEqual(thanosSort([2, 1]), 1, `Failed for arr = [2,1]`);
strictEqual(thanosSort([5, 5, 5, 5]), 4, `Failed for arr = [5,5,5,5]`);
strictEqual(
	thanosSort([1, 2, 3, 7, 5, 6]),
	3,
	`Failed for arr = [1,2,3,7,5,6]`,
);
strictEqual(
	thanosSort([10, 20, 30, 5, 6, 7]),
	3,
	`Failed for arr = [10,20,30,5,6,7]`,
);
strictEqual(thanosSort([]), 0, `Failed for arr = []`);
strictEqual(thanosSort([5]), 1, `Failed for arr = [5]`);
strictEqual(thanosSort([2, 1]), 1, `Failed for arr = [2,1]`);
strictEqual(thanosSort([1, 2, 3, 4, 5]), 5, `Failed for arr = [1,2,3,4,5]`);
strictEqual(
	thanosSort([-5, -3, -1, 0, 2, 8]),
	6,
	`Failed for arr = [-5,-3,-1,0,2,8]`,
);
strictEqual(thanosSort([7, 7, 7, 7, 7]), 5, `Failed for arr = [7,7,7,7,7]`);
strictEqual(
	thanosSort([1, 1, 1, 1, 1, 1, 1, 1]),
	8,
	`Failed for arr = [1,1,1,1,1,1,1,1]`,
);
strictEqual(
	thanosSort([9, 8, 7, 1, 2, 3]),
	3,
	`Failed for arr = [9,8,7,1,2,3]`,
);
strictEqual(
	thanosSort([1, 2, 3, 9, 8, 7]),
	3,
	`Failed for arr = [1,2,3,9,8,7]`,
);
strictEqual(
	thanosSort([5, 4, 3, 1, 2, 6, 7, 8]),
	4,
	`Failed for arr = [5,4,3,1,2,6,7,8]`,
);
strictEqual(
	thanosSort([5, 4, 3, 2, 1, 6, 7]),
	3,
	`Failed for arr = [5,4,3,2,1,6,7]`,
);
strictEqual(
	thanosSort([3, 3, 3, 2, 2, 2]),
	3,
	`Failed for arr = [3,3,3,2,2,2]`,
);
strictEqual(thanosSort([1, 2, 3, 4, 0]), 3, `Failed for arr = [1,2,3,4,0]`);
strictEqual(
	thanosSort([8, 7, 6, 5, 4, 3, 2, 1, 9, 10, 11, 12]),
	3,
	`Failed for arr = [8,7,6,5,4,3,2,1,9,10,11,12]`,
);
strictEqual(
	thanosSort([10, 9, 8, 7, 1, 2, 3, 4, 5, 6]),
	5,
	`Failed for arr = [10,9,8,7,1,2,3,4,5,6]`,
);
