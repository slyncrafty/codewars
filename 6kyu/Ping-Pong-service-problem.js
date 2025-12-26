/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/544bdc2ec29fb3456e00064a
/* ========== ========== ========== ========== ========== ==========*/
/*
Ping-Pong service problem

Description:
Playing ping-pong can be really fun!

Unfortunately, after a long and exciting play, you can forget whose service turn it is. Let's do something about that!

Write a function that takes as its parameter the current score as a string separated by :, and returns "first" or "second" depending on whose service turn it is.

We're playing old-school, so the rule is that players take turns after every five services. That is until the score is 20:20 - from that moment each player serves twice, in turn.

Examples:

at score  "0:0",  player to serve is "first"
at score  "3:2",  player to serve is "second"
at score "21:20", player to serve is "first"
at score "21:22", player to serve is "second"

There's no need to check if the passed parameter is valid - the score will be always provided in correct syntax and you don't need to check if one of the players has already won - that won't be the case.

The game ends when one of the players reaches 21 points with a minimum 2 point lead.
After a score of 20:20, the winner will be the first player to reach a 2 point lead.

*/

// Solution
function service(score) {
	const [a, b] = score.split(':').map(Number);
	const total = a + b;

	if (total < 40) {
		return Math.floor(total / 5) % 2 === 0 ? 'first' : 'second';
	}
	return Math.floor((total - 40) / 2) % 2 === 0 ? 'first' : 'second';
}

// Test Codes
const strictEqual = (actual, expected, msg) => {
	if (actual === expected) console.log('✅PASSED');
	else console.log('❌FAILED');
};

strictEqual(service('0:0'), 'first', `service("0:0")`);
strictEqual(service('3:2'), 'second', `service("3:2")`);
strictEqual(service('21:20'), 'first', `service("21:20")`);
strictEqual(service('21:22'), 'second', `service("21:22")`);
