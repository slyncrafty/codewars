/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52dca71390c32d8fb900002b
/* ========== ========== ========== ========== ========== ==========*/
/*
Adding ordinal indicator suffixes to numbers

Description:
Complete the function which should take a number and return it as a string with the correct ordinal indicator suffix (in English). That is:

     1 ==> "1st"
     2 ==> "2nd"
     3 ==> "3rd"
     4 ==> "4th"
    ... and so on

For the purposes of this kata, you may assume that the function will always be passed a non-negative integer. If the function is given 0 as an argument, it should return "0" (as a string).

To help you get started, here is an excerpt from Wikipedia's page on Ordinal Indicators:

    st is used with numbers ending in 1 (e.g. 1st, pronounced first)
    nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
    rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
    As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
    th is used for all other numbers (e.g. 9th, pronounced ninth).

*/

// Solution
function numberToOrdinal(n) {
	if (n === 0) return '0';
	const str = String(n);
	const lastTwo = n % 100;
	const lastOne = n % 10;
	if (lastTwo >= 11 && lastTwo <= 13) return str + 'th';
	if (lastOne === 1) return str + 'st';
	if (lastOne === 2) return str + 'nd';
	if (lastOne === 3) return str + 'rd';
	return str + 'th';
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('✅PASS');
	else console.log('❌FAILED');
};
assertEquals(numberToOrdinal(1), '1st');
assertEquals(numberToOrdinal(2), '2nd');
assertEquals(numberToOrdinal(3), '3rd');
assertEquals(numberToOrdinal(4), '4th');
assertEquals(numberToOrdinal(12), '12th');
assertEquals(numberToOrdinal(213), '213th');
