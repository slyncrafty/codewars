/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a0366f12b651dbfa300000c
/* ========== ========== ========== ========== ========== ==========*/
/*
Lucky Sevens

Description:
A "Lucky Seven" is the number seven surrounded by numbers that add up to form a perfect cube. The surrounding numbers will be described as the numbers directly above, below, and next to (not diagonally) the number 7. You will be given a 2D array containing at least 1 lucky seven. Your function should return the number of lucky sevens in the array.

Here are some "Lucky Sevens" for example:

[ [ 'x', 513, 'x', 'x', 'x' ],
  [ 82,   7,  32,  'x', 'x' ],
  [ 'x', 102, 'x', 'x', 'x' ],
  [ 'x', 'x', 'x', 'x', 'x' ],
  [ 'x', 'x', 'x', 'x', 'x' ] ]
  
[ [ 'x', 'x', 'x', 'x', 'x' ],
  [ 'x', 'x', 'x', 'x', 'x' ],
  [ 'x', 'x', 'x', 'x', 'x' ],
  [ 'x', 'x', 'x', 'x',  9  ],
  [ 'x', 'x', 'x', 55,   7  ] ]
  
[ [ 'x', 'x', 'x', 'x', 'x' ],
  [ 'x',  1,  'x', 'x', 'x' ],
  [  0,   7,   0,  'x', 'x' ],
  [ 'x',  0,  'x', 'x', 'x' ],
  [ 'x', 'x', 'x', 'x', 'x' ] ]

*/

// Solution
function luckySevens(arr) {
	const directions = [
		[-1, 0],
		[0, -1],
		[1, 0],
		[0, 1],
	];
	const rows = arr.length;
	const cols = arr[0].length;
	let count = 0;
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (arr[r][c] !== 7) continue;

			let sum = 0;

			for (const [dr, dc] of directions) {
				const nr = r + dr;
				const nc = c + dc;

				if (
					nr >= 0 &&
					nr < rows &&
					nc >= 0 &&
					nc < cols &&
					typeof arr[nr][nc] === 'number'
				) {
					sum += arr[nr][nc];
				}
			}
			const root = Math.round(Math.cbrt(sum));
			if (root ** 3 === sum) {
				count++;
			}
		}
	}
	return count;
}

// Test Codes
const assertEquals = (actual, expected) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else return false;
	};
	if (equal(actual, expected)) console.log('✅PASSED');
	else console.log('❌FAILED', actual, 'should match', expected);
};

const testBoard0 = [
	[740, 183, 194, 902, 297],
	[772, 355, 668, 54, 993],
	[72, 7, 229, 169, 164],
	[730, 73, 13, 7, 3],
	[26, 570, 955, 31, 116],
];

const testBoard1 = [
	[647, 25, 530, 200, 438, 635],
	[10, 7, 19, 17, 439, 7],
	[271, 10, 3, 7, 5, 187],
	[768, 430, 876, 2, 335, 57],
	[21, 7, 229, 108, 7, 63],
	[939, 49, 199, 611, 6, 513],
];

const testBoard2 = [
	[74, 4, 837, 849, 68, 7, 365, 657],
	[622, 7, 502, 520, 34, 112, 7, 31],
	[909, 345, 190, 7, 7, 17, 4, 7],
	[465, 31, 7, 79, 6, 216, 108, 7],
	[113, 977, 43, 771, 6, 457, 507, 953],
	[654, 786, 648, 145, 7, 182, 7, 230],
	[478, 328, 30, 7, 98, 825, 81, 384],
	[929, 74, 261, 70, 968, 638, 7, 109],
];

const testBoard3 = [
	[506, 664, 946, 363, 56, 144, 706, 74, 177, 7, 694],
	[437, 474, 348, 25, 7, 36, 370, 22, 7, 78, 45],
	[7, 261, 48, 821, 8, 181, 7, 115, 66, 715, 7],
	[734, 67, 724, 904, 312, 446, 63, 894, 4, 300, 838],
	[11, 7, 24, 153, 7, 18, 743, 1, 7, 2, 823],
	[139, 23, 16, 7, 29, 7, 53, 410, 1, 65, 509],
	[744, 1, 7, 7, 128, 174, 230, 131, 21, 7, 33],
	[341, 253, 3, 870, 38, 7, 113, 671, 99, 6, 744],
	[632, 723, 320, 430, 61, 18, 37, 28, 7, 69, 936],
	[383, 7, 753, 19, 7, 36, 654, 781, 20, 921, 969],
	[283, 334, 463, 7, 9, 143, 411, 443, 958, 7, 7],
];

const testBoard4 = [
	[186, 946, 992, 578, 286, 10, 295, 499, 369],
	[408, 16, 347, 608, 827, 7, 7, 727, 858],
	[5, 7, 4, 638, 409, 472, 817, 1, 531],
	[792, 2, 179, 7, 133, 684, 0, 7, 0],
	[764, 374, 962, 50, 46, 95, 474, 0, 460],
	[165, 7, 133, 5, 7, 11, 825, 40, 626],
	[240, 57, 954, 447, 2, 551, 1, 7, 17],
	[7, 738, 7, 450, 37, 7, 120, 6, 7],
	[7, 683, 902, 66, 402, 21, 870, 323, 233],
];

assertEquals(luckySevens(testBoard0), 2);
assertEquals(luckySevens(testBoard1), 4);
assertEquals(luckySevens(testBoard2), 5);
assertEquals(luckySevens(testBoard3), 11);
assertEquals(luckySevens(testBoard4), 7);
