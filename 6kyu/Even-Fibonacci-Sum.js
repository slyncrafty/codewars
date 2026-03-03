/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55688b4e725f41d1e9000065
/* ========== ========== ========== ========== ========== ==========*/
/*
Even Fibonacci Sum

Description:
Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

0 --> 0
33 --> 10
25997544 --> 19544084

*/

// Solution
function fibonacci(max) {
	let a = 0; //fib0
	let b = 1; //fib1
	let sum = 0;
	while (b < max) {
		if (b % 2 === 0) sum += b;
		[a, b] = [b, a + b]; // fib number update
	}
	return sum;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed', a, 'expected to match', b);
};

strictEqual(fibonacci(2147483647), 1485607536);
strictEqual(fibonacci(1000000000), 350704366);
strictEqual(fibonacci(100000000), 82790070);
strictEqual(fibonacci(1000000), 1089154);
strictEqual(fibonacci(1000), 798);
strictEqual(fibonacci(100), 44);
strictEqual(fibonacci(5), 2);
strictEqual(fibonacci(8), 2);
strictEqual(fibonacci(10), 10);
strictEqual(fibonacci(1), 0);
