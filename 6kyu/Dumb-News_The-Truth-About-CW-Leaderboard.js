/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57e45ce6a20449368f000092/
/* ========== ========== ========== ========== ========== ==========*/
/*
Dumb News: The Truth About CW Leaderboard !

Description:
The good news is: we can examine their names to find who they really are.
Your Task :

You may code a checkUser/check_user function to check a userName/user_name to see who he/she is. The algorithm is:

1.) "Un-leet" the name; replace 0123456789 with olzeasbtBg respectively (e.g. replace 0 with "o", 6 with "b", 2 with "z". . .)

2.) Get the "binary" value of the name, by taking the name of the Imp of Imps himself, Mxyzptlk, and replacing each letter in his name with a 1 if it is present in user's name, and a 0 if it's not (ignore case)

3.) Compute the 5th dimension level by dividing the decimal value of "bin"-value by 255 and multiplying by 100:

fifthDimensionLevel = 100 * parseInt(binaryValue, 2) / 255

4.) Finally, depending of this final score, return a comment:

  score : comment to be returned
--------+------------------------------------------------------------------------------
 <  1   : "This one's too clean, should be a bot."
 <  50  : "This one seems ok, may be there's still some humans around here..."
 <  90  : "This one's probably an alien from 5th dim, be careful!"
 >= 90  : "Yeeerk!!! Mr Mxyztplk himself the imp of imps! Only Superman can beat him!"

These messages are preloaded in an array MSGS
Example:

name : 'Am4b0'
1. unleet --> 'Amabo'
2. bin-value: 'Mxyzptlk' -> '10000000' (only the 'M' matches Amabo)
3. level: `10000000` to decimal -> 128, 100*128/255 -> ~ 50.19607843137255
4. msg: "This one's probably an alien from 5th dim, be careful!" (==MSGS[2] )

Note:

More info on the 5th dimension menace
**Bold Code-Warriors It's Time to reveal the Truth to our Poor World !**
*/

// Solution
function checkUser(userName) {
	const map = {
		0: 'o',
		1: 'l',
		2: 'z',
		3: 'e',
		4: 'a',
		5: 's',
		6: 'b',
		7: 't',
		8: 'B',
		9: 'g',
	};
	const unLeet = userName.replace(/[0-9]/g, (d) => map[d]);
	const binaryImp = 'Mxyzptlk';
	const binValue = [...binaryImp]
		.map((e) => (unLeet.toLowerCase().includes(e.toLowerCase()) ? '1' : '0'))
		.join('');
	const level = (100 * parseInt(binValue, 2)) / 255;

	if (level < 1) return MSGS[0];
	if (level < 50) return MSGS[1];
	if (level < 90) return MSGS[2];
	if (level >= 90) return MSGS[3];
}

// Test Codes
const MSGS = [
	"This one's too clean, should be a bot.",
	"This one seems ok, may be there's still some humans around here...",
	"This one's probably an alien from 5th dim, be careful!",
	'Yeeerk!!! Mr Mxyztplk himself the imp of imps! Only Superman can beat him!',
];

const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};
assertEquals(checkUser('kikirikii'), "This one's too clean, should be a bot.");
assertEquals(
	checkUser('notSoBad'),
	"This one seems ok, may be there's still some humans around here..."
);
assertEquals(
	checkUser('anonymous'),
	"This one's probably an alien from 5th dim, be careful!"
);
assertEquals(
	checkUser('Mr007'),
	"This one's probably an alien from 5th dim, be careful!"
);
assertEquals(
	checkUser('Kltpzyxm'),
	'Yeeerk!!! Mr Mxyztplk himself the imp of imps! Only Superman can beat him!'
);
