/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59f70440bee845599c000085
/* ========== ========== ========== ========== ========== ==========*/
/*
Find Cracker.

Description:
Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 110, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
];

The scores for each grade is:

    A: 30 points
    B: 20 points
    C: 10 points
    D: 5 points
    Everything else: 0 points

If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
  ,
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];

return ["name1", "name3"];

*/

// Solution
function findHack(arr) {
	const gradesToPoints = { A: 30, B: 20, C: 10, D: 5 };
	const calcScore = (grades) => {
		let score = grades.reduce(
			(acc, grade) => acc + (gradesToPoints[grade] || 0),
			0,
		);
		const extra =
			grades.length >= 5 &&
			grades.every((grade) => grade === 'A' || grade === 'B');
		if (extra) score += 20;
		return Math.min(score, 200);
	};
	return arr
		.filter(([_, total, grades]) => calcScore(grades) !== total)
		.map(([name, total, grades]) => name);
}

// Test Codes
const deepEqual = (actual, expected) => {
	if (JSON.stringify(actual) === JSON.stringify(expected))
		console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

const array = [
	['name1', 150, ['B', 'A', 'A', 'C', 'A', 'A']],
	['name2', 120, ['B', 'A', 'A', 'A']],
	['name3', 160, ['B', 'A', 'A', 'A', 'A']],
	['name4', 140, ['B', 'A', 'A', 'C', 'A']],
];
deepEqual(findHack(array), ['name2', 'name4']);
