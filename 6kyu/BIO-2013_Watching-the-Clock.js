/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a1ac2a0f72158e049000c46/
/* ========== ========== ========== ========== ========== ==========*/
/*
BIO 2013 : Watching the Clock

Description:
This problem is taken from the British Informatics Olympiad 2013 (31st of December 2012).

Two clocks, which show the time in hours and minutes using the 24 hour clock, are running at different speeds. Each clock is an exact number of minutes per hour fast. Both clocks start showing the same time (00:00) and are checked regularly every hour (starting after one hour) according to an accurate timekeeper. What time will the two clocks show on the first occasion when they are checked and show the same time?

NB: For this question we only care about the clocks matching when they are checked.

For example, suppose the first clock runs 1 minute fast (per hour) and the second clock runs 31 minutes fast (per hour).

• When the clocks are first checked after one hour, the first clock will show 01:01 and the second clock will show 01:31;

• When the clocks are checked after two hours, they will show 02:02 and 03:02;

• After 48 hours the clocks will both show 00:48

Write a function which takes in a two integers as parameters, indicating the number of minutes fast (per hour) of the first and second clock respectively.

You should output the time shown on the clocks when they first match. Both the hour and the minutes should be displayed with two digits (24 hour format).

*/

// Solution
const c = 24 * 60;
function timeAtSync(first, second) {
	const diff = Math.abs(first - second);
	if (diff === 0) {
		if (first === 0) return '01:00';
		return convertTime(first + 60);
	}
	const t = Math.floor(c / gcd(c, diff));
	const time = (t * (60 + first)) % c;
	return convertTime(time);
}

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const convertTime = (time) => {
	const hour = Math.floor(time / 60);
	const min = time % 60;
	return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
};

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};
assertEquals(timeAtSync(1, 31), '00:48');
assertEquals(timeAtSync(0, 0), '01:00');
assertEquals(timeAtSync(18, 18), '01:18');
assertEquals(timeAtSync(0, 15), '00:00');
assertEquals(timeAtSync(21923, 26268), '14:24');
