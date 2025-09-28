/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56d9439813f38853b40000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Easy Time Convert

Description:
This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

If the input is 0 or negative value, then you should return "00:00"

Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.
Example

If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.

Good luck! :D

*/

// Solution
function timeConvert(num) {
	if (num <= 0) return '00:00';
	if (num < 60) return `00:${String(num).padStart(2, '0')}`;
	const hour = Math.floor(num / 60);
	const min = num % 60;
	return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
}
// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect', a, b);
};

strictEqual(timeConvert(0), '00:00');
strictEqual(timeConvert(-6), '00:00');
strictEqual(timeConvert(8), '0' + 0 + ':' + '0' + 8);
strictEqual(timeConvert(32), '0' + 0 + ':' + 32);
strictEqual(timeConvert(75), '0' + 1 + ':' + 15);
strictEqual(timeConvert(63), '0' + 1 + ':' + '0' + 3);
strictEqual(timeConvert(134), '0' + 2 + ':' + 14);
strictEqual(timeConvert(180), '0' + 3 + ':' + '0' + 0);
strictEqual(timeConvert(970), 16 + ':' + 10);
strictEqual(timeConvert(565757), 9429 + ':' + 17);
