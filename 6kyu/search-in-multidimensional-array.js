/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae
/* ========== ========== ========== ========== ========== ==========*/
/*
search in multidimensional array

Description:
Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

['a','b',['c','d',['e']]] , 'e' --> true
['a','b',['c','d',['e']]] , 'a' --> true
['a','b',['c','d',['e']]] , 'f' --> false

*/

// Solution
function locate(arr, value) {
	for (const e of arr) {
		if (e === value) return true;
		if (Array.isArray(e) && locate(e, value)) return true;
	}
	return false;
}

// Test Codes
function doTest(array, element, expected) {
	const message =
		`element = ${JSON.stringify(element)}\n` +
		`array = ${JSON.stringify(array)}\n\n`;
	const actual = locate(array, element);
	const strictEqual = (a, b, msg) => {
		console.log(msg);
		if (a === b) console.log('✅Test Passed');
		else console.log('❌Test Failed');
	};
	strictEqual(actual, expected, message);
}

{
	const arr = ['two', 'six', ['five', 'seven'], 'three,nine'];
	doTest(arr, 'six', true);
	doTest(arr, 'three', false);
	doTest(arr, 'three,nine', true);
	doTest(arr, 'five,seven', false);
}
{
	doTest(
		['a', 'b', ['c', 'd', ['[e632784632478&^*&^&*]']]],
		'[e632784632478&^*&^&*]',
		true,
	);
	doTest(['a', 'b', ['c', 'd', ['e']]], 'ffdfsdfd', false);
}
{
	doTest(['a', 'b', ['c', 'd', ['e']]], 'a', true);
	doTest(['a', 'b', ['c', 'd', ['e']]], 'd', true);
	doTest(['a', 'b', ['c', 'd', ['e']]], 'e', true);
	doTest(
		['a', 'b', ['c', 'd', ['e', ['a', 'b', ['c', 'd', ['e4']]]]]],
		'e4',
		true,
	);
	doTest(
		[
			'a',
			'b',
			[
				'c',
				'd',
				[
					'e',
					[
						'a',
						'b',
						[
							'c',
							'd',
							[
								'e',
								[
									'a',
									'b',
									[
										'c',
										'd',
										[
											'e4',
											[
												'a',
												'b',
												[
													'c',
													'd',
													[
														'e',
														[
															'a',
															'b',
															[
																'c',
																'd',
																['e', ['a', 'b', ['c', 'd', ['e14']]]],
															],
														],
													],
												],
											],
										],
									],
								],
							],
						],
					],
				],
			],
		],
		'e',
		true,
	);
	doTest(['a', 'b', ['c', 'd', ['e']]], 'f', false);
}
