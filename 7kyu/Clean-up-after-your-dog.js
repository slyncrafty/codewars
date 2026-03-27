/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Clean up after your dog

Description:
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

bags = 2
cap = 2
x (or garden) =
[[ _ , _ , _ , _ , _ , _ ],
 [ _ , _ , _ , _ , @ , _ ],
 [ @ , _ , _ , _ , _ , _ ]]

returns 'Clean'
*/

// Solution
function crap(garden, bags, cap) {
	let total = 0;
	for (const row of garden) {
		for (const spot of row) {
			if (spot === 'D') return 'Dog!!';
			if (spot === '@') total++;
		}
	}
	return bags * cap >= total ? 'Clean' : 'Cr@p';
}

// Test Codes
const doTest = (garden, bags, cap, expected) => {
	const strictEqual = (actual, expected) => {
		if (actual === expected) console.log('✅Test Passed');
		else console.log('❌Test Failed');
	};
	strictEqual(crap(garden.slice(), bags, cap), expected);
};
doTest(
	[
		['_', '_', '_', '_'],
		['_', '_', '_', '@'],
		['_', '_', '@', '_'],
	],
	2,
	2,
	'Clean',
);
doTest(
	[
		['_', '_', '_', '_'],
		['_', '_', '_', '@'],
		['_', '_', '@', '_'],
	],
	1,
	1,
	'Cr@p',
);
doTest(
	[
		['_', '_'],
		['_', '@'],
		['D', '_'],
	],
	2,
	2,
	'Dog!!',
);
doTest(
	[
		['_', '_', '_', '_'],
		['_', '_', '_', '@'],
		['_', '_', '_', '_'],
	],
	1,
	1,
	'Clean',
);
doTest(
	[
		['_', '_', '_', '_'],
		['_', '_', '_', '_'],
		['_', '_', '_', '_'],
	],
	2,
	2,
	'Clean',
);
doTest(
	[
		['@', '@'],
		['@', '@'],
		['@', '@'],
	],
	3,
	2,
	'Clean',
);
doTest(
	[
		['@', '@'],
		['@', '@'],
		['@', 'D'],
	],
	2,
	2,
	'Dog!!',
);
doTest(
	[
		['@', '_'],
		['_', '_'],
	],
	2,
	0,
	'Cr@p',
);
doTest(
	[
		['_', '_', '_', '_'],
		['_', '_', '_', '_'],
	],
	0,
	1,
	'Clean',
);
doTest(
	[
		['@', '_'],
		['_', 'D'],
	],
	2,
	0,
	'Dog!!',
);
doTest([['_'], ['_'], ['_']], 0, 0, 'Clean');
