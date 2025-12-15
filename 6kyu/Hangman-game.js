/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56832fb41676465e82000030/
/* ========== ========== ========== ========== ========== ==========*/
/*
Hangman game

Description:
Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other tries to guess it by suggesting letters, within a certain number of guesses.

Everytime the player misses a word, a part of the sketch is drawn:

Hangman

If the player finds the word before being hung he wins. He has 6 chances to miss before being hung.
Your task

You have to implement a class Hangman that receives a word in it's constructor and has the method guess, that will be used by the player to try to guess the word.

Your method guess will receive a letter as parameter and has this return behaviour:

    if the player found the word: You found the word! ({word})
    if the player got hung: You got hung! The word was {word}.
    if the game still on: {game state}
    if the game has ended already: The game has ended.

important: if the player guesses a letter that was already guessed, you should ignore it and return the {game state}
{game state}

The {game state} is the word to be found with all letters separated by white space. The letters that weren't found yet will be replaced with _ and, if the player had missed one or more letters, we will keep this record adding # to the output followed by a string with all missed letters in order of occurence.

Ex. If the player is trying to guess the word codewars and attempts with the letters d,w,u,a,c,g,s, respectively, he would guess the letters d,w,a,c,s right and miss the letters u,g. The game state at this point should look like:

c _ d _ w a _ s # ug

#Example:

let hangman = new Hangman('wars');

hangman.guess('w')
w _ _ _
hangman.guess('u')
w _ _ _ # u
hangman.guess('s')
w _ _ s # u
hangman.guess('a')
w a _ s # a
hangman.guess('r')
# You found the word! (wars)
hangman.guess('g')
# The game has ended.

*/

// Solution
class Hangman {
	constructor(word) {
		this.word = word;
		this.state = Array(word.length).fill('_');
		this.chances = 6;
		this.track = '';
		this.seen = new Set();
		this.gameOn = true;
	}

	guess(letter) {
		if (!this.gameOn) return 'The game has ended.';
		if (this.word.includes(letter)) {
			for (let i = 0; i < this.word.length; i++) {
				if (this.word[i] === letter) {
					this.state[i] = letter;
				}
			}
			if (!this.state.includes('_')) {
				this.gameOn = false;
				return `You found the word! (${this.word})`;
			}
		} else {
			if (this.chances === 0) {
				this.gameOn = false;
				return `You got hung! The word was ${this.word}.`;
			}
			if (!this.seen.has(letter)) {
				this.chances--;
				this.track += letter;
			}
		}
		return this.gameState();
	}

	gameState() {
		let result = this.state.join(' ');
		if (this.track.length > 0) {
			result += ' # ' + this.track;
		}
		return result;
	}
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅PASSED');
	else console.log('❌FAILED');
};

let hangman = new Hangman('codet');
strictEqual(hangman.guess('w'), '_ _ _ _ _ # w');
strictEqual(hangman.guess('a'), '_ _ _ _ _ # wa');
strictEqual(hangman.guess('r'), '_ _ _ _ _ # war');
strictEqual(hangman.guess('s'), '_ _ _ _ _ # wars');
strictEqual(hangman.guess('e'), '_ _ _ e _ # wars');
strictEqual(hangman.guess('d'), '_ _ d e _ # wars');
strictEqual(hangman.guess('o'), '_ o d e _ # wars');
strictEqual(hangman.guess('c'), 'c o d e _ # wars');
strictEqual(hangman.guess('x'), 'c o d e _ # warsx');
strictEqual(hangman.guess('y'), 'c o d e _ # warsxy');
strictEqual(hangman.guess('z'), 'You got hung! The word was codet.');

hangman = new Hangman('wars');
strictEqual(hangman.guess('w'), 'w _ _ _');
strictEqual(hangman.guess('u'), 'w _ _ _ # u');
strictEqual(hangman.guess('s'), 'w _ _ s # u');
strictEqual(hangman.guess('a'), 'w a _ s # u');
strictEqual(hangman.guess('r'), 'You found the word! (wars)');
strictEqual(hangman.guess('g'), 'The game has ended.');
