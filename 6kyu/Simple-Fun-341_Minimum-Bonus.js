/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/595ef0c7458ad5facc000019/
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple Fun #341: Minimum Bonus

Description:
Task

International hackers group organized a programming competition, in which n teams participated.

They were assigned to separate rooms for competitions, and the rooms were lined up in a straight line.

The game was over and each team scored points. It's time to pay bonuses. The rule is:

- The bonus unit is 1K($1000), and each team gets at least 1k.
- The bonus payment process is not public. 
- A team can know the bonus amount of its adjacent team, if the 
  score of the adjacent team is lower than itself.
- If a team finds that its bonus is no higher than the adjacent team whose
  score is lower than itself, the team will not be satisfied

Given an integer array scores represents the score of all teams. Your task is to calculate how much bonuses international hackers group need to pay to keep all teams satisfied.

Note, the unit of bonus is 1K. All teams are in a straight line, and their order is the same as that of the array elements.
Example

For scores = [10,20,30], the output should be 6.

team1's score = 10
team2's score = 20
team3's score = 30

team1 can get 1K, The team was satisfied 
because it knew nothing about the other teams.

team2 can know team1's bonus amount, 
So team2 at least get 2K to be satisfied

team3 can know team2's bonus amount, 
So team3 at least get 3K to be satisfied

1 + 2 + 3 = 6

For scores = [10,20,20,30], the output should be 6.

The possible bonus amount of each team can be:[1,2,1,2]

For scores = [20,30,10,30,40,10,20,30,40,30], the output should be 20.

The possible bonus amount of each team can be:[1,2,1,2,3,1,2,3,4,1]

*/

// Solution
function minimumBonus(scores) {
	const n = scores.length;
	const bonus = Array(n).fill(1);
	for (let i = 1; i < n; i++) {
		if (scores[i] > scores[i - 1]) {
			bonus[i] = bonus[i - 1] + 1;
		}
	}
	for (let i = n - 2; i >= 0; i--) {
		if (scores[i] > scores[i + 1]) {
			bonus[i] = Math.max(bonus[i], bonus[i + 1] + 1);
		}
	}
	return bonus.reduce((a, c) => a + c, 0);
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};

assertEquals(minimumBonus([20, 30, 10, 30, 40, 10, 20, 30, 40, 30]), 20);

assertEquals(minimumBonus([10, 20, 30]), 6);

assertEquals(minimumBonus([30, 20, 10]), 6);

assertEquals(minimumBonus([30, 20, 20, 10]), 6);

assertEquals(minimumBonus([10, 20, 20, 30]), 6);

assertEquals(minimumBonus([20, 20, 20, 20]), 4);

assertEquals(minimumBonus([20, 30, 40, 30, 20, 10]), 13);
