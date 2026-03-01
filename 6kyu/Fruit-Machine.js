/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/513fa1d75e4297ba38000003
/* ========== ========== ========== ========== ========== ==========*/
/*
Fruit Machine

Description:
Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

Task

You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.

Rules

1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.


Scoring
        
Item        Three of the same       Two of the same     Two of the same plus one Wild 
Wild        100                     10                  N/A   
Star        90                      9                   18
Bell        80                      8                   16
Shell       70                      7                   14
Seven       60                      6                   12    
Cherry      50                      5                   10     
Bar         40                      4                   8     
King        30                      3                   6    
Queen       20                      2                   4     
Jack        10                      1                   2


Returns

Return an integer of the score.

Example
Initialise

reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);

Scoring

reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50

Return

result == 50

*/

// Solution
function fruit(reels, spins) {
	const scores = {
		Wild: [100, 10],
		Star: [90, 9],
		Bell: [80, 8],
		Shell: [70, 7],
		Seven: [60, 6],
		Cherry: [50, 5],
		Bar: [40, 4],
		King: [30, 3],
		Queen: [20, 2],
		Jack: [10, 1],
	};

	const [a, b, c] = spins.map((s, i) => reels[i][s]);

	const counts = {};
	for (let sym of [a, b, c]) counts[sym] = (counts[sym] || 0) + 1;

	// Case 1: Three of a kind
	for (let sym in counts) {
		if (counts[sym] === 3) {
			return scores[sym][0];
		}
	}

	// Case 2: Two of a kind
	for (let sym in counts) {
		if (counts[sym] === 2) {
			const off = [a, b, c].find((x) => x !== sym); // the third symbol

			// wildcard bonus (Two of the same plus one Wild)
			if (off === 'Wild') {
				return scores[sym][1] * 2;
			}

			return scores[sym][1];
		}
	}

	// Case 3: No matches
	return 0;
}

// Test Codes
const strictEqual = (a, b, msg) => {
	const equal = (a, b) => {
		if (a === b) return true;
		else if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			return a.every((e, i) => equal(e, b[i]));
		}
		return false;
	};

	if (equal(a, b)) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

let reel = [
	'Wild',
	'Star',
	'Bell',
	'Shell',
	'Seven',
	'Cherry',
	'Bar',
	'King',
	'Queen',
	'Jack',
];
let spin = [0, 0, 0];
strictEqual(fruit([reel, reel, reel], spin), 100, "Should return: '100'");

let reel1 = [
	'Wild',
	'Star',
	'Bell',
	'Shell',
	'Seven',
	'Cherry',
	'Bar',
	'King',
	'Queen',
	'Jack',
];
let reel2 = [
	'Bar',
	'Wild',
	'Queen',
	'Bell',
	'King',
	'Seven',
	'Cherry',
	'Jack',
	'Star',
	'Shell',
];
let reel3 = [
	'Bell',
	'King',
	'Wild',
	'Bar',
	'Seven',
	'Jack',
	'Shell',
	'Cherry',
	'Queen',
	'Star',
];
spin = [5, 4, 3];
strictEqual(fruit([reel1, reel2, reel3], spin), 0, "Should return: '0'");

reel1 = [
	'King',
	'Cherry',
	'Bar',
	'Jack',
	'Seven',
	'Queen',
	'Star',
	'Shell',
	'Bell',
	'Wild',
];
reel2 = [
	'Bell',
	'Seven',
	'Jack',
	'Queen',
	'Bar',
	'Star',
	'Shell',
	'Wild',
	'Cherry',
	'King',
];
reel3 = [
	'Wild',
	'King',
	'Queen',
	'Seven',
	'Star',
	'Bar',
	'Shell',
	'Cherry',
	'Jack',
	'Bell',
];
spin = [0, 0, 1];
strictEqual(fruit([reel1, reel2, reel3], spin), 3, "Should return: '3'");

reel1 = [
	'King',
	'Jack',
	'Wild',
	'Bell',
	'Star',
	'Seven',
	'Queen',
	'Cherry',
	'Shell',
	'Bar',
];
reel2 = [
	'Star',
	'Bar',
	'Jack',
	'Seven',
	'Queen',
	'Wild',
	'King',
	'Bell',
	'Cherry',
	'Shell',
];
reel3 = [
	'King',
	'Bell',
	'Jack',
	'Shell',
	'Star',
	'Cherry',
	'Queen',
	'Bar',
	'Wild',
	'Seven',
];
spin = [0, 5, 0];
strictEqual(fruit([reel1, reel2, reel3], spin), 6, "Should return: '6'");
