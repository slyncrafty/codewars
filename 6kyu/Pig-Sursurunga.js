/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56d9439813f38853b40000e4
/* ========== ========== ========== ========== ========== ==========*/
/*
Pig Sursurunga

Description:
*/

// Solution
function sursurungal(txt) {
	return txt.replace(/(\d+)\s+(\w+)/g, (match, numStr, word) => {
		const n = parseInt(numStr, 10);
		if (n === 0 || n === 1) return match;
		const w =
			word.endsWith('s') && !word.endsWith('ss') ? word.slice(0, -1) : word;

		if (n === 2) return `${numStr} bu${w}`;
		if (n >= 3 && n <= 9) return `${numStr} ${w}zo`;
		return `${numStr} ga${w}ga`;
	});
}

// Test Codes
const strictEqual = (a, b) => {
	if (a === b) console.log('Correct');
	else console.error('Incorrect', a, b);
};
strictEqual(sursurungal('1 tomato'), '1 tomato');
strictEqual(sursurungal('0 tomato'), '0 tomato', '0 is considered as singular');
strictEqual(
	sursurungal('1 ananas'),
	'1 ananas',
	"singular ending with 's' keep it"
);

strictEqual(
	sursurungal('2 bananas'),
	'2 bubanana',
	"dual should start with 'bu'"
);
strictEqual(
	sursurungal('3 bananas'),
	'3 bananazo',
	"paucal should end with 'zo'"
);
strictEqual(
	sursurungal('10 bananas'),
	'10 gabananaga',
	"plural should start and end with 'ga'"
);
strictEqual(
	sursurungal('111 bananas'),
	'111 gabananaga',
	'111 is a plural, not a singular'
);
strictEqual(
	sursurungal('6 birds with 2 wings each = 12 legs'),
	'6 birdzo with 2 buwing each = 12 galegga'
);
strictEqual(
	sursurungal('\n3 pigs\nmet 1 wolf\n2 days ago'),
	'\n3 pigzo\nmet 1 wolf\n2 buday ago'
);
