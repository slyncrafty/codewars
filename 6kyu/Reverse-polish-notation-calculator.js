/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52f78966747862fc9a0009ae/
/* ========== ========== ========== ========== ========== ==========*/
/*
Reverse polish notation calculator

Description:
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

*/

// Solution
function calc(expr) {
	if (expr === '') return 0;
	const entries = expr.split(' ');
	const stack = [];
	for (const entry of entries) {
		if (!isNaN(entry)) {
			stack.push(parseFloat(entry));
		} else {
			const b = stack.pop();
			const a = stack.pop();
			switch (entry) {
				case '+':
					stack.push(a + b);
					break;
				case '-':
					stack.push(a - b);
					break;
				case '*':
					stack.push(a * b);
					break;
				case '/':
					stack.push(a / b);
					break;
			}
		}
	}
	return stack.pop();
}

// Test Codes
const approximately = (a, b, e, msg = '') => {
	const passed = Math.abs(a - b) <= e;

	if (passed) {
		console.log(`PASS: ${msg || `${actual} ~ ${b}`}`);
	} else {
		throw new Error(
			msg || `Expected ${a} to be approximately ${b} within ${e}`
		);
	}
};

approximately(calc(''), 0, 1e-6, 'Should work with empty string');
approximately(calc('3'), 3, 1e-6, 'Should parse numbers');
approximately(calc('3.5'), 3.5, 1e-6, 'Should parse float numbers');
approximately(calc('1 3 +'), 4, 1e-6, 'Should support addition');
approximately(calc('1 3 *'), 3, 1e-6, 'Should support multiplication');
approximately(calc('1 3 -'), -2, 1e-6, 'Should support subtraction');
approximately(calc('4 2 /'), 2, 1e-6, 'Should support division');
