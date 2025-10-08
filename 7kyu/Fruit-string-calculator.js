/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56d9439813f38853b40000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Fruit string calculator

Description:
You are given a string of words and numbers. Extract the expression including:

    the operator: either addition ("gains") or subtraction ("loses")
    the two numbers that we are operating on

Return the result of the calculation.

Notes:

    "loses" and "gains" are the only two words describing operators
    No fruit debts nor bitten apples = The numbers are integers and no negatives

Examples

"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40

*/

// Solution
function calculate(string) {
	const operator = string.match(/(gains)|(loses)/);
	const [num1, num2] = string.match(/(\d+)/g);
	if (operator[0] === 'gains') return parseInt(num1) + parseInt(num2);
	else if (operator[0] === 'loses') return parseInt(num1) - parseInt(num2);
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect!', a, b);
};

strictEqual(calculate('Panda has 48 apples and loses 4'), 44);
strictEqual(calculate('Jerry has 34 apples and gains 6'), 40);
