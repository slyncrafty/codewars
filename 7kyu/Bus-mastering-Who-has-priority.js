/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Bus mastering - Who has priority ? 

Description:
When multiple master devices are connected to a single bus, there needs to be an arbitration in order to choose which of them can have access to the bus (and 'talk' with a slave).

We implement here a very simple model of bus mastering. Given n, a strictly-positive integer representing the number of masters connected to the bus, and a fixed priority order (the first master has more access priority than the second and so on...), the task is to choose the selected master.

In practice, you are given a string inp of length n representing the n masters' requests to get access to the bus, and you should return a string representing the masters, showing which one of them was granted access.

(The parameter n is redundant as it is always equal to the length of inp.)
Detailed Example

The string "1101" means that master 0, master 1 and master 3 have requested access to the bus.

Knowing that master 0 has the highest priority, the output of the function should be: "1000"
Other Examples

"001000101", 9 -> "001000000"
"000000101", 9 -> "000000100"

*/

// Solution
function arbitrate(input, n) {
	const master = input.indexOf(1);
	return master === -1
		? input
		: '0'.repeat(master) + '1' + '0'.repeat(n - master - 1);
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!');
};

assertEquals(
	arbitrate('001000101', 9),
	'001000000',
	'Error, it should pass all .'
);
assertEquals(
	arbitrate('000000101', 9),
	'000000100',
	'Error, it should pass all .'
);
assertEquals(arbitrate('0000', 4), '0000', 'Error, it should pass all tests.');
