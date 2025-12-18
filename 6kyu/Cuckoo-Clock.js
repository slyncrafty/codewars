/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/656e4602ee72af0017e37e82
/* ========== ========== ========== ========== ========== ==========*/
/*
Cuckoo Clock

Description:
The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At the beginning of each hour (1-12), it chimes out the hour. Given the current time and a positive integer n, determine the time when the cuckoo bird has chimed n times.

Inputs:
initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.
n - an integer representing the target number of chimes, with 1 ≤ n ≤ 200.
Output: The time when the cuckoo bird has chimed n times - a string in the same format as initial_time.

If the cuckoo bird chimes at initial_time, include those chimes in the count. If the n'thchime is reached on the hour, report the time at the start of that hour (i.e. assume the cuckoo finishes chiming before the minute is up).

Example: "03:38", 19 should return "06:00".
Explanation: It chimes once at "03:45",4 times at "04:00", once each at "04:15", "04:30", "04:45", 5 times at "05:00", and once each at "05:15", "05:30", "05:45". At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at "06:00".

Source: International Collegiate Programming Contest, North Central North American Regional, 2023.
*/

// Solution
function cuckooClock(initial_time, n) {
	let [h, m] = initial_time.split(':').map(Number);

	const chimes = (hour, minute) => {
		if (minute === 0) return hour === 0 ? 12 : hour;
		if (minute === 15 || minute === 30 || minute === 45) return 1;
		return 0;
	};

	while (true) {
		const c = chimes(h, m);
		if (c > 0) {
			n -= c;
			if (n <= 0) {
				return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
			}
		}

		m++;
		if (m === 60) {
			m = 0;
			h++;
			if (h === 13) h = 1;
		}
	}
}
// Test Codes
const test = (a, b) => {
	if (a === b) console.log('✅PASS');
	else console.log('❌FAILED');
};

console.log('Simple Tests');
let initialTimes = ['07:22', '12:22', '01:30', '04:01', '03:38'];
let chimes = [1, 2, 2, 10, 19];
let expectedTimes = ['07:30', '12:45', '01:45', '05:30', '06:00'];

for (let i = 0; i < initialTimes.length; i++) {
	test(cuckooClock(initialTimes[i], chimes[i]), expectedTimes[i]);
}

console.log('Starting on the Hour');
initialTimes = ['10:00', '10:00', '10:00', '10:00', '10:00'];
chimes = [1, 10, 11, 13, 20];
expectedTimes = ['10:00', '10:00', '10:15', '10:45', '11:00'];

for (let i = 0; i < initialTimes.length; i++) {
	test(cuckooClock(initialTimes[i], chimes[i]), expectedTimes[i]);
}

console.log('Crossing Twelve');
// From "12:MM" to "01:NN"
initialTimes = ['12:30', '12:30', '12:30', '12:30', '09:53'];
chimes = [1, 2, 3, 4, 50];
expectedTimes = ['12:30', '12:45', '01:00', '01:15', '02:30'];

for (let i = 0; i < initialTimes.length; i++)
	test(cuckooClock(initialTimes[i], chimes[i]), expectedTimes[i]);

console.log('Around the Clock');
// From "HH:MM" to "HH:NN" 12 hours later
initialTimes = ['08:17', '08:17', '08:17', '08:17', '08:17'];
chimes = [113, 114, 115, 150, 200];
expectedTimes = ['08:00', '08:15', '08:30', '11:00', '05:45'];

for (let i = 0; i < initialTimes.length; i++)
	test(cuckooClock(initialTimes[i], chimes[i]), expectedTimes[i]);
