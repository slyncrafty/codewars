/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58e4d3530e1018e155000058
/* ========== ========== ========== ========== ========== ==========*/
/*
Minimum dollar bill's count

Description:
Find the minimum dollar bill's count to represent some value based on the availables bills.

You will recieve the value and an array as input (the array contains the available bills).

For instance:

minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)

minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)

minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)

minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

It is guaranteed that the value can always be divided into given bills, and there are no "tricky" edge cases.

*/

// Solution
function minimumBillCount(value, availables) {
	availables.sort((a, b) => b - a);
	let count = 0;
	for (const bill of availables) {
		if (value >= bill) {
			const n = Math.floor(value / bill);
			count += n;
			value -= n * bill;
		}
	}
	return count;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

strictEqual(minimumBillCount(100, [10, 50, 20]), 2);
strictEqual(minimumBillCount(5, [1, 10, 20]), 5);
strictEqual(minimumBillCount(500, [100, 50, 20]), 5);
strictEqual(minimumBillCount(40, [1, 10, 20]), 2);
strictEqual(minimumBillCount(40, [1]), 40);
strictEqual(minimumBillCount(1234567, [1, 10, 20]), 61735);
strictEqual(minimumBillCount(1010, [50, 1, 20]), 30);
strictEqual(minimumBillCount(10000000, [1, 10, 20, 50, 100]), 100000);
