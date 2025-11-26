/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58b28e5830473070e5000007/
/* ========== ========== ========== ========== ========== ==========*/
/*
Alex & snooker: scores.

Description:
Alex is a devoted fan of snooker Masters and in particular, he recorded results of all matches. Help Alex to know the score of matches.

Hint:
A string with a score presented as follows: "24-79(72); 16-101(53); ..."
"24" - Points scored the first player;
"79" - the number of points of the second player.
"(72)" - the maximum score for one approach.
Also, the player's account may be expressed as 105(53,52):
"105" - points in the frame, "53" and "52" - two separate numbers(not float) maximum points in the frame.
Frames are separated by ";" and players score - "-"
It should count the number of frames won by one and another player, and output the data as a "[10,7]"
*/

// Solution
function frame(score) {
	const chunks = score.split(';').map((e) => e.trim());
	let p1 = 0,
		p2 = 0;
	for (const f of chunks) {
		const [f1, f2] = f.split('-');
		if (parseInt(f1) > parseInt(f2)) p1++;
		else p2++;
	}
	return [p1, p2];
}

// Test Codes
const assertSimilar = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		a.every((e, i) => e === b[i]);
		ok = true;
	}
	if (ok) console.log('Correct');
	else console.log('Incorrect', a, b);
};
const score =
	'24-79(72); 16-101(53); 86(58)-27; 31-90(74); 0-115(115); 67-40; 61-21; 81(55)-23; 51-14; 124(56,68)-4; 67-12; 108(85)-15; 1-117(117); 1-92(92); 130(112)-0; 1-106(53); 59-39';

assertSimilar(frame(score), [10, 7]);
