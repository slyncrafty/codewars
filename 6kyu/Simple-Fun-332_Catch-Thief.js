/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5954584610080b7252000003/
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple Fun #332: Catch Thief

Description:
Given a queue in string format, like this: "X1X#2X#XX". # represents the ordinary people; "X" represents the thief; digit 1-9 represents the policeman. The numerical value represents the police's watching range. For example, 1 means the police could see 1 people in front of him and 1 people in the back.

All the thieves in the line of sight of the police will be caught!

Your task is to calculate the number of thieves who have been caught.
Example

For queue = "X1X#2X#XX", the output should be 3.

X1X#2X#XX
^ ^  ^  <--- These 3 thieves will be caught!

For queue = "X5X#3X###XXXX##1#X1X", the output should be 5.

X5X#3X###XXXX##1#X1X
^ ^  ^           ^ ^ <--- These 5 thieves will be caught!

For queue = "X#X1#X9XX", the output should be 5.

X#X1#X9XX
^ ^  ^ ^^ <--- All thieves will be caught!

*/

// Solution
function catchThief(queue) {
	const watched = [];
	for (let i = 0; i < queue.length; i++) {
		const n = Number(queue[i]);
		if (n >= 1 && n <= 9) {
			watched.push({ start: i, end: n });
		}
	}
	let caught = 0;
	for (let i = 0; i < queue.length; i++) {
		if (queue[i] === 'X') {
			for (const p of watched) {
				if (Math.abs(p.start - i) <= p.end) {
					caught++;
					break;
				}
			}
		}
	}
	return caught;
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};
assertEquals(catchThief('X1X#2X#XX'), 3);

assertEquals(catchThief('X5X#3X###XXXX##1#X1X'), 5);

assertEquals(catchThief('X#X1#X9XX'), 5);
