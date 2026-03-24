/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/65013fc50038a68939098dcf/
/* ========== ========== ========== ========== ========== ==========*/
/*
Party People

Description:
Ava, Mark, Sheila, and Pete are at a party. However, Ava and Sheila are only staying if there are at least 4 people, Pete is only staying if there's at least 1 person, and Mark is only staying if there are at least 5 people. Therefore, Mark leaves, which makes Ava and Sheila leave, and Pete is left alone.

Given an array with the preferences of every person at a party for the minimum number of people present, determine how many people will stay.
Examples

[4, 5, 4, 1] ➞ 1
# Ava's minimum number is 4, Mark's is 5, Sheila's is 4, and Pete's is 1.
# Only 1 person (Pete) stays.

[10, 12, 15, 15, 5] ➞ 0

[2, 1, 2, 0] ➞ 4

Notes

    All attendees are included in the array.
    Any person's count of people currently at the party includes themself.
    A persons preference minimum can be 0, 1, or any positive integer.
    Expect valid input only.
    0 <= len(lst) <= 10^5

*/

// Solution
function partyPeople(party) {
	party.sort((a, b) => a - b);
	let n = party.length;
	while (n > 0 && party[n - 1] > n) n--;
	return n;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
strictEqual(partyPeople([4, 5, 4, 1]), 1, 'partyPeople [4, 5, 4, 1]');
strictEqual(
	partyPeople([10, 12, 15, 15, 5]),
	0,
	'partyPeople [10, 12, 15, 15, 5]',
);
strictEqual(partyPeople([2, 1, 2, 0]), 4, 'partyPeople [2, 1, 2, 0]');
strictEqual(partyPeople([0, 0, 0, 0]), 4, 'partyPeople [0, 0, 0, 0]');
strictEqual(partyPeople([5, 5, 5, 5]), 0, 'partyPeople [5, 5, 5, 5]');
strictEqual(partyPeople([5, 5, 5, 5, 5]), 5, 'partyPeople [5, 5, 5, 5, 5]');
strictEqual(partyPeople([1, 5, 3, 5, 0]), 5, 'partyPeople [1, 5, 3, 5, 0]');
strictEqual(
	partyPeople([13, 8, 11, 15, 13, 3, 12, 13, 6, 3]),
	0,
	'partyPeople [13, 8, 11, 15, 13, 3, 12, 13, 6, 3]',
);
strictEqual(
	partyPeople([11, 3, 4, 3, 11, 4, 0, 1, 1, 3]),
	8,
	'partyPeople [11, 3, 4, 3, 11, 4, 0, 1, 1, 3]',
);
strictEqual(
	partyPeople([15, 3, 8, 0, 2, 12, 13, 7, 6]),
	3,
	'partyPeople [15, 3, 8, 0, 2, 12, 13, 7, 6]',
);
strictEqual(
	partyPeople([3, 11, 15, 5, 3, 4, 10, 8, 14, 6, 13, 1]),
	6,
	'partyPeople [3, 11, 15, 5, 3, 4, 10, 8, 14, 6, 13, 1]',
);
strictEqual(
	partyPeople([7, 14, 14, 0, 7, 3, 2, 2]),
	4,
	'partyPeople [7, 14, 14, 0, 7, 3, 2, 2]',
);
strictEqual(
	partyPeople([2, 6, 7, 4, 6, 10, 4, 3, 6, 2, 0]),
	11,
	'partyPeople [2, 6, 7, 4, 6, 10, 4, 3, 6, 2, 0]',
);
strictEqual(
	partyPeople([0, 2, 3, 5, 6, 6, 6, 7, 11, 12, 13, 14, 16, 19, 20]),
	8,
	'partyPeople [0, 2, 3, 5, 6, 6, 6, 7, 11, 12, 13, 14, 16, 19, 20]',
);
