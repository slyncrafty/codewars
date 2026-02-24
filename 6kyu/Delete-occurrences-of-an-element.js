/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Delete occurrences of an element if it occurs more than n times

Description:
nough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

*/

// Solution
function deleteNth(arr, x) {
	const cache = {};
	return arr.filter((v) => (cache[v] = (cache[v] || 0) + 1) <= x);
}

// Test Codes
const dotest = (input, n, expected) => {
	const actual = deleteNth(input, n);
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅Test Passed');
	else console.log('❌Test Failed', actual, 'expected to match', expected);
};

dotest([20, 37, 20, 21], 1, [20, 37, 21]);
dotest([1, 1, 3, 3, 7, 2, 2, 2, 2], 3, [1, 1, 3, 3, 7, 2, 2, 2]);
dotest([1, 1, 1, 1, 1], 5, [1, 1, 1, 1, 1]);
dotest([], 5, []);
dotest(
	[1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1],
	3,
	[1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5],
);
dotest([12, 39, 19, 39, 39, 19, 12], 1, [12, 39, 19]);
