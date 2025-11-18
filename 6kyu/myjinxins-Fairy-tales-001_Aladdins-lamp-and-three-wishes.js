/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57de02e2f5ec16bda100074f
/* ========== ========== ========== ========== ========== ==========*/
/*
myjinxin's Fairy tales #001 : Aladdin's lamp and three wishes

Description:

You are a light God, living in Aladdin's lamp. If someone is rubbing the surface of the lamp, you will come out and realize his three wishes. You have an endless life, the meaning of your life is to wait for the owner to appear...

One day, a traveler appeared, with a big parcel. There are some Gold coins, silver coins, waters, foods, books, weapons, clothes, medicines, tools in his big parcel, Arranged neatly, all the same items are adjacent to each other.

["gold coin","gold coin","gold coin","silver coin","silver coin",
"water","water","water","water", "food", "food", "food", "food",
"book","book", "weapon","weapon", "clothe","clothe", "medicine",
"medicine", "tool", "tool"]

He found Aladdin's lamp and hear your voice: "friction lamp, put me out, I will realize your three wishes." He wiped the dust off the lamp, a smoke burst out, and you came out from the light. The next thing is that you help him to achieve the three wishes:

wish1="I want 1 food"
wish2="I want 2 books"
wish3="I want 1 girl"

You will keep your promise, do your best to help him achieve his wish. Add all the things he needs to the back of the same kind. If he asks for something that does not appear in the list, add it to the end of the list.

["gold coin","gold coin","gold coin","silver coin","silver coin",
"water","water","water","water", "food","food", "food", "food", 
"food", "book","book","book","book", "weapon","weapon", "clothe",
"clothe", "medicine","medicine", "tool", "tool","girl"]

If he is a greedy man, put forward such a wish: "I want n wishes"(n is a number), you will punish him, let him lose all his things, return [].
Task

Complete function threeWishes that accepts 4 arguments parcel, wish1, wish2 and wish3. Returns the result in accordance with the rules above.

Note the different of singular and plural. In order to simple, we always add s to the end of the plural, the singular is not.

*/

// Solution
function threeWishes(parcel, wish1, wish2, wish3) {
	const wishes = [wish1, wish2, wish3];
	for (const wish of wishes) {
		const parts = wish.split(' ');
		const n = parts[2];
		let w = parts.slice(3).join(' ');
		if (w === 'wish' || w === 'wishes') return [];
		if (w.endsWith('s')) w = w.slice(0, -1);

		for (let i = 0; i < n; i++) {
			const lastIndex = parcel.lastIndexOf(w);
			if (lastIndex === -1) {
				parcel.push(w);
			} else {
				parcel.splice(lastIndex, 0, w);
			}
		}
	}
	return parcel;
}

// Test Codes
const deepEqual = (a, b) => {
	let ok = false;
	if (a === b) ok = true;
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('Correct');
	else console.log('Incorrect', a, b);
};
const doTest = (parcel, wish1, wish2, wish3, expected) => {
	const actual = threeWishes(parcel, wish1, wish2, wish3);
	deepEqual(actual, expected);
};

doTest(
	[
		'gold coin',
		'gold coin',
		'gold coin',
		'silver coin',
		'silver coin',
		'water',
		'water',
		'water',
		'water',
		'food',
		'food',
		'food',
		'food',
		'book',
		'book',
		'weapon',
		'weapon',
		'clothe',
		'clothe',
		'medicine',
		'medicine',
		'tool',
		'tool',
	],
	'I want 1 food',
	'I want 2 books',
	'I want 1 girl',
	[
		'gold coin',
		'gold coin',
		'gold coin',
		'silver coin',
		'silver coin',
		'water',
		'water',
		'water',
		'water',
		'food',
		'food',
		'food',
		'food',
		'food',
		'book',
		'book',
		'book',
		'book',
		'weapon',
		'weapon',
		'clothe',
		'clothe',
		'medicine',
		'medicine',
		'tool',
		'tool',
		'girl',
	]
);

doTest(
	[
		'gold coin',
		'silver coin',
		'food',
		'food',
		'food',
		'food',
		'book',
		'book',
		'weapon',
	],
	'I want 5 gold coins',
	'I want 3 foods',
	'I want 2 wines',
	[
		'gold coin',
		'gold coin',
		'gold coin',
		'gold coin',
		'gold coin',
		'gold coin',
		'silver coin',
		'food',
		'food',
		'food',
		'food',
		'food',
		'food',
		'food',
		'book',
		'book',
		'weapon',
		'wine',
		'wine',
	]
);

doTest(
	[
		'gold coin',
		'silver coin',
		'food',
		'food',
		'food',
		'food',
		'book',
		'book',
		'weapon',
	],
	'I want 1 gold coin',
	'I want 2 gold coins',
	'I want 3 gold coins',
	[
		'gold coin',
		'gold coin',
		'gold coin',
		'gold coin',
		'gold coin',
		'gold coin',
		'gold coin',
		'silver coin',
		'food',
		'food',
		'food',
		'food',
		'book',
		'book',
		'weapon',
	]
);

doTest(
	[
		'Gold coin',
		'silver coin',
		'food',
		'food',
		'food',
		'food',
		'book',
		'book',
		'weapon',
	],
	'I want 5 gold coins',
	'I want 3 foods',
	'I want 2 wishes',
	[]
);
