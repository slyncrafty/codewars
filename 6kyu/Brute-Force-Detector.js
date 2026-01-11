/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/695688e9858d531c29a9d748/
/* ========== ========== ========== ========== ========== ==========*/
/*
Brute Force Detector

Description:
You're analyzing authentication logs. Each log entry is a string like:

192.168.1.1 LOGIN_FAIL user=admin
192.168.1.1 LOGIN_SUCCESS user=admin
10.0.0.5 LOGIN_FAIL user=root

An IP is suspicious if it has 3 or more consecutive failures without a success in between. Return a list of suspicious IPs, sorted alphabetically.

logs = [
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=root",
    "10.0.0.5 LOGIN_FAIL user=test",
    "10.0.0.5 LOGIN_SUCCESS user=test"
]
detect_brute_force(logs)  # ["192.168.1.1"]

The 10.0.0.5 IP had a failure then a success, so its streak reset. The 192.168.1.1 IP hit 3 failures in a row - busted. Only respond with a list of the suspicious IPs.

A success resets that IP's failure count to zero. Empty list returns empty list.

PS. You do not need to validate the IP addresses.

*/

// Solution
function detectBruteForce(logs) {
	const fails = new Map();
	const suspicious = new Set();

	for (const log of logs) {
		const [ip, status, _] = log.split(' ');

		if (status === 'LOGIN_FAIL') {
			const count = (fails.get(ip) || 0) + 1;
			fails.set(ip, count);
			if (count >= 3) {
				suspicious.add(ip);
			}
		} else if (status === 'LOGIN_SUCCESS') {
			fails.set(ip, 0);
		}
	}
	return [...suspicious].sort();
}

// Test Codes
const deepEqual = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
	};
	if (equal(actual, expected)) console.log('✅PASSED');
	else console.log('❌FAILED', actual, 'expected to match', expected);
};

let logs = [
	'192.168.1.1 LOGIN_FAIL user=admin',
	'192.168.1.1 LOGIN_FAIL user=admin',
	'192.168.1.1 LOGIN_FAIL user=admin',
];
deepEqual(detectBruteForce(logs), ['192.168.1.1']);
logs = [
	'10.0.0.5 LOGIN_FAIL user=x',
	'10.0.0.5 LOGIN_FAIL user=x',
	'10.0.0.5 LOGIN_SUCCESS user=x',
	'10.0.0.5 LOGIN_FAIL user=x',
];
deepEqual(detectBruteForce(logs), []);
logs = [
	'1.1.1.1 LOGIN_FAIL user=a',
	'2.2.2.2 LOGIN_FAIL user=b',
	'1.1.1.1 LOGIN_FAIL user=a',
	'2.2.2.2 LOGIN_SUCCESS user=b',
	'1.1.1.1 LOGIN_FAIL user=a',
	'2.2.2.2 LOGIN_FAIL user=b',
];
deepEqual(detectBruteForce(logs), ['1.1.1.1']);
logs = [
	'5.5.5.5 LOGIN_FAIL user=x',
	'5.5.5.5 LOGIN_FAIL user=x',
	'5.5.5.5 LOGIN_FAIL user=x',
	'5.5.5.5 LOGIN_SUCCESS user=x',
	'5.5.5.5 LOGIN_FAIL user=x',
	'5.5.5.5 LOGIN_FAIL user=x',
	'5.5.5.5 LOGIN_FAIL user=x',
];
deepEqual(detectBruteForce(logs), ['5.5.5.5']);
deepEqual(detectBruteForce([]), []);
logs = [
	'9.9.9.9 LOGIN_FAIL user=a',
	'1.1.1.1 LOGIN_FAIL user=b',
	'9.9.9.9 LOGIN_FAIL user=a',
	'1.1.1.1 LOGIN_FAIL user=b',
	'9.9.9.9 LOGIN_FAIL user=a',
	'1.1.1.1 LOGIN_FAIL user=b',
];
deepEqual(detectBruteForce(logs), ['1.1.1.1', '9.9.9.9']);
