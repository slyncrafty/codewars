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
	return sum.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}

const parseNumber = (str) => {
	const lastComma = str.lastIndexOf(',');
	const lastDot = str.lastIndexOf('.');
	// number with no separators
	if (lastComma === -1 && lastDot === -1) return Number(str);
	// no dot but comma followed by 2 or less digits mean decimal(EU format)
	if (lastDot === -1 && str.length - 1 - lastComma < 3)
		return Number(str.replace(/\,/g, '.'));
	// determine for numbers that have both dot and comma
	const isEUFormat = lastComma > lastDot && lastDot > -1;
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
assertEquals(sumUpNumbers(['4,444,999', '8.234,1', '14,56']), '4,453,247.66');
