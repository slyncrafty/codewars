/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a405ba4e1ce0e1d7800012e
/* ========== ========== ========== ========== ========== ==========*/
/*
Custom Christmas Tree

Description:
Christmas is coming, and your task is to build a custom Christmas tree with the specified characters and the specified height.
Inputs:

    chars: the specified characters.
    n: the specified height. A positive integer greater than 2.

Output:

    A multiline string. Each line is separated by \n. A tree contains two parts: leaves and trunks.

The leaves should be n rows. The first row fill in 1 char, the second row fill in 3 chars, and so on. A single space will be added between two adjust chars, and some of the necessary spaces will be added to the left side, to keep the shape of the tree. No space need to be added to the right side.

The trunk should be at least 1 unit height, it depends on the value of the n. The minimum value of n is 3, and the height of the tree trunk is 1 unit height. If n increased by 3, and the tree trunk increased by 1 unit. For example, when n is 3,4 or 5, trunk should be 1 row; when n is 6,7 or 8, trunk should be 2 row; and so on.

Still not understand the task? Look at the following example ;-)
Examples

For chars = "*@o" and n = 3,the output should be:

  *
 @ o
* @ o
  |

For chars = "*@o" and n = 6,the output should be:

     *
    @ o
   * @ o
  * @ o *
 @ o * @ o
* @ o * @ o
     |
     |

For chars = "1234" and n = 6,the output should be:

     1
    2 3
   4 1 2
  3 4 1 2
 3 4 1 2 3
4 1 2 3 4 1
     |
     |

For chars = "123456789" and n = 3,the output should be:

  1
 2 3
4 5 6
  |

*/

// Solution
function customChristmasTree(chars, n) {
	if (n < 3) return '';
	const lines = [];
	let charIndex = 0;
	const halfWidth = n;
	const trunkHeight = Math.floor(n / 3);

	for (let row = 1; row <= halfWidth; row++) {
		const padStart = ' '.repeat(halfWidth - row);
		const line = [];
		for (let k = 0; k < row; k++) {
			line.push(chars[charIndex % chars.length]);
			charIndex++;
		}
		lines.push(padStart + line.join(' '));
	}

	const trunkPadStart = ' '.repeat(halfWidth - 1);
	for (let t = 0; t < trunkHeight; t++) {
		lines.push(trunkPadStart + '|');
	}
	return lines.join('\n');
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.error('Incorrect!');
};
assertEquals(
	customChristmasTree('*@o', 3),
	`  *
 @ o
* @ o
  |`
);

assertEquals(
	customChristmasTree('*@o', 6),
	`     *
    @ o
   * @ o
  * @ o *
 @ o * @ o
* @ o * @ o
     |
     |`
);

assertEquals(
	customChristmasTree('1234', 6),
	`     1
    2 3
   4 1 2
  3 4 1 2
 3 4 1 2 3
4 1 2 3 4 1
     |
     |`
);

assertEquals(
	customChristmasTree('123456789', 3),
	`  1
 2 3
4 5 6
  |`
);
