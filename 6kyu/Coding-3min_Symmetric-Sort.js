/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5705aeb041e5befba20010ba/
/* ========== ========== ========== ========== ========== ==========*/
/*
Coding 3min : Symmetric Sort

Description:
 Give you a number array(element range:1-99, array length range: 6-40), please do a "Symmetric Sort" with it.

rule: sort the number, the first smallest number at the left side, the second smaller number at the right side, and so on...
Example:

example1:                        example2:

array=[1,2,3,4,5,6,7,8,9]        array=[1,1,2,2,3,3,4,4,5]

after sort, should return:       after sort, should return:

      [1,3,5,7,9,8,6,4,2]              [1,2,3,4,5,4,3,2,1]

See more example at the testcases.
*/

// Solution
function sc(array) {
	const sorted = array.sort((a, b) => a - b);
	let l = [];
	let r = [];
	for (let i = 0; i < array.length; i++) {
		(i % 2 ? r : l).push(array[i]);
	}
	return l.concat(r.reverse());
}

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
deepEqual(sc([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 3, 5, 7, 9, 8, 6, 4, 2]);
deepEqual(sc([1, 1, 2, 2, 3, 3, 4, 4, 5]), [1, 2, 3, 4, 5, 4, 3, 2, 1]);
deepEqual(sc([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 3, 5, 7, 9, 8, 6, 4, 2]);
deepEqual(sc([5, 4, 4, 3, 3, 2, 2, 1, 1]), [1, 2, 3, 4, 5, 4, 3, 2, 1]);
deepEqual(sc([11, 2, 33, 4, 55, 6]), [2, 6, 33, 55, 11, 4]);
deepEqual(sc([5, 12, 5, 8, 33, 13]), [5, 8, 13, 33, 12, 5]);
