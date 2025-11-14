/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57a72cb872292dc43100000c/
/* ========== ========== ========== ========== ========== ==========*/
/*
Airport itinerary

Description:
we have to create an itinerary feature that can compress the list of airports including only the list of unique in/out combination.

For example, a trip with:

[TRN-FCO] [FCO-JFK] [JFK-TRN]

Should be represented as:

TRN-FCO-JFK-TRN

That is the unique list of airport steps.

Now in our database we save the travel as a list of objects with in/out properties and you will receive that list always sorted in the right way.

[
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]

Now we have to create a helper function itinerary for JS that extract the unique airport list:

travel = itinerary([
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]); // TRN-FCO-JFK-FCO

Or a helper class Route for C#/C++:
*/

// Solution
function itinerary(travel) {
	if (!travel.length) return '';
	let next = travel[0].in;
	const result = [next];
	for (const leg of travel) {
		if (next !== leg.in) result.push(leg.in);
		next = leg.out;
		result.push(next);
	}
	return result.join('-');
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('Correct!');
	else console.log('Incorrect', a, b);
};
assertEquals(itinerary([{ in: 'TRN', out: 'FCO' }]), 'TRN-FCO');

assertEquals(
	itinerary([
		{ in: 'TRN', out: 'FCO' },
		{ in: 'CIA', out: 'JFK' },
	]),
	'TRN-FCO-CIA-JFK'
);

assertEquals(
	itinerary([
		{ in: 'TRN', out: 'FCO' },
		{ in: 'FCO', out: 'JFK' },
	]),
	'TRN-FCO-JFK'
);

assertEquals(
	itinerary([
		{ in: 'TRN', out: 'FCO' },
		{ in: 'CIA', out: 'TRN' },
	]),
	'TRN-FCO-CIA-TRN'
);
assertEquals(
	itinerary([
		{ in: 'TRN', out: 'FCO' },
		{ in: 'FCO', out: 'TRN' },
	]),
	'TRN-FCO-TRN'
);
