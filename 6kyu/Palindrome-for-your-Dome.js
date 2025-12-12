/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/53046ceefe87e4905e00072a
/* ========== ========== ========== ========== ========== ==========*/
/*
Palindrome for your Dome

Description:
A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

Our goal is to determine whether or not a given string is a valid palindrome or not.

Like the above examples, here are a few test cases which are also populated:

"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid

You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times.

Notes:

The empty string "" can be read forward or backward the same, it's a palindrome in our case.

*/

// Solution
function palindrome(string) {
	if (!string) return true;
	const clean = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
	let left = 0,
		right = clean.length - 1;
	while (left < right) {
		if (clean[left++] !== clean[right--]) return false;
	}
	return true;
}

// Test Codes
const test = (a, b) => {
	const actual = palindrome(a);
	if (actual === b) console.log('✅PASS');
	else console.log('❌FAILED');
};

test('', true);
test('A man, a plan, a canal - Panama', true);
test('101', true);
test('911', false);
test('RotaTor', true);
test("Abba Zabba, you're my only friend", false);
test('Under_scores; Serocsrednu', true);
test('Eva: Can I see bees in a cave?', true);
test("Madam? I'm Adam!", true);
