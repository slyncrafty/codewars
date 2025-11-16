/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54207f9677730acd490000d1/
/* ========== ========== ========== ========== ========== ==========*/
/*
Password Hashes

Description:
When you sign up for an account somewhere, some websites do not actually store your password in their databases. Instead, they will transform your password into something else using a cryptographic hashing algorithm.

After the password is transformed, it is then called a password hash. Whenever you try to login, the website will transform the password you tried using the same hashing algorithm and simply see if the password hashes are the same.

Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.

Remember that you can include the builtin require() function to include external modules (you're not expected to implement MD5 hash algorithm yourself, there are many modules that can do that for you).

If you're not familiar with modules, see this kata.

NodeJS documentation here.
Code Examples

passHash("password") // --> "5f4dcc3b5aa765d61d8327deb882cf99"
passHash("abc123") // --> "e99a18c428cb38d5f260853678922e03"

If you want to externally test a string, look at this website.

As a side note, md5 can be exploited, so never use it for anything secure. The reason I used it in this kata is simply because it is a very common hashing algorithm and many people will recognize the name.

*/

// Solution
function passHash(str) {
	const crypto = require('crypto');
	return crypto.createHash('md5').update(str).digest('hex');
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};
var tests = [
	['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
	['abc123', 'e99a18c428cb38d5f260853678922e03'],
	['securepassword999', '3d19d3ca79407769bb3d4ede8373b25e'],
];

for (var i = 0; i < tests.length; i++) {
	assertEquals(passHash(tests[i][0]), tests[i][1]);
}
