/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/525f0459fb9570f9ff00005d
/* ========== ========== ========== ========== ========== ==========*/
/*
Javascript filter - 3

Description:
Your friend saw the great work you did with keeping your user-names at bay in

http://www.codewars.com/dojo/katas/525d9b1a037b7a9da7000905

now he'd like you to do (nearly) the same thing for his website, but as always, the devil is in the details.

He has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs, like so:

[ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]

He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. For the above array, the correct return-array would be

[ "food@bar.com" ]

You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at and the third argument is the array itself:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/

// Solution
const searchNames = (logins) =>
	logins.filter(
		(_, i) =>
			i % 2 && (logins[i - 1][0] === '.' || logins[i - 1].slice(-1) === '.'),
	);

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};
	if (equal(actual, expected)) console.log('✅PASSED');
	else console.log('❌FAILED', actual, 'expected match', expected);
};

let a = ['foo', 'foo@foo.com', 'bar.', 'bar@bar.com'],
	b = ['bar@bar.com'];
deepEqual(searchNames(a), b);
