/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f7f71a7b992e699400013f
/* ========== ========== ========== ========== ========== ==========*/
/*
Sort the columns of a csv-file

Description:
#Sort the columns of a csv-file

You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

An example:

Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11

There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.
*/

// Solution
function sortCsvColumns(csv) {
	const rows = csv.split('\n').map((row) => row.split(';'));
	const headers = rows[0];
	const order = headers
		.map((name, i) => ({ name, i }))
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((obj) => obj.i);

	const sortedRows = rows.map((row) => order.map((i) => row[i]));
	return sortedRows.map((row) => row.join(';')).join('\n');
}

// Test Codes
const assertEquals = (a, b) => {
	if (a === b) console.log('✅Test Passed');
	else console.log('❌Test Failed');
};

var preSorting =
	'myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n' +
	'17945;10091;10088;3907;10132\n' +
	'2;12;13;48;11';
var postSorting =
	'Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n' +
	'3907;17945;10091;10088;10132\n' +
	'48;2;12;13;11';
assertEquals(sortCsvColumns(preSorting), postSorting);

preSorting =
	'IronMan;Thor;Captain America;Hulk\n' +
	'arrogant;divine;honorably;angry\n' +
	'armor;hammer;shield;greenhorn\n' +
	'Tony;Thor;Steven;Bruce';
postSorting =
	'Captain America;Hulk;IronMan;Thor\n' +
	'honorably;angry;arrogant;divine\n' +
	'shield;greenhorn;armor;hammer\n' +
	'Steven;Bruce;Tony;Thor';
assertEquals(sortCsvColumns(preSorting), postSorting);
