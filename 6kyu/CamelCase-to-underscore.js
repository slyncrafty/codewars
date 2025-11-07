/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5b1956a7803388baae00003a
/* ========== ========== ========== ========== ========== ==========*/
/*
CamelCase to underscore

Description:
You wrote all your unit test names in camelCase. But some of your colleagues have troubles reading these long test names. So you make a compromise to switch to underscore separation.

To make these changes fast you wrote a class to translate a camelCase name into an underscore separated name.

Implement the ToUnderscore() method.

Example:

"ThisIsAUnitTest" => "This_Is_A_Unit_Test"

But of course there are always special cases...

You also have some calculation tests. Make sure the results don't get split by underscores. So only add an underscore in front of the first number.

Also Some people already used underscore names in their tests. You don't want to change them. But if they are not split correct you should adjust them.

Some of your colleagues mark their tests with a leading and trailing underscore. Don't remove this.

And of course you should handle empty strings to avoid unnecessary errors. Just return an empty string then.

Example:

"Calculate15Plus5Equals20" => "Calculate_15_Plus_5_Equals_20"

"This_Is_Already_Split_Correct" => "This_Is_Already_Split_Correct"

"ThisIs_Not_SplitCorrect" => "This_Is_Not_Split_Correct"

"_UnderscoreMarked_Test_Name_" => _Underscore_Marked_Test_Name_"

*/

// Solution
// const toUnderScore = (name) => {
// 	if (name === '') return name;
// 	let startsWithUnderscore = name[0] === '_';
// 	let endsWithUnderscore = name.at(-1) === '_';

// 	let core = name.match(
// 		/([A-Z](?=[A-Z]|\d+))|[A-Z]?[a-z]+|([A-Z])|\d+[a-z]+|\d+/g
// 	);
// 	core = core ? core.join('_') : name;
// 	if (startsWithUnderscore) core = '_' + core;
// 	if (endsWithUnderscore) core += '_';
// 	return core;
// };

const toUnderScore = (s) =>
	s.replace(/([A-Za-z](?=[A-Z\d])|\d(?=[A-Z]))/g, '$&_');

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct! ');
	else console.log('Incorrect', a, 'expected to match ', b);
};
const testRandom = (length, runs) => {
	for (let i = 0; i < runs; i++) {
		let rnd = makeRandomString(length);
		strictEqual(toUnderScore(rnd), solution(rnd));
	}
};

const makeRandomString = (length) => {
	let text = '';
	let possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		c = possible.charAt(Math.floor(Math.random() * possible.length));
		isDigit = c >= '0' && c <= '9';
		if (c === c.toUpperCase() && !isDigit && Math.random() > 0.5) {
			text += '_';
		}
		text += c;
	}
	return text;
};

const solution = (name) => {
	return name.replace(/(?<=[^_-])_?(?=[A-Z])|(?<=[^\d_])_?(?=\d)/g, '_');
};

strictEqual(toUnderScore('ThisIsAUnitTest'), 'This_Is_A_Unit_Test');
strictEqual(
	toUnderScore('ThisShouldBeSplittedCorrectIntoUnderscore'),
	'This_Should_Be_Splitted_Correct_Into_Underscore'
);

strictEqual(
	toUnderScore('Calculate1Plus1Equals2'),
	'Calculate_1_Plus_1_Equals_2'
);
strictEqual(
	toUnderScore('Calculate15Plus5Equals20'),
	'Calculate_15_Plus_5_Equals_20'
);
strictEqual(
	toUnderScore('Calculate500DividedBy5Equals100'),
	'Calculate_500_Divided_By_5_Equals_100'
);
strictEqual(
	toUnderScore('Adding_3To_3ShouldBe_6'),
	'Adding_3_To_3_Should_Be_6'
);

strictEqual(
	toUnderScore('This_Is_Already_Splitted_Correct'),
	'This_Is_Already_Splitted_Correct'
);
strictEqual(
	toUnderScore('ThisIs_Not_SplittedCorrect'),
	'This_Is_Not_Splitted_Correct'
);
strictEqual(
	toUnderScore('_IfATestStartAndEndsWithUnderscore_ItShouldBeTheSame_'),
	'_If_A_Test_Start_And_Ends_With_Underscore_It_Should_Be_The_Same_'
);

strictEqual(toUnderScore(''), '');

testRandom(10, 5);
testRandom(100, 5);
testRandom(300, 5);
