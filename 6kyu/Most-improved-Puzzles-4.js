/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55da2a419f8361df45000025
/* ========== ========== ========== ========== ========== ==========*/
/*
Most improved - Puzzles #4

Description:
When being graded in a subject or a course, high marks are focused on the most, but what about most improved? As a computer science teacher, you would like to create a function that calculates the most improved students and ranks them in a list.
Task

Your task is to complete the function to return an array sorted by most improved as percentages.
Input

The input you will receive will be an array of students, students will be objects containing a name and an array of marks (in order of acheived). The marks will be out of 100, a student can however have a mark of null if the test was not attempted (treat this as 0).

Example of student Object: {name:'Henry, Johns',marks:[25,50]}
Output

The output expected will be an array of objects similar to the student object, containing the name and total improvement percentage out of the first and last mark given to calculate the overall improvement percentage. The output array must be sorted by most improved (Round the calculated improvement). If there is a tie in improvements, then order by name (capitals before lowercase).

Example of return Object: {name:'Henry, Johns',improvement:100}
Preloaded

The Student class has been preloaded with the constructor accepting two parameters:

    name - string
    marks - an array of numbers.

*/

// Solution
function calculateImproved(students) {
	return students
		.map((student) => {
			const marks = student.marks.map((m) => (m === null ? 0 : m));
			const first = marks[0];
			const last = marks[marks.length - 1];

			const improvement =
				first === 0 ? 0 : Math.round(((last - first) / first) * 100);

			return { name: student.name, improvement };
		})
		.sort((a, b) => {
			if (b.improvement !== a.improvement) {
				return b.improvement - a.improvement;
			}
			return a.name.localeCompare(b.name);
		});
}

// Test Codes
class Student {
	constructor(name, marks) {
		this.name = name;
		this.marks = marks;
	}
}

var names = [
		'Henry, Johns',
		'Timmy, Bug',
		'George, King',
		'Finn, Wish',
		'Lucy Act',
	],
	marks = [
		[25, 50],
		[100, 98],
		[100, 85],
		[45, 90],
		[55, 100],
	];
var students = [];
for (var i = 0; i < 5; i++) {
	students.push(new Student(names[i], marks[i]));
}
var names = [
		'Henry, Johns',
		'Timmy, Bug',
		'George, King',
		'Finn, Wish',
		'Lucy Act',
	],
	marks = [
		[25, 50],
		[100, 98],
		[100, 85],
		[45, 90],
		[55, 100],
	];
var students = [];
for (var i = 0; i < 5; i++) {
	students.push(new Student(names[i], marks[i]));
}
assertSimilar(
	calculateImproved(students),
	[
		{ name: 'Finn, Wish', improvement: 100 },
		{ name: 'Henry, Johns', improvement: 100 },
		{ name: 'Lucy Act', improvement: 82 },
		{ name: 'Timmy, Bug', improvement: -2 },
		{ name: 'George, King', improvement: -15 },
	],
	'Create a sorted array of most improved student!',
);

marks = [
	[25, 56, 50],
	[100, 67, 98],
	[100, 45, 85],
	[45, 100, 90],
	[55, 0, 100],
];
students = [];
for (var i = 0; i < 5; i++) {
	students.push(new Student(names[i], marks[i]));
}
assertSimilar(
	calculateImproved(students),
	[
		{ name: 'Finn, Wish', improvement: 100 },
		{ name: 'Henry, Johns', improvement: 100 },
		{ name: 'Lucy Act', improvement: 82 },
		{ name: 'Timmy, Bug', improvement: -2 },
		{ name: 'George, King', improvement: -15 },
	],
	'Create a sorted array of most improved student!',
);
