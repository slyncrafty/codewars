/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/586c0909c1923fdb89002031
/* ========== ========== ========== ========== ========== ==========*/
/*
Connect 4

Description:
Task

The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.

Rules

If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

If the game has been won by a player, any following moves should return ”Game has finished!”.

Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
Player 1 starts the game every time and alternates with player 2.

The columns are numbered 0-6 left to right.

*/

// Solution
class Connect4 {
	constructor() {
		this.rows = 6;
		this.cols = 7;
		this.board = Array.from({ length: this.rows }, () =>
			Array(this.cols).fill(0)
		);
		this.currentPlayer = 1;
		this.gameOver = false;
	}

	play(column) {
		if (this.gameOver) return 'Game has finished!';

		let row = -1;
		for (let r = this.rows - 1; r >= 0; r--) {
			if (this.board[r][column] === 0) {
				row = r;
				break;
			}
		}
		if (row === -1) return 'Column full!';

		this.board[row][column] = this.currentPlayer;

		if (this.checkWin(row, column)) {
			this.gameOver = true;
			return `Player ${this.currentPlayer} wins!`;
		}

		const turn = this.currentPlayer;
		this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
		return `Player ${turn} has a turn`;
	}

	checkWin(r, c) {
		const directions = [
			[0, 1],
			[1, 0],
			[1, 1],
			[1, -1],
		];

		for (const [dr, dc] of directions) {
			let count = 1;
			count += this.countDirections(r, c, dr, dc);
			count += this.countDirections(r, c, -dr, -dc);
			if (count >= 4) return true;
		}
		return false;
	}

	countDirections(r, c, dr, dc) {
		let count = 0;
		const player = this.currentPlayer;
		let nr = r + dr;
		let nc = c + dc;

		while (
			nr >= 0 &&
			nr < this.rows &&
			nc >= 0 &&
			nc < this.cols &&
			this.board[nr][nc] === player
		) {
			count++;
			nr += dr;
			nc += dc;
		}
		return count;
	}
}

// Test Codes
const strictEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else return false;
	};
	let ok = equal(actual, expected);
	if (ok) console.log('✅PASSED!');
	else console.log('❌FAILED');
};

let game = new Connect4();
strictEqual(game.play(0), 'Player 1 has a turn');
strictEqual(game.play(0), 'Player 2 has a turn');

game = new Connect4();
strictEqual(game.play(0), 'Player 1 has a turn');
strictEqual(game.play(1), 'Player 2 has a turn');
strictEqual(game.play(0), 'Player 1 has a turn');
strictEqual(game.play(1), 'Player 2 has a turn');
strictEqual(game.play(0), 'Player 1 has a turn');
strictEqual(game.play(1), 'Player 2 has a turn');
strictEqual(game.play(0), 'Player 1 wins!');

game = new Connect4();
strictEqual(game.play(4), 'Player 1 has a turn');
strictEqual(game.play(4), 'Player 2 has a turn');
strictEqual(game.play(4), 'Player 1 has a turn');
strictEqual(game.play(4), 'Player 2 has a turn');
strictEqual(game.play(4), 'Player 1 has a turn');
strictEqual(game.play(4), 'Player 2 has a turn');
strictEqual(game.play(4), 'Column full!');

game = new Connect4();
strictEqual(game.play(1), 'Player 1 has a turn');
strictEqual(game.play(1), 'Player 2 has a turn');
strictEqual(game.play(2), 'Player 1 has a turn');
strictEqual(game.play(2), 'Player 2 has a turn');
strictEqual(game.play(3), 'Player 1 has a turn');
strictEqual(game.play(3), 'Player 2 has a turn');
strictEqual(game.play(4), 'Player 1 wins!');
strictEqual(game.play(4), 'Game has finished!');
