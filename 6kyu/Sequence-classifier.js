/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5921c0bc6b8f072e840000c0
/* ========== ========== ========== ========== ========== ==========*/
/*
Sequence classifier

Description:
A series or sequence of numbers is usually the product of a function and can either be infinite or finite.

In this kata we will only consider finite series and you are required to return a code according to the type of sequence:
Code 	Type 	Example
0 	unordered 	[3,5,8,1,14,3]
1 	strictly increasing 	[3,5,8,9,14,23]
2 	not decreasing 	[3,5,8,8,14,14]
3 	strictly decreasing 	[14,9,8,5,3,1]
4 	not increasing 	[14,14,8,8,5,3]
5 	constant 	[8,8,8,8,8,8]

You can expect all the inputs to be non-empty and completely numerical arrays/lists - no need to validate the data; do not go for sloppy code, as rather large inputs might be tested.

Try to achieve a good solution that runs in linear time; also, do it functionally, meaning you need to build a pure function or, in even poorer words, do NOT modify the initial input!

*/

// Solution
function sequenceClassifier(arr) {
	let increasing = true;
	let notDecreasing = true;
	let decreasing = true;
	let notIncreasing = true;
	let constant = true;
	for (let i = 0; i < arr.length - 1; i++) {
		const a = arr[i],
			b = arr[i + 1];
		if (a >= b) increasing = false;
		if (a > b) notDecreasing = false;
		if (a <= b) decreasing = false;
		if (a < b) notIncreasing = false;
		if (a !== b) constant = false;
	}
	if (constant) return 5;
	if (increasing) return 1;
	if (notDecreasing) return 2;
	if (decreasing) return 3;
	if (notIncreasing) return 4;
	return 0;
}

// Test Codes
const doTest = (input, expected) => {
	const actual = sequenceClassifier(input);
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

doTest([3, 5, 8, 1, 14, 3], 0);
doTest([3, 5, 8, 9, 14, 23], 1);
doTest([3, 5, 8, 8, 14, 14], 2);
doTest([14, 9, 8, 5, 3, 1], 3);
doTest([14, 14, 8, 8, 5, 3], 4);
doTest([8, 8, 8, 8, 8, 8], 5);
doTest([8, 9], 1);
doTest([8, 8, 8, 8, 8, 9], 2);
doTest([9, 8], 3);
doTest([9, 9, 9, 8, 8, 8], 4);
