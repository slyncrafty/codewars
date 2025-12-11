/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/528d36d7cc451cd7e4000339
/* ========== ========== ========== ========== ========== ==========*/
/*
Who has the most money?

Description:
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

    Each student will have a unique name
    There will always be a clear winner: either one person has the most, or everyone has the same amount
    If there is only one student, then that student has the most money

*/

// Solution
function mostMoney(students) {
	for (const student of students) {
		student.money =
			student.fives * 5 + student.tens * 10 + student.twenties * 20;
	}
	const most = Math.max(...students.map((s) => s.money));
	const rich = students.filter((s) => s.money === most);
	return rich.length === 1 ? rich[0].name : 'all';
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅PASS');
	else console.log('❌FAILED');
};

class Student {
	constructor(name, fives, tens, twenties) {
		this.name = name;
		this.fives = fives;
		this.tens = tens;
		this.twenties = twenties;
	}
}
const andy = new Student('Andy', 0, 0, 2);
const stephen = new Student('Stephen', 0, 4, 0);
const eric = new Student('Eric', 8, 1, 0);
const david = new Student('David', 2, 0, 1);
const phil = new Student('Phil', 0, 2, 1);
const cam = new Student('Cameron', 2, 2, 0);
const geoff = new Student('Geoff', 0, 3, 0);

strictEqual(mostMoney([andy, stephen, eric, david, phil]), 'Eric');
strictEqual(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), 'Eric');

strictEqual(mostMoney([andy]), 'Andy');
strictEqual(mostMoney([stephen]), 'Stephen');

strictEqual(mostMoney([cam, geoff]), 'all');
strictEqual(mostMoney([david, cam, geoff]), 'all');
