/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56d9439813f38853b40000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Basics 03: Strings, Numbers and Calculation

Description:
Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

So what to do?

Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.
Easy example:

Input: "gdfgdf234dg54gf*23oP42"
Output: "54929268" (because 23454*2342=54929268)

*/

// Solution
function calculateString(st) {
	const op = st.match(/([+\-*/])/);
	const operator = op[1];
	const left = st.substring(0, op.index);
	const right = st.substring(op.index + 1);

	const numberRegex = /[\d.]/g;
	const leftNumbers = left.match(numberRegex);
	const rightNumbers = right.match(numberRegex);

	const lval = parseFloat(leftNumbers.join(''));
	const rval = parseFloat(rightNumbers.join(''));
	const operations = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => a / b,
	};

	const results = operations[operator](lval, rval);
	return String(Math.round(results));
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect!', a, b);
};
strictEqual(calculateString(';$%§fsdfsd235??df/sdfgf5gh.000kk0000'), '47');
strictEqual(calculateString('sdfsd23454sdf*2342'), '54929268');
strictEqual(
	calculateString('fsdfsd235???34.4554s4234df-sdfgf2g3h4j442'),
	'-210908'
);
strictEqual(calculateString('fsdfsd234.4554s4234df+sf234442'), '234676');
strictEqual(calculateString('a1a2b3c.c0c/a1a0b.cc00c'), '12');
