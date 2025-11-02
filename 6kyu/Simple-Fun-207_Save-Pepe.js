/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple Fun #207: Save Pepe

Description:
 Pepe has been captured by the evil Pilaf monsters, and they have imprisoned him in a cell. Luckily, this cell has an electronic lock with a very weak cryptographic hash, and Pepe has stolen the hashing algorithm from the Pilaf guards. It takes an input of an array of 16 bytes, and outputs a hash, which is a string of length 16.

Let message[i] denote the ASCII value of the ith input symbol. The algorithm builds the hash as follows:

hash[i] = ((129 * message[i]) XOR message[i-1]) % 256

When calculating the first value of the hash, it is assumed that message[-1] = 0.

You must determine how to reverse this hash function so that Pepe can escape the cell and save the world. Write a function that takes hashedMessage and returns a string of length 16, which hash equals hashedMessage.
Input/Output

    [input] integer array hash

The output of the hash function, array of 16 integers. It is guaranteed that for each valid i 0 ≤ hash[i] ≤ 255.

    [output] a string

The message that produces the given hash.
Example

For hash = [241,134,146,23,6,141,140,156,134,31,145,146,23,2,129,15]

The output should be "qwertyuiopasdfgh".

If msg = "qwertyuiopasdfgh", then msg[0] = 113 and msg[1] = 119.
Here's how hash was obtained then:

hash[0] = 241, since:
129 * msg[0] = 14577
14577 XOR msg[-1] = 14577
14577 % 256 = 241

hash[1] = 134, since:
129 * msg[1] = 15351
15351 XOR msg[0] = 15238
15238 % 256 = 134

etc...

*/

// Solution
function savePepe(hash) {
	const msg = [];
	let prev = 0;

	for (let i = 0; i < 16; i++) {
		// brute-force m [0, 255] to check if formula matches the hash[i]
		for (let m = 0; m < 256; m++) {
			if (((129 * m) ^ prev) % 256 === hash[i]) {
				msg.push(m);
				prev = m;
				break;
			}
		}
	}
	return String.fromCharCode(...msg);
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect!');
};
assertEquals(
	savePepe([
		241, 134, 146, 23, 6, 141, 140, 156, 134, 31, 145, 146, 23, 2, 129, 15,
	]),
	'qwertyuiopasdfgh'
);

assertEquals(
	savePepe([
		110, 129, 11, 129, 75, 68, 153, 83, 201, 154, 83, 84, 28, 141, 69, 207,
	]),
	'node.js is the o'
);

assertEquals(
	savePepe([
		110, 2, 149, 89, 82, 151, 132, 13, 76, 68, 129, 19, 86, 76, 141, 15,
	]),
	'nly real dev lan'
);

assertEquals(
	savePepe([
		231, 146, 148, 134, 130, 69, 195, 7, 16, 72, 143, 67, 24, 24, 80, 129,
	]),
	'guage cdt<3php !'
);

assertEquals(
	savePepe([
		179, 130, 5, 133, 132, 140, 11, 4, 131, 134, 134, 13, 129, 142, 142, 138,
	]),
	'3141592653589793'
);
