/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/594620d5e80216ec6700003a
/* ========== ========== ========== ========== ========== ==========*/
/*
Lat/Long Parser

Description:
Google often returns latitude and longitude coordinates in comma separated format, with cardinal directions instead of positive and negative values.

Create a method that takes a string of input, (e.g., "33.4489 S, 70.6693 W"), and returns an array of two elements: the latitude and longitude values (e.g., [-33.4489, -70.6693] or [70.134, 40])

Inputs will always be comma separated, positive numbers, can include floats or whole numbers, with or without cardinal direction letters (N, E, S, and W). Assume positive values when no cardinal direction is specified.

Inputs could have weird spacing, e.g., " 10.22    E, 72.1  N   "

S (South) and W (West) should be converted to negative values.

*/

// Solution
function latLng(raw) {
	const chunks = raw.split(',').map((e) => e.trim());
	const coordinates = [];
	for (const chunk of chunks) {
		const match = chunk.match(/(\d+(?:\.\d+)?)\s*([NESW]?)/);
		let value = parseFloat(match[1]);
		let direction = match[2];
		if (direction === 'S' || direction === 'W') value = -Math.abs(value);
		console.log(direction);
		coordinates.push(value);
	}
	return coordinates;
}

// Test Codes
const doTest = (a, b) => {
	const actual = latLng(a);
	if (actual === b) return true;
	else if (Array.isArray(actual) && Array.isArray(b) && a.length === b.length) {
		return actual.every((e, i) => e === b[i]);
	}
	return false;
};
doTest('26.8206 N, 30.8025 E', [26.8206, 30.8025]);
doTest('39.7392 N, 104.9903 W', [39.7392, -104.9903]);
doTest('26.2041 S, 28.0473 E', [-26.2041, 28.0473]);
doTest('33.4489 S, 70.6693 W', [-33.4489, -70.6693]);

doTest('26.2041, 28.0473', [26.2041, 28.0473]);
doTest('33.4489S,70.6693W', [-33.4489, -70.6693]);
doTest('26.2041            S,   28.0473  E', [-26.2041, 28.0473]);
doTest('33 S, 70 W', [-33, -70]);
doTest('33.4450 S, 70 W', [-33.445, -70]);
doTest('33.0 S, 70.0 W', [-33.0, -70.0]);
