/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/587ae98e2ab0ef32ef00004c/
/* ========== ========== ========== ========== ========== ==========*/
/*
We are the Robots d[(0)(0)]b

Description:
------------------------------------------------------------------
 we are programmed just to do anything you want us to
          w e  a r e  t h e  r o b o t s
                         

-----------------------------------------------------------[ d[(0)(0)]b]

Task..... You will receieve an array of strings such as

a = ["We're functioning automatik d[(0)(0)]b","And we are dancing mechanik d[(0)(0)]b"]

Count the robots represented by d[(0)(0)]b

Unless of course the factory replaced a part on the robot.....

d[(0)(0)]b could look a little different depending on the supplier maybe like this 

d[(0)(0)]B or d[(0)(0}]B 

It's pretty random actually but with a global supply chain it's hard to control which part you get. Most of the parts are made global except the ones made in the factory which do not change.

d[(0)(0)]B 

In all robots the eyes do not change.

d[(0)(0)]B 

...0..0...
   ^  ^            
   |  | 

The rest of the body can change at random.

legs any in => abcdefghijklmnopqrstuvwxyz
...0..0... 
^        ^             
|        |

body any in => |};&#[]/><()*


...0..0... 
 ^^ ^^ ^^            
 || || ||           

There may be cases where a part is totally missing and of course a robot cannot function at all without a part or where the factory put a valid part in the wrong place and it's again not a valid robot.

return an array of strings with a count of each of the following tasks.

Case insensitve count of robots in string with "automatik" or "mechanik". Strings do not contain both "automatik and "mechanik".

Return an array with the count like below

a[0] = automatik count
a[1] = mechanik count

["1 robots functioning automatik", "1 robots dancing mechanik"]
to pay tribute...respect :)

https://en.wikipedia.org/wiki/The_Robots

Songwriters: HUETTER, RALF / SCHNEIDER-ESLEBEN, FLORIAN / BARTOS, KARL
*/

// Solution
function countRobots(array) {
	if (!array)
		return ['0 robots functioning automatik', '0 robots dancing mechanik'];

	const legs = '[a-zA-Z]';
	const body = '[|};&#[\\]/><()*]';
	const eyes = '0';

	const robotPattern = `${legs}${body}{2}${eyes}${body}{2}${eyes}${body}{2}${legs}`;
	const robotRegex = new RegExp(robotPattern, 'g');

	let autoCount = 0,
		mechCount = 0;

	for (const str of array) {
		const matches = str.match(robotRegex);
		const robotCount = matches ? matches.length : 0;
		const lower = str.toLowerCase();
		if (lower.includes('automatik')) autoCount += robotCount;
		if (lower.includes('mechanik')) mechCount += robotCount;
	}

	return [
		`${autoCount} robots functioning automatik`,
		`${mechCount} robots dancing mechanik`,
	];
}

// Test Codes
const deepEqual = (a, b) => {
	let ok = false;
	if (a === b) console.log('Correct!');
	else if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
		ok = a.every((e, i) => e === b[i]);
	}
	if (ok) console.log('Correct!');
	else console.log('Incorect', a, b);
	return ok;
};
var a = [];
deepEqual(countRobots(a), [
	'0 robots functioning automatik',
	'0 robots dancing mechanik',
]);

var a = ["We're functioning automatik", 'And we are dancing mechanik'];
deepEqual(countRobots(a), [
	'0 robots functioning automatik',
	'0 robots dancing mechanik',
]);

var a = [
	"We're functioning automatik d[(0)(0)]b",
	'And we are dancing mechanik d[(0)(0)]b d[(0)(0)]b',
];
deepEqual(countRobots(a), [
	'1 robots functioning automatik',
	'2 robots dancing mechanik',
]);

var a = [
	"d[(0)(0)]b We're functioning automatik d[(0)(0)]b",
	'And we are d[(0)(0)]b dancing mechanik d[(0)(0)]b d[(0)(0)]b',
];
deepEqual(countRobots(a), [
	'2 robots functioning automatik',
	'3 robots dancing mechanik',
]);

var a = [
	"d[(0)(0)}b We're functioning automatik D[(0)(0)]b",
	'And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b',
];
deepEqual(countRobots(a), [
	'2 robots functioning automatik',
	'3 robots dancing mechanik',
]);

var a = [
	"d*(0)(0)}b We're functioning e(<0/>0]#m Automatik Roboter0%1 D[(0)(0)]b",
	'And we are d[(0)(0}]b dancing mechanik d[(0)(0)]b c[(0)(0)]b',
];
deepEqual(countRobots(a), [
	'3 robots functioning automatik',
	'3 robots dancing mechanik',
]);

var a = [
	"d*(0)(0)}b We're functioning d>[0;;0&&f automatik D[(0)(0)]b",
	'and m><0(;0[;a we dancing are Mechanic',
];
deepEqual(countRobots(a), [
	'3 robots functioning automatik',
	'0 robots dancing mechanik',
]);

var a = [
	"We're charging our battery",
	"And now we're full of energy",
	'We are the robots',
	"We're functioning automatik",
	'And we are dancing mechanik',
	'We are the robotororo robots',
	'Ja tvoi sluga',
	'Ja tvoi Rabotnik robotnik',
	'We are programmed just to do',
	'anything you want us to',
	'we are the robots',
	"We're functioning Automatic",
	'and we are dancing Mechanic',
	'we are the robots',
	'Ja tvoi sluga',
	'Ja tvoi Rabotnik robotnik',
	'We are the robots',
	"d*(0)(0)}b We're functioning automatik D[(0)(0)]b",
	'And we are d[(0)(0}]b dancing mechanik Roboter0%1 d[(0)(0)]b c[(0)(0)]b',
];
deepEqual(countRobots(a), [
	'2 robots functioning automatik',
	'3 robots dancing mechanik',
]);

var a = [
	"d (0)(0)}b We're functioning &>[0;;0&&f automatik D[(0 (0)]b",
	'and m><0(;0 ;a we dancing are Mechanic',
];
deepEqual(countRobots(a), [
	'0 robots functioning automatik',
	'0 robots dancing mechanik',
]);
