/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5469e0798a3502f4a90005c9/
/* ========== ========== ========== ========== ========== ==========*/
/*
Rotate Array

Description:
Create a method named "rotate" that returns a given array with the elements inside the array rotated n spaces.

If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.

Example:

with array [1, 2, 3, 4, 5]

n = 1      =>    [5, 1, 2, 3, 4]
n = 2      =>    [4, 5, 1, 2, 3]
n = 3      =>    [3, 4, 5, 1, 2]
n = 4      =>    [2, 3, 4, 5, 1]
n = 5      =>    [1, 2, 3, 4, 5]
n = 0      =>    [1, 2, 3, 4, 5]
n = -1     =>    [2, 3, 4, 5, 1]
n = -2     =>    [3, 4, 5, 1, 2]
n = -3     =>    [4, 5, 1, 2, 3]
n = -4     =>    [5, 1, 2, 3, 4]
n = -5     =>    [1, 2, 3, 4, 5]

The rotation shouldn't be limited by the indices available in the array. Meaning that if we exceed the indices of the array it keeps rotating.

Example:

with array [1, 2, 3, 4, 5]

n = 7        =>    [4, 5, 1, 2, 3]
n = 11       =>    [5, 1, 2, 3, 4]
n = 12478    =>    [3, 4, 5, 1, 2]

*/

// Solution
function rotate(data, n) {
	if (!data || data.length === 0) return [];
	n = n % data.length;
	if (n === 0) return data;
	return data.slice(-n).concat(data.slice(0, -n));
}

// Test Codes
const deepEqual = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('Correct!');
	else console.log('Incorrect', a, b);
};
deepEqual(rotate([1, 2, 3, 4, 5], 1), [5, 1, 2, 3, 4]);
deepEqual(rotate([1, 2, 3, 4, 5], -1), [2, 3, 4, 5, 1]);
deepEqual(rotate([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]);
deepEqual(rotate([1, 2, 3, 4, 5], -2), [3, 4, 5, 1, 2]);
deepEqual(rotate([1, 2, 3, 4, 5], 3), [3, 4, 5, 1, 2]);
deepEqual(rotate([1, 2, 3, 4, 5], -3), [4, 5, 1, 2, 3]);
deepEqual(rotate([1, 2, 3, 4, 5], 4), [2, 3, 4, 5, 1]);
deepEqual(rotate([1, 2, 3, 4, 5], -4), [5, 1, 2, 3, 4]);
deepEqual(rotate([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
deepEqual(rotate([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
deepEqual(rotate([1, 2, 3, 4, 5], 6), [5, 1, 2, 3, 4]);
deepEqual(rotate([1, 2, 3, 4, 5], -6), [2, 3, 4, 5, 1]);
deepEqual(rotate([true, true, false], 2), [true, false, true]);
deepEqual(rotate([1, 2, 3, 4, 5], 12478), [3, 4, 5, 1, 2]);
deepEqual(rotate(['a', 'b', 'c'], 2), ['b', 'c', 'a']);
deepEqual(rotate([], 976999), []);
