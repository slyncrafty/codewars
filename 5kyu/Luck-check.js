/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/
/* ========== ========== ========== ========== ========== ==========*/
/*
Luck check

Description:
In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:

003111    #             3 = 1 + 1 + 1
813372    #     8 + 1 + 3 = 3 + 7 + 2
17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6

Such tickets were either eaten after being used or collected for bragging rights.

Your task is to write a funtion luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.

*/

// Solution
function luckCheck(ticket) {
	for (const c of ticket) {
		if (c < '0' || c > '9') {
			throw new Error('Invalid ticket');
		}
	}

	const n = ticket.length;
	const even = n % 2 === 0;
	let left, right;
	if (even) {
		left = splitSum(ticket.slice(0, n / 2));
		right = splitSum(ticket.slice(n / 2));
	} else {
		left = splitSum(ticket.slice(0, (n - 1) / 2));
		right = splitSum(ticket.slice((n + 1) / 2));
	}
	return left === right;
}

const splitSum = (str) => {
	return str.split('').reduce((a, c) => a + Number(c), 0);
};

// Test Codes
function throws(fn) {
	try {
		fn();
		return false;
	} catch {
		return true;
	}
}
const strictEqual = (actual, expected, message = '') => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED.', message);
};

strictEqual(
	luckCheck('683179'),
	true,
	"The function doesn't recognise a lucky ticket number"
);

strictEqual(
	luckCheck('683000'),
	false,
	"The function doesn't return true for a wrong number"
);

console.log(
	throws(
		() => luckCheck('6F43E8'),
		undefined,
		undefined,
		'It should throw an error for invalid input'
	)
);
