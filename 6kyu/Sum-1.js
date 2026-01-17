/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58733d9b0e9cf3a824000050
/* ========== ========== ========== ========== ========== ==========*/
/*
Sum #1

Description:
Assignment:

Write a function named sum which performs addition in the way shown below:

sum(4)(5)(9)(); // => 18
sum(5)();       // => 5
sum();          // => 0

NOTE: Pay attention that the last brackets are left empty to indicate the end of operations.
*/

// Solution
function sum(x) {
	if (x === undefined) return 0;
	let total = x || 0;

	return function next(y) {
		if (y === undefined) return total;
		total += y;
		return next;
	};
}

// Test Codes
const assertEquals = (actual, expected) => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};

assertEquals(sum(7)(5)(), 12);
assertEquals(sum(5)(0)(5)(), 10);
assertEquals(sum(5)(0)(0)(5)(), 10);
assertEquals(sum(5)(1)(3)(4)(2)(), 15);
assertEquals(sum(27)(32)(15)(), 74);
assertEquals(sum(5)(), 5);
assertEquals(sum(), 0);
