/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/534ffb35edb1241eda0015fe
/* ========== ========== ========== ========== ========== ==========*/
/*
Blackjack Scorer

Description:
Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. If there is no score less than or equal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25

*/

// Solution
function scoreHand(cards) {
	let counts = 0;
	let aces = 0;
	for (const card of cards) {
		if (card === 'A') {
			aces++;
			counts += 11;
		} else if (card === 'J' || card === 'Q' || card === 'K') {
			counts += 10;
		} else {
			counts += Number(card);
		}
	}

	while (counts > 21 && aces > 0) {
		counts -= 10;
		aces--;
	}
	return counts;
}

// Test Codes
const strictEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(actual, expected)) console.log('✅PASSED');
	else console.log('❌FAILED');
};

strictEqual(scoreHand(['2', '3']), 5);
strictEqual(scoreHand(['7', '7', '8']), 22);
strictEqual(scoreHand(['4', '7', '8']), 19);

// should score J, Q and K as 10
strictEqual(scoreHand(['K', 'J', 'Q']), 30);

// should core hands with Aces correctly
strictEqual(scoreHand(['A', '3']), 14);
strictEqual(scoreHand(['A', 'A']), 12);
strictEqual(scoreHand(['A', '2', 'A', '9', '9']), 22);
