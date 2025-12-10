/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54db3f2903e88ad6c30002ff/
/* ========== ========== ========== ========== ========== ==========*/
/*
Hello W... wait what?

Description:
In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

Disallowed functionality:

    Strings
    Numbers
    Regular Expressions
    Functions named "Hello", "World", "HelloWorld" or anything similar.
    Object keys named "Hello", "World", "HelloWorld" or anything similar.

Without using the above, output the string "Hello World!" to prove that there is always a way.

*/

// Solution
var helloWorld = function () {
	const zero = [];
	const one = !zero.length;
	const two = one + one;
	const three = two + one;
	const four = two + two;
	const five = four + one;
	const six = three + three;
	const seven = six + one;
	const eight = four + four;
	const ten = five + five;
	const thirtyTwo = ten * three + two;
	const thirtyThree = thirtyTwo + one;
	const seventyTwo = seven * ten + two;
	const eightySeven = eight * ten + seven;
	const oneHundred = ten * ten;
	const oneHundredOne = oneHundred + one;
	const oneHundredEight = oneHundredOne + seven;
	const oneHundredEleven = oneHundredEight + three;
	const oneHundredFourteen = oneHundredEleven + three;

	const result =
		String.fromCharCode(
			seventyTwo,
			oneHundredOne,
			oneHundredEight,
			oneHundredEight,
			oneHundredEleven,
			thirtyTwo,
			eightySeven,
			oneHundredEleven,
			oneHundredFourteen,
			oneHundredEight,
			oneHundred
		) + String.fromCharCode(thirtyThree);

	return result;
};

// Test Codes
const test = (actual, expected) => {
	if (actual === expected) console.log('✅PASS');
	else console.log('❌FAILED');
};

test(helloWorld(), 'Hello World!');
