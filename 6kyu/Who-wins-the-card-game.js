/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a03157f8ba914fcf50000d4
/* ========== ========== ========== ========== ========== ==========*/
/*
Who wins the card game?

Description:
Ben, Amy and Sam are playing a card game. It's a bit like blackjack where the person whose score is the closest to but not bigger than 21 is the winner. However, Ben, Amy and Sam are in a hurry so they only get to pick one extra card if they want to. Also they've decided that Aces are always equal to 10.

Your job is to write a function that returns a nested array of the players and their scores in the order of winner to loser.

Arguments:

    An object containing players and their cards. Each player will need to have their cards added together to work out their current score.

    An extra card which will need to be added to certain players scores

    An array containing the names of players who choose to have the value of the extra card added to their score

Rules:

    The person whose name is in the second argument must have the value of the extra card added to their score

    If there is a draw, players with the same score must be presented in alphabetic order e.g. if Ben and Sam both have a score of 10, Ben must be written first.

    All picture cards(A, K, Q, J) are equal to 10

    Remember if a player's score exceeds 21 they cannot win

Example
var players = {
  "Ben" : "5, 2",
  "Amy" : "4, 3",
  "Sam" : "3, 10",
};

whoWins(players, 3, ["Ben", "Amy"]) 
//should return [["Sam", 13], ["Amy", 10], ["Ben", 10]];

*/

// Solution
function whoWon(players, extraCard, extraTakers) {
	const result = [];
	const names = Object.keys(players);
	const pictureCards = ['A', 'K', 'Q', 'J'];

	function getCardValue(card) {
		if (pictureCards.includes(card)) return 10;
		return Number(card);
	}
	const extraCardValue = getCardValue(extraCard);

	for (let i = 0; i < names.length; i++) {
		const name = names[i];
		let score = players[name]
			.split(', ')
			.reduce((a, c) => a + getCardValue(c), 0);
		if (extraTakers.includes(name)) {
			score += extraCardValue;
		}
		result.push([name, score]);
	}
	// sorting: divide groups: safes first(<=21) and then busted(>21)
	// within each group, sort by closeness to 21 then handle ties alphabetically
	result.sort((a, b) => {
		const scoreA = a[1];
		const scoreB = b[1];
		const isSafeA = scoreA <= 21;
		const isSafeB = scoreB <= 21;

		// Winners always come before busted players
		if (isSafeA !== isSafeB) {
			return isSafeA ? -1 : 1;
		}

		// Within same group (both winners or both busted), sort by score
		if (scoreA !== scoreB) {
			if (isSafeA) {
				return scoreB - scoreA; // Safes: higher scores first
			} else {
				return scoreA - scoreB; // Busted: lower scores first (closer to 21)
			}
		}
		// Same score: sort alphabetically
		return a[0].localeCompare(b[0]);
	});

	return result;
}
// Test Codes

//extraCard
var players = { Ben: '8, 9', Amy: '2, Q', Sam: '2, 3' };
var actual = whoWon(players, 'K', ['Sam']);
var expected = [
	['Ben', 17],
	['Sam', 15],
	['Amy', 12],
];
deepEqual(actual, expected);

// draw
var players = { Ben: '5, 2', Amy: '4, 3', Sam: '3, 10' };
var actual = whoWon(players, 3, ['Ben', 'Amy']);
var expected = [
	['Sam', 13],
	['Amy', 10],
	['Ben', 10],
];
deepEqual(actual, expected);

//bust
var players = { Ben: 'K, Q', Amy: '8, 9', Sam: '2, 5' };

var actual = whoWon(players, 3, ['Ben', 'Amy']);
var expected = [
	['Amy', 20],
	['Sam', 7],
	['Ben', 23],
];

deepEqual(actual, expected);

//whoWon when someone wants an extra card but has a score of 21
var players = { Ben: '9, 7', Amy: '9, 9', Sam: 'K, Q' };

var actual = whoWon(players, 3, ['Amy']);
var expected = [
	['Amy', 21],
	['Sam', 20],
	['Ben', 16],
];

deepEqual(actual, expected);
