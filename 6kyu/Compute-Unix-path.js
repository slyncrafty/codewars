/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/564b323d7ff0ed401400015f/
/* ========== ========== ========== ========== ========== ==========*/
/*
Compute Unix path

Description:
Your task is simple: combine input parts into a Unix style path.

The parameters are represented by strings which may contain letters, dots, spaces, slashes and backslashes.

Backslashes must be converted into slashes, spaces must be trimmed, empty parts must be removed and trailing slashes should be removed.

An empty path should be transformed into a slash.

A few example test cases have been added for a better understanding.

*/

// Solution
function combinePathsUri(...fragments) {
	const cleaned = fragments
		.map((e) =>
			e
				.replace(/\s+/g, '')
				.replace(/[\/\\]+/g, '/')
				.trim(),
		)
		.join('/') // combine first
		.split('/') // break into segments
		.filter(Boolean); // remove empty segments
	return cleaned.length ? '/' + cleaned.join('/') : '/';
}

// Test Codes
const strictEqual = (actual, expected) => {
	if (actual === expected) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
strictEqual(combinePathsUri(), '/');
strictEqual(combinePathsUri('/'), '/');
strictEqual(combinePathsUri('/', '/', '/'), '/');
strictEqual(combinePathsUri('\\'), '/');
strictEqual(combinePathsUri('\\', '\\', '\\'), '/');
strictEqual(combinePathsUri('/', '\\'), '/');
strictEqual(combinePathsUri('/', '\\', '/', '\\', '/', '\\', '/'), '/');
strictEqual(combinePathsUri('google', 'search', 'test'), '/google/search/test');
strictEqual(
	combinePathsUri('\\testing\\back\\', '\\slashes\\'),
	'/testing/back/slashes',
);
strictEqual(
	combinePathsUri(
		'   /testing',
		'',
		'',
		'  \\  empty',
		'\\parts/',
		' and ',
		'',
		'with/different\\slashes    ',
	),
	'/testing/empty/parts/and/with/different/slashes',
);
