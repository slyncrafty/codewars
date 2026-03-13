/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/570df12ce6e9282a7d000947/
/* ========== ========== ========== ========== ========== ==========*/
/*
Coding 3min : Eat watermelon

Description:
Summer is coming, John has some watermelon to eat. When he eats a piece of watermelon into his mouth, if there are more than 5 watermelon seeds, John spit them out; if not, John will swallow them down.

Give you a parameter watermelon(2D number array, 8x8), 0 is the watermelon flesh, 1 is the watermelon seed.

1,0,0,1,1,1,0,1
1,0,1,0,1,1,0,0
1,1,1,1,0,0,0,0
0,1,0,1,1,1,1,0
0,0,0,1,0,1,0,0
1,1,1,0,0,0,1,1
1,0,1,1,0,0,0,0
0,0,0,0,0,0,0,0
```
John eats 1/4 every time(4x4 matrix)...

```
1,0,0,1,1,1,0,1      x,x,x,x,1,1,0,1      x,x,x,x,x,x,x,x
1,0,1,0,1,1,0,0      x,x,x,x,1,1,0,0      x,x,x,x,x,x,x,x
1,1,1,1,0,0,0,0      x,x,x,x,0,0,0,0      x,x,x,x,x,x,x,x
0,1,0,1,1,1,1,0      x,x,x,x,1,1,1,0      x,x,x,x,x,x,x,x
0,0,0,1,0,1,0,0  ==> 0,0,0,1,0,1,0,0  ==> 0,0,0,1,0,1,0,0
1,1,1,0,0,0,1,1      1,1,1,0,0,0,1,1      1,1,1,0,0,0,1,1
1,0,1,1,0,0,0,0      1,0,1,1,0,0,0,0      1,0,1,1,0,0,0,0
0,0,0,0,0,0,0,0      0,0,0,0,0,0,0,0      0,0,0,0,0,0,0,0

                     x,x,x,x,x,x,x,x      x,x,x,x,x,x,x,x
                     x,x,x,x,x,x,x,x      x,x,x,x,x,x,x,x
                     x,x,x,x,x,x,x,x      x,x,x,x,x,x,x,x
                     x,x,x,x,x,x,x,x      x,x,x,x,x,x,x,x
                 ==> x,x,x,x,0,1,0,0  ==> x,x,x,x,x,x,x,x
                     x,x,x,x,0,0,1,1      x,x,x,x,x,x,x,x
                     x,x,x,x,0,0,0,0      x,x,x,x,x,x,x,x
                     x,x,x,x,0,0,0,0      x,x,x,x,x,x,x,x

```
Return a number that John spit out how much the watermelon seeds.

Example:

```
In accordance with the above example, John spit out:
10(1st eat)+8(2nd eat)+7(3rd eat)+0(4th eat)=25
So, sc(watermelon) should return 25

Another example:
watermelon=[
[0,1,0,0,0,0,1,0],
[0,0,1,0,1,0,0,0],
[0,1,1,0,1,0,0,0],
[0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,1,0],
[0,0,1,0,1,0,1,0],
[0,1,0,1,1,0,0,0],
[0,1,0,0,0,0,0,1]]
John spit out: 0(1st eat)+0(2nd eat)+0(3rd eat)+0(4th eat)=0
So, sc(watermelon) should return 0
(John swallowed all the watermelon seeds)
```

*/

// Solution
const sc = (w) => {
	let s = 0;
	for (i = 0; i < 2; i++)
		for (j = 0; j < 2; j++) {
			c = 0;
			for (r = 0; r < 4; r++)
				for (k = 0; k < 4; k++) c += w[i * 4 + r][j * 4 + k];
			if (c > 5) s += c;
		}
	return s;
};

// Test Codes
function checkLen(f) {
	console.log(f.toString().length);
}
checkLen(sc);
const assertSimilar = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed.');
};

var watermelon1 = [
	[1, 0, 0, 1, 1, 1, 0, 1],
	[1, 0, 1, 0, 1, 1, 0, 0],
	[1, 1, 1, 1, 0, 0, 0, 0],
	[0, 1, 0, 1, 1, 1, 1, 0],
	[0, 0, 0, 1, 0, 1, 0, 0],
	[1, 1, 1, 0, 0, 0, 1, 1],
	[1, 0, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
];
assertSimilar(sc(watermelon1), 25);

var watermelon2 = [
	[0, 1, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 1, 0, 0, 0],
	[0, 1, 1, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 1, 0, 1, 0, 1, 0],
	[0, 1, 0, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 1],
];
assertSimilar(sc(watermelon2), 0);

var watermelon3 = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[0, 1, 0, 0, 1, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 1, 1, 0, 0, 0],
];
assertSimilar(sc(watermelon3), 6);
