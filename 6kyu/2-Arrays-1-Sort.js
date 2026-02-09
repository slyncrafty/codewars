/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/546b22225874d24fbd00005b
/* ========== ========== ========== ========== ========== ==========*/
/*
2 Arrays 1 Sort

Description:
Imagine two arrays/lists where elements are linked by their positions in the array. For example:

HowMany = [ 1   ,   6  ,  5  ,   0  ];
Type = ['house', 'car','pen','jeans'];

Means I have 1 house, 6 cars,5 pens and 0 jeans.

Now if we sort one array we lose the connectivity. The goal is to create a sorting function that keeps the position link linkedSort(arrayToSort,linkedArray,compareFunction). So for every element that moves in arrayToSort(HowMany in the example), the corresponding element in linkedArray(Type in the example) needs to move similarly.

For example in Javascript:

//INPUT
HowMany = [ 1   ,   6  ,  5  ,   0  ];
Type = ['house', 'car','pen','jeans'];

//SORT
res = linkedSort(HowMany,Type,function(a,b){return a-b;})

//OUTPUT
HowMany === res === [ 0   ,   1   ,  5  ,  6  ];
Type       ===     ['jeans','house','pen','car'];

linkedSort(...) return the "arrayToSort" sorted only.

If no compare function is provided you should handle like an alphabetical sorting would do, e.g:

[-71,-6,35,0].sort() ===  [-6,-71,0,35] != [-71,-6,0,35]

Note: it is assumed that array are same length.

*/

// Solution
function linkedSort(aToSort, aLinked, compare) {
	const aPaired = aToSort.map((value, i) => ({ value, linked: aLinked[i] }));
	aPaired.sort((a, b) => {
		if (compare) return compare(a.value, b.value);
		return String(a.value) > String(b.value) ? 1 : -1;
	});

	for (let i = 0; i < aPaired.length; i++) {
		aToSort[i] = aPaired[i].value;
		aLinked[i] = aPaired[i].linked;
	}
	return aToSort;
}

// Test Codes
var HowMany = [1, 6, 5, 0];
var Type = ['house', 'car', 'pen', 'jeans'];
var compare = function (a, b) {
	return a - b;
};
var res = linkedSort(HowMany, Type);
const assertEquals = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

assertEquals(
	JSON.stringify(HowMany),
	JSON.stringify([0, 1, 5, 6]),
	'ToSort array not sorted',
);
assertEquals(
	JSON.stringify(Type),
	JSON.stringify(['jeans', 'house', 'pen', 'car']),
	'Linked array not sorted',
);
assertEquals(
	JSON.stringify(res),
	JSON.stringify([0, 1, 5, 6]),
	"The returned value isn't ToSort array",
);

HowMany = [-71, -6, 35, 0];
Type = [0, 'Hello', 32, true];
res = linkedSort(HowMany, Type); //no Compare
assertEquals(
	JSON.stringify(HowMany),
	JSON.stringify([-6, -71, 0, 35]),
	'ToSort array not sorted',
);
assertEquals(
	JSON.stringify(Type),
	JSON.stringify(['Hello', 0, true, 32]),
	'Linked array not sorted',
);
assertEquals(
	JSON.stringify(res),
	JSON.stringify([-6, -71, 0, 35]),
	"The returned value isn't ToSort array",
);
