/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58379c3b51e3b680aa000164
/* ========== ========== ========== ========== ========== ==========*/
/*
Decimals or groups of thousands??

Description:
Countries such as the U.S. and China use a dot to represent a decimal point, they also use a comma to separate groups of thousands e.g. 4,353.56

Other countries (mostly in Europe) instead use a comma to represent a decimal point, they also use a dot to separate groups of thousands e.g. 4.353,56

Your task is to sum up an array of string representation of numbers being in one of the two formats mentioned above with AT MOST two decimal places. The resulted sum should be a string with the format of xx,xxx.xx (keep two decimal places, separate groups of thousands with comma if necessary)

This Kata is inspired by one of the bugs that almost happened due to the differences in number formatting ( •̀ω•́ )σ

*/

// Solution
function sumUpNumbers(arr) {
	let sum = 0;
	for (const num of arr) {
		sum += parseNumber(num);
	}
	return sum.toLocaleString('en-US');
}

const parseNumber = (str) => {
	const hasComma = str.includes(',');
	const hasDot = str.includes('.');

	if (!hasComma && !hasDot) return Number(str);
	const lastComma = str.lastIndexOf(',');
	const lastDot = str.lastIndexOf('.');
	const isEUFormat = lastComma > lastDot;
	if (isEUFormat) {
		return Number(str.replace(/\./g, '').replace(',', '.'));
	} else {
		return Number(str.replace(/\,/g, ''));
	}
};

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct');
	else console.log('Incorrect', a, b);
};

assertEquals(sumUpNumbers(['1,234.34', '1.324,2', '14']), '2,572.54');
assertEquals(
	sumUpNumbers(['1,111,234.34', '1.222.324,2', '14']),
	'2,333,572.54'
);
