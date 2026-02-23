/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5270d0d18625160ada0000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Greed is Good

Description:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

Note: your solution must not modify the input array.

*/

// Solution
function score(dice) {
	const tripleScores = {
		1: 1000,
		6: 600,
		5: 500,
		4: 400,
		3: 300,
		2: 200,
	};

	const freqMap = new Map();
	for (const d of dice) {
		freqMap.set(d, (freqMap.get(d) || 0) + 1);
	}

	let totalScore = 0;
	for (const [value, count] of freqMap.entries()) {
		if (count >= 3) {
			totalScore += tripleScores[value];
			freqMap.set(value, count - 3);
		}
	}
	totalScore += (freqMap.get(1) || 0) * 100;
	totalScore += (freqMap.get(5) || 0) * 50;
	return totalScore;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

strictEqual(score([2, 3, 4, 6, 2]), 0);
strictEqual(score([4, 4, 4, 3, 3]), 400);
strictEqual(score([2, 4, 4, 5, 4]), 450);
