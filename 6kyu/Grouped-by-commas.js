/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5274e122fc75c0943d000148/
/* ========== ========== ========== ========== ========== ==========*/
/*
Grouped by commas

Description:
Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n <= 2147483647
Examples

       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"

*/

// Solution
function groupByCommas(n) {
	let s = String(n);
	let result = '';
	let count = 0;
	// looping from right to left
	for (let i = s.length - 1; i >= 0; i--) {
		result = s[i] + result;
		count++;
		if (count === 3 && i !== 0) {
			result = ',' + result;
			count = 0;
		}
	}
	return result;
}

// using js
// function groupByCommas(n) {
// 	return n.toLocaleString('en-US');
// }

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};

strictEqual(groupByCommas(1), '1');
strictEqual(groupByCommas(12), '12');
strictEqual(groupByCommas(123), '123');
strictEqual(groupByCommas(1234), '1,234');
strictEqual(groupByCommas(12345), '12,345');
strictEqual(groupByCommas(123456), '123,456');
strictEqual(groupByCommas(1234567), '1,234,567');
strictEqual(groupByCommas(12345678), '12,345,678');
strictEqual(groupByCommas(123456789), '123,456,789');
strictEqual(groupByCommas(1234567890), '1,234,567,890');
strictEqual(groupByCommas(2147483647), '2,147,483,647');
strictEqual(groupByCommas(0), '0');
