/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/514a024011ea4fb54200004b
/* ========== ========== ========== ========== ========== ==========*/
/*
Extract the domain name from a URL

Description:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

// Solution
function domainName(url) {
	const parts = url
		.replace('http://', '')
		.replace('https://', '')
		.replace('www.', '')
		.split('.');
	return parts[0];
}

// Test Codes
const equal = (a, b) => {
	if (a === b) console.log('✅PASSED');
	else console.log('❌FAILED');
};
equal(domainName('http://google.com'), 'google');
equal(domainName('http://google.co.jp'), 'google');
equal(domainName('www.xakep.ru'), 'xakep');
equal(domainName('https://youtube.com'), 'youtube');
