/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/517abf86da9663f1d2000003/
/* ========== ========== ========== ========== ========== ==========*/
/*
Convert string to camel case

Description:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/



// Solution
function toCamelCase(str){
  return str.replace(/[-_]+(.)/g, (_, char) => char.toUpperCase());
}



function toCamelCase(str){
  let res = "";
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char === '-' || char === '_') && i + 1 < str.length) {
      res += str[++i].toUpperCase();
    } else if (char !== '-' && char !== '_') {
      res += char;
    }
  }
  return res;
}



// Test Codes
const assertEq = (actual, expected, msg) => {
    if(actual === expected) console.log('Correct!');
    else console.error(`Incorrect! ${msg}`);
}

assertEq(toCamelCase(''), '', "An empty string was provided but not returned")
assertEq(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
assertEq(toCamelCase("The_stealth_warrior"), "TheStealthWarrior", "toCamelCase('The_stealth_warrior') did not return correct value")
assertEq(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
assertEq(toCamelCase("the-Stealth-Warrior"), "theStealthWarrior", "toCamelCase('the-Stealth-Warrior') did not return correct value")
assertEq(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")