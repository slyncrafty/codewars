/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple time difference

Description:
In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.

In the second example, the alarm sounds 4 times in a day.

More examples in test cases. Good luck!

*/

// Solution
function solve(arr) {
	if (arr.length === 1) return '23:59';
	const formatToMin = (t) => t.split(':').reduce((h, m) => h * 60 + +m, 0);
	const uniqArr = [...new Set(arr)].map(formatToMin).sort((a, b) => a - b);
	const alarmLength = 1;
	const intervals = uniqArr.map(
		(t, i) =>
			((uniqArr[(i + 1) % uniqArr.length] - t + 1440) % 1440) - alarmLength,
	);

	const maxInterval = Math.max(...intervals);
	return `${String(Math.floor(maxInterval / 60) | 0).padStart(2, '0')}:${String(maxInterval % 60).padStart(2, '0')}`;
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
strictEqual(solve(['14:51']), '23:59');
strictEqual(solve(['23:00', '04:22', '18:05', '06:24']), '11:40');
strictEqual(solve(['21:14', '15:34', '14:51', '06:25', '15:30']), '09:10');
