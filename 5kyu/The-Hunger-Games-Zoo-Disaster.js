/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5902bc7aba39542b4a00003d
/* ========== ========== ========== ========== ========== ==========*/
/*
The Hunger Games - Zoo Disaster!

Description:
Story

A freak power outage at the zoo has caused all of the electric cage doors to malfunction and swing open...

All the animals are out and some of them are eating each other!
It's a Zoo Disaster!

Here is a list of zoo animals, and what they can eat

    antelope eats grass
    big-fish eats little-fish
    bug eats leaves
    bear eats big-fish
    bear eats bug
    bear eats chicken
    bear eats cow
    bear eats leaves
    bear eats sheep
    chicken eats bug
    cow eats grass
    fox eats chicken
    fox eats sheep
    giraffe eats leaves
    lion eats antelope
    lion eats cow
    panda eats leaves
    sheep eats grass

Kata Task
INPUT

A comma-separated string representing all the things at the zoo
TASK

Figure out who eats whom until no more eating is possible.
OUTPUT

A list of strings (refer to the example below) where:

    The first element is the initial zoo (same as INPUT)
    The last element is a comma-separated string of what the zoo looks like when all the eating has finished
    All other elements (2nd to last-1) are of the form X eats Y describing what happened

Notes

    Animals can only eat things beside them

    Animals always eat to their LEFT before eating to their RIGHT

    Always the LEFTMOST animal capable of eating will eat before any others

    Any other things you may find at the zoo (which are not listed above) do not eat anything and are not edible

Example

Input

"fox,bug,chicken,grass,sheep"

Working
1	fox can't eat bug	

"fox,bug,chicken,grass,sheep"

2	bug can't eat anything	

"fox,bug,chicken,grass,sheep"

3	chicken eats bug	

"fox,chicken,grass,sheep"

4	fox eats chicken	

"fox,grass,sheep"

5	fox can't eat grass	

"fox,grass,sheep"

6	grass can't eat anything	

"fox,grass,sheep"

7	sheep eats grass	

"fox,sheep"

8	fox eats sheep	

"fox"

Output

["fox,bug,chicken,grass,sheep", "chicken eats bug", "fox eats chicken", "sheep eats grass", "fox eats sheep", "fox"]
*/

// Solution
const eats = {
	antelope: ['grass'],
	'big-fish': ['little-fish'],
	bug: ['leaves'],
	bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
	chicken: ['bug'],
	cow: ['grass'],
	fox: ['chicken', 'sheep'],
	giraffe: ['leaves'],
	lion: ['antelope', 'cow'],
	panda: ['leaves'],
	sheep: ['grass'],
};

const whoEatsWho = function (zoo) {
	let zooArray = zoo.split(',');
	const result = [zoo];

	let ate = true;
	while (ate) {
		ate = false;
		for (let i = 0; i < zooArray.length; i++) {
			const animal = zooArray[i];
			const prey = eats[animal];
			if (!prey) continue;

			// check LEFT first
			if (i > 0 && prey.includes(zooArray[i - 1])) {
				result.push(`${animal} eats ${zooArray[i - 1]}`);
				zooArray.splice(i - 1, 1);
				ate = true;
				break;
			}

			// check RIGHT
			if (i < zooArray.length - 1 && prey.includes(zooArray[i + 1])) {
				result.push(`${animal} eats ${zooArray[i + 1]}`);
				zooArray.splice(i + 1, 1);
				ate = true;
				break;
			}
		}
	}
	result.push(zooArray.join(','));
	return result;
};

// Test Codes
function test(actual, expected) {
	const sameLength = actual.length === expected.length;
	const sameValues = sameLength && actual.every((v, i) => v === expected[i]);

	if (sameValues) {
		console.log('✅ Test passed');
	} else {
		console.log('❌Test failed.');
	}
}

const input = 'fox,bug,chicken,grass,sheep';
const expected = [
	'fox,bug,chicken,grass,sheep',
	'chicken eats bug',
	'fox eats chicken',
	'sheep eats grass',
	'fox eats sheep',
	'fox',
];
test(whoEatsWho(input), expected);
