/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59879e52704c4f96540000c1/
/* ========== ========== ========== ========== ========== ==========*/
/*
Hall Of Fame

Description:
At least little grasshoper, you reached the   H a l l   O f   F a m e ! ! !
\* **Congrats!** \* **CoRrEcTaMuNdO** \* wellll DDDDDone ! \*

Well, actually, that's only the "Hall Of Fame" kata . . .
Task

Create a HallOfFame object to store some game-of-the-century best players name and score.

On creation a HallOfFame may take 2 arguments :

    size : an int (default: 5), defining the size of the Hall.
    players : an array of players.

A player is a 2-items array of the form [name, score] with :

    name : a string, the name of the player.
    score : an int, the score of this player.

An HallOfFame object should provide an attribute list and a method add(player).

    list : is an array of player of the form "Name: score", sorted by score in descending order (in alphabetic order of name in case of same score).

    eg : ["Alya: 325", "Boris: 253", "Clem: 235"]

    list.length is limited to size items. If a "list-slot" is empty, return an "empty-player" ("")

    eg : ["Alya: 325", "", ""] // in case only 1st player is provided

    add(player) should :
        add the player to the list (if its score is high enough).
        eventually re-sort the list.
        and return the object (to permit chaining adds).

Examples

var top3 = new HallOfFame(3, [["Ada",99], ["Bob","42], ["Clo", 101], ["Dan", 3]])

top3.list -> ["Clo: 101", "Ada: 99", "Bob: 42"] // -- only 3 players kept 'cause size of the Hall is 3

top3.add(["Dan",54])
top3.list -> ["Clo: 101", "Ada: 99", "Dan: 54"]

top3.add(["Eva",75]).add(["Fox",120]).list --> ["Fox: 120","Clo: 101","Ada: 99"]

var top5 = new HallOfFame(); // -- size=5 by default
top5.add(["A",4]).add(["E",3]).add(["I",1])
top5.list --> ["A: 4","E: 3","I: 1","",""] // <-- 2 "empty players" at the end of list

top5.add(["S",5]).add(["T",7])
top5.list --> ["T: 7","S: 5","A: 4","E: 3","I: 1"]

Note: Same player (same name) may appear more than once on a list
*/

// Solution
class HallOfFame {
	constructor(size = 5, players = []) {
		this.size = size;
		this.players = [];
		players.forEach((p) => this.add(p));
	}

	get list() {
		const formatted = this.players.map(([name, score]) => `${name}: ${score}`);

		while (formatted.length < this.size) {
			formatted.push('');
		}
		return formatted;
	}

	add(player) {
		this.players.push([player[0], Number(player[1])]);

		this.players.sort((a, b) => {
			if (b[1] !== a[1]) return b[1] - a[1];
			return a[0].localeCompare(b[0]);
		});
		this.players.length = Math.min(this.players.length, this.size);
		return this;
	}
}

// Test Codes

const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((v, i) => equal(v, b[i]));
		}
		return false;
	};

	const ok = equal(actual, expected);
	if (ok) console.log('✅ PASS');
	else console.log('❌ FAIL:', actual, 'expected to match', expected);
};

deepEqual(
	new HallOfFame(3, [
		['Ada', 444],
		['Bob', 2222],
		['Clo', 55],
	]).list,
	['Bob: 2222', 'Ada: 444', 'Clo: 55']
);

let top3;

top3 = new HallOfFame(3);
deepEqual(top3.list, ['', '', '']);

top3.add(['Ada', 44]);
deepEqual(top3.list, ['Ada: 44', '', '']);

top3.add(['Bob', 88]).add(['Clo', 10]);
deepEqual(top3.list, ['Bob: 88', 'Ada: 44', 'Clo: 10']);

top3.add(['Dan', 3]);
deepEqual(top3.list, ['Bob: 88', 'Ada: 44', 'Clo: 10']);

deepEqual(top3.add(['Eva', 66]).list, ['Bob: 88', 'Eva: 66', 'Ada: 44']);

top3.add(['Zoe', 88]).add(['Kim', 88]);
deepEqual(top3.list, ['Bob: 88', 'Kim: 88', 'Zoe: 88']);

top3.add(['Bob', 89]).add(['Bob', 90]);
deepEqual(top3.list, ['Bob: 90', 'Bob: 89', 'Bob: 88']);
