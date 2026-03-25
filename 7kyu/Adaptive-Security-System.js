/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Adaptive Security System

Description:
The system starts with a given security level.

Rules:

For each hacker:

    If the hacker's skill is strictly greater than the current security level, the hacker successfully breaches the system.
    Otherwise, the system blocks the attack and learns from it, increasing its security level.

Each blocked attack increases the security level by a fixed amount.

Your task is to return the number of successful breaches.

If the array is empty, return 0.

Example

breachAttempts([7, 6, 8, 9], 6, 2)

Initial values:

securityLevel = 6
increase = 2

Step-by-step:

Hacker 7 vs security 6 → breach → security stays 6
Hacker 6 vs security 6 → blocked → security becomes 8
Hacker 8 vs security 8 → blocked → security becomes 10
Hacker 9 vs security 10 → blocked

Result:

1

*/

// Solution
function breachAttempts(hackers, securityLevel, increase) {
	let breaches = 0;
	let security = securityLevel;
	for (const hacker of hackers) {
		if (security < hacker) breaches++;
		else security += increase;
	}
	return breaches;
}

// Test Codes
const strictEqual = (a, b, msg) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed', msg);
};
const cases = [
	[[7, 6, 8, 9], 6, 2, 1],
	[[10, 11, 12], 5, 3, 3],
	[[5, 5, 5], 5, 1, 0],
	[[], 4, 2, 0],
];

cases.forEach(([hackers, securityLevel, increase, answer]) => {
	const originalHackers = [...hackers];
	strictEqual(
		breachAttempts([...hackers], securityLevel, increase),
		answer,
		`hackers=${JSON.stringify(originalHackers)}, securityLevel=${securityLevel}, increase=${increase}`,
	);
});
