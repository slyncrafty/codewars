/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Array Exchange

Description:
Array Exchange and Reversing

It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.

# before
my_array = ['a', 'b', 'c']
other_array = [1, 2, 3]

exchange_arrays(my_array, other_array)

# after
my_array == [3, 2, 1]
other_array == ['c', 'b', 'a']

*/

// Solution
function exchangeWith(a, b) {
	const temp = a.slice();
	a.length = 0;
	a.push(...b.reverse());
	b.length = 0;
	b.push(...temp.reverse());
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
	};
	const ok = equal(actual, expected);
	if (ok) console.log('✅ PASS');
	else console.log('❌ FAIL:', actual, 'expected to match', expected);
};

const a = ['1', '2', '3', '4', '5', '6', '7'];
const b = ['a', 'b', 'c'];
exchangeWith(a, b);
deepEqual(a, ['c', 'b', 'a']);
deepEqual(b, ['7', '6', '5', '4', '3', '2', '1']);
