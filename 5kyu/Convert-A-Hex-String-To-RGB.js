/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
/* ========== ========== ========== ========== ========== ==========*/
/*
Convert A Hex String To RGB

Description:
When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

    Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
    Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")
Example

"#FF9933" --> {r: 255, g: 153, b: 51}
*/

// Solution
function hexStringToRGB(hexString) {
	const r = parseInt(hexString.slice(1, 3), 16);
	const g = parseInt(hexString.slice(3, 5), 16);
	const b = parseInt(hexString.slice(5, 7), 16);
	return { r, g, b };
}

// Test Codes
const deepEqualObj = (a, b) => {
	if (a === b) return true;
	if (a && b && typeof a === 'object' && typeof b === 'object') {
		const keysA = Object.keys(a);
		const keysB = Object.keys(b);
		return keysA.every((k) => deepEqualObj(keysA[k], keysB[k]));
	}
	return false;
};
const doTest = (input, b) => {
	if (deepEqualObj(hexStringToRGB(input), b)) console.log('Correct!');
	else console.error('Incorrect!');
};
doTest('#FF9933', { r: 255, g: 153, b: 51 });
doTest('#beaded', { r: 190, g: 173, b: 237 });
doTest('#000000', { r: 0, g: 0, b: 0 });
doTest('#111111', { r: 17, g: 17, b: 17 });
doTest('#Fa3456', { r: 250, g: 52, b: 86 });
