/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56ae72854d005c7447000023/
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple template

Description:
Implement function createTemplate which takes string with tags wrapped in {{brackets}} as input and returns closure, which can fill string with data (flat object, where keys are tag names).

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
personTmpl({ name: "John", animalType: "dogs" }); // John likes dogs

When key doesn't exist in the map, put there empty string.

*/

// Solution
function createTemplate(template) {
	return function fill(str = {}) {
		let result = '';
		let i = 0;
		while (i < template.length) {
			const start = template.indexOf('{{', i);
			if (start === -1) {
				result += template.slice(i);
				break;
			}
			result += template.slice(i, start);
			const end = template.indexOf('}}', start + 2);
			if (end === -1) {
				result += template.slice(start);
				break;
			}
			const key = template.slice(start + 2, end).trim();
			const value = key ? str[key] : '';
			result += value == null ? '' : String(value);
			i = end + 2;
		}
		return result;
	};
}

// Test Codes
let personStore = [
	{
		firstName: 'John',
		lastName: 'Smith',
		interests: 'sport',
	},
	{
		firstName: 'Albert',
		lastName: 'Einstein',
		occupation: 'physicist',
	},
];
let tmpl = '{{firstName}} {{lastName}} likes {{interests}}';
strictEqual(createTemplate(tmpl)(personStore[0]), 'John Smith likes sport');
strictEqual(createTemplate(tmpl)(personStore[1]), 'Albert Einstein likes ');
