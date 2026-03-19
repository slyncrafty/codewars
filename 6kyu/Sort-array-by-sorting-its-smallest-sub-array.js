/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59aac10dd0a5ff951100002a
/* ========== ========== ========== ========== ========== ==========*/
/*
Sort array by sorting its smallest sub-array

Description:
Given an array of integers, arr, find out 2 indices m, n(0<=m<=arr.length-1, 0<=n<=arr.length-1, m<=n), so that as long as all elements in the subarray(from index m to n, indices m and n inclusive) are sorted properly, with this sorted subarray relacing original subarray, the whole array is sorted (no matter ascendingly or descendingly).

The subarray should include the least number of elements, means (n-m) must be of the smallest value, and n should also be the smallest one.

The function accept an array of integers, arr, reutrn the subarray's start and end index in array format, [m,n] as a result.

For example, in an array [1,2,3,6,4,4], the SMALLEST(with the least numbers of integers) subarray to be found is [6,4,4], if we sort it to [4,4,6], then replace the original subarray, the whole array now turns to be[1,2,3,4,4,6], which is sorted completely. This subarray begins from index 3, and ends in index 5, so the result is [3,5].

If all elements in the array are the same, return array [0,0]. If all elements in the array are already sorted, no matter ascendingly or descendingly, return [0,0] as well.
*/

// Solution
function findIndexOfSubArray(array) {
	const sortedAsc = [...array].sort((a, b) => a - b);
	const sortedDesc = [...sortedAsc].reverse();

	const indicesAsc = findIndices(sortedAsc);
	const indicesDesc = findIndices(sortedDesc);

	const lenAsc = indicesAsc[1] - indicesAsc[0];
	const lenDesc = indicesDesc[1] - indicesDesc[0];

	if (lenAsc < lenDesc) return indicesAsc;
	if (lenDesc < lenAsc) return indicesDesc;

	return indicesAsc[1] <= indicesDesc[1] ? indicesAsc : indicesDesc;

	function findIndices(sorted) {
		const start = array.findIndex((n, i) => n !== sorted[i]);
		if (start < 0) return [0, 0];

		const end = array.findLastIndex((n, i) => n !== sorted[i]);
		return [start, end];
	}
}

// Test Cases
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

deepEqual(findIndexOfSubArray([1, 2, 323, 45656, 2, 2, 345, 6, 2, 2]), [2, 9]);
deepEqual(findIndexOfSubArray([6, 5, 4, 1, 2, 3]), [3, 5]);
deepEqual(findIndexOfSubArray([9, 2, 32, 123, 3, 2, 2]), [0, 4]);
