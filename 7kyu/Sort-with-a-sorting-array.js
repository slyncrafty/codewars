/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59dc8288fc3c49cc3f000039
/* ========== ========== ========== ========== ========== ==========*/
/*
Sort with a sorting array

Description:
Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

    sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
    sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

*/

// Solution
const sort = (initialArray, sortingArray) => {
	const res = [];
	for (let i = 0; i < initialArray.length; i++) {
		res[sortingArray[i]] = initialArray[i];
	}
	return res;
};

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
deepEqual(
	sort(['x', 'y', 'z'], [1, 2, 0]),
	['z', 'x', 'y'],
	"For initialArray = ['x', 'y', 'z'], sortingArray = [1, 2, 0]",
);
deepEqual(
	sort(['x', 'y', 'z'], [0, 1, 2]),
	['x', 'y', 'z'],
	"For initialArray = ['x', 'y', 'z'], sortingArray = [0, 1, 2]",
);
deepEqual(
	sort([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]),
	[1, 2, 3, 4, 5],
	'For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 1, 2, 3, 4]',
);
deepEqual(
	sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]),
	[1, 3, 2, 5, 4],
	'For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 2, 1, 4, 3]',
);
