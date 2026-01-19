/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/587136ba2eefcb92a9000027
/* ========== ========== ========== ========== ========== ==========*/
/*
Snakes and Ladders

Description:
Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)
Task

Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.
The Board
Rules

    There are two players and both start off the board on square 0.
    Player 1 starts and alternates with player 2.
    You follow the numbers up the board in order 1=>100
    If the value of both die are the same then that player will have another go.
    Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).
    Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).
    Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)
    If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

Returns

Return "Player n Wins!" Where n is winning player that has landed on square 100 without any remainding moves left.

Return "Game over!" if a player has won and another player tries to play.

Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.
*/

// Solution
class SnakesLadders {
	constructor() {
		this.positions = [0, 0];
		this.current = 0;
		this.gameover = false;

		this.snakes = {
			16: 6,
			46: 25,
			49: 11,
			62: 19,
			64: 60,
			74: 53,
			89: 68,
			92: 88,
			95: 75,
			99: 80,
		};

		this.ladders = {
			2: 38,
			7: 14,
			8: 31,
			15: 26,
			21: 42,
			28: 84,
			36: 44,
			51: 67,
			71: 91,
			78: 98,
			87: 94,
		};
	}

	play(die1, die2) {
		if (this.gameover) return 'Game over!';
		const move = die1 + die2;
		let pos = this.positions[this.current] + move;

		if (pos > 100) {
			pos = 100 - (pos - 100);
		}

		if (this.ladders[pos]) pos = this.ladders[pos];
		else if (this.snakes[pos]) pos = this.snakes[pos];

		this.positions[this.current] = pos;

		if (pos === 100) {
			this.gameover = true;
			return `Player ${this.current + 1} Wins!`;
		}

		const result = `Player ${this.current + 1} is on square ${pos}`;

		if (die1 !== die2) {
			this.current = 1 - this.current;
		}

		return result;
	}
}
// Test Codes
const assertEquals = (actual, expected) => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};

const game = new SnakesLadders();

assertEquals(
	game.play(1, 1),
	'Player 1 is on square 38',
	"Should return: 'Player 1 is on square 38'",
);
assertEquals(
	game.play(1, 5),
	'Player 1 is on square 44',
	"Should return: 'Player 1 is on square 44'",
);
assertEquals(
	game.play(6, 2),
	'Player 2 is on square 31',
	"Should return: 'Player 2 is on square 31'",
);
assertEquals(
	game.play(1, 1),
	'Player 1 is on square 25',
	"Should return: 'Player 1 is on square 25'",
);
