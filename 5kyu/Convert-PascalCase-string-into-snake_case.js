/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/529b418d533b76924600085d
/* ========== ========== ========== ========== ========== ==========*/
/*
Convert PascalCase string into snake_case

Description:
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
Examples

"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"

*/

// Solution
function toUnderscore(string) {
	if (typeof string !== 'string') return String(string);
	let result = string[0].toLowerCase();

	for (let i = 1; i < string.length; i++) {
		const ch = string[i];
		if (ch >= 'A' && ch <= 'Z') {
			result += '_' + ch.toLowerCase();
		} else {
			result += ch;
		}
	}
	return result;
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};

strictEqual(toUnderscore('A123aaa123AAA123'), 'a123aaa123_a_a_a123');
strictEqual(toUnderscore('AAA'), 'a_a_a');
strictEqual(toUnderscore('TestController'), 'test_controller');
strictEqual(toUnderscore('ThisIsBeautifulDay'), 'this_is_beautiful_day');
strictEqual(toUnderscore('Am7Days'), 'am7_days');
strictEqual(toUnderscore('My3CodeIs4TimesBetter'), 'my3_code_is4_times_better');
strictEqual(toUnderscore(5), '5');
