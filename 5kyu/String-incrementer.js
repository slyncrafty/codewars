/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/
/* ========== ========== ========== ========== ========== ==========*/
/*
String incrementer

Description:
Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

// Solution
function incrementString(strng) {
	const match = strng.match(/\d*$/);
	const num = match[0];
	if (!num.length) return strng + '1';

	const str = strng.slice(0, -num.length);
	const newNum = String(Number(num) + 1);
	const padDigits = num.length - newNum.length;

	return str + (padDigits > 0 ? '0'.repeat(padDigits) : '') + newNum;
}

// Test Codes
function doTest(input, expected) {
	const actual = incrementString(input);
	const equal = (a, b, msg) => {
		if (a === b) console.log(`✅Test Passed -- for string: "${input}"`);
		else
			console.log(
				`❌Test Failed -- ${actual}, ${expected}, for string: "${input}"`,
			);
	};
	equal(actual, expected, `for string: "${input}"\n`);
}

doTest('foobar000', 'foobar001');
doTest('foobar999', 'foobar1000');
doTest('foobar00999', 'foobar01000');
doTest('foo', 'foo1');
doTest('foobar001', 'foobar002');
doTest('foobar1', 'foobar2');
doTest('1', '2');
doTest('009', '010');
doTest('fo99obar99', 'fo99obar100');
