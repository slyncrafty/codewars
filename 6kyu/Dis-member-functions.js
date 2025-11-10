/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/545b860f82e55db16500055
/* ========== ========== ========== ========== ========== ==========*/
/*
(Dis)member functions

Description:
As a part of this Kata, you need to write a function to dismember functions. You need to extract the names of all formal arguments of the function from its definition as an array.

For example, given is a function as shown below:

function add (a, b) {
    return a + b;
}

Running dismember on the function would provide:

dismember(add) => ["a", "b"]

There could be functions that are declared without any explicitly named variables, for example:

function average () {
    return Array.prototype.slice.apply(arguments).reduce(function (a, c) {
        return a + c;
    }, 0) / arguments.length;
}

I'm sure the above function implementation is not the best, it's not even great and would run into issues when no arguments are passed. For such functions, return an empty array.

dismember(average) => []

Please note: The internal implementation of the function holds no importance in this Kata, one just needs to dismember the arguments and return them in the sequence in which they are named.

*/

// Solution
function dismember(func) {
	const str = func.toString();
	const match = str.match(/\(([^()]+)\)/);
	if (!match || match === null) return [];
	return match[1].split(',').map((e) => e.trim());
}

// Test Codes
const deepEqual = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}

	if (ok) console.log('Correct');
	else console.log('Incorrect', a, b);
};

deepEqual(
	dismember(function () {
		return 0;
	}),
	[],
	'Returns an empty array for a function with no explicity defined arguments'
);
deepEqual(
	dismember(function (arg1) {
		return arg1;
	}),
	['arg1'],
	'Returns name of the only arguments for a function that takes in a single argument'
);
deepEqual(
	dismember(function (z, b) {
		return z + b;
	}),
	['z', 'b'],
	'Returns names of two arguments for a function that takes in two arguments'
);
deepEqual(
	dismember(function (a, c) {
		return a + c;
	}),
	['a', 'c'],
	'Returns names of two arguments for a function that takes in two arguments, written in another way'
);
