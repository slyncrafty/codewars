/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
What century is it?

Description:
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
Examples

"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"

*/

// Solution
function whatCentury(year) {
	const century = Math.ceil(Number(year) / 100);
	const lastDigit = century % 10;
	let suffix = 'th';
	if (century > 20) {
		if (lastDigit === 1) suffix = 'st';
		else if (lastDigit === 2) suffix = 'nd';
		else if (lastDigit === 3) suffix = 'rd';
	}
	return century + suffix;
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};
strictEqual(
	whatCentury('1999'),
	'20th',
	"With input '1999' solution produced wrong output",
);
strictEqual(
	whatCentury('2011'),
	'21st',
	"With input '2011' solution produced wrong output",
);
strictEqual(
	whatCentury('2154'),
	'22nd',
	"With input '2154' solution produced wrong output",
);
strictEqual(
	whatCentury('2259'),
	'23rd',
	"With input '2259' solution produced wrong output",
);
strictEqual(
	whatCentury('1234'),
	'13th',
	"With input '1234' solution produced wrong output",
);
strictEqual(
	whatCentury('1023'),
	'11th',
	"With input '1023' solution produced wrong output",
);
strictEqual(
	whatCentury('2000'),
	'20th',
	"With input '2000' solution produced wrong output",
);
