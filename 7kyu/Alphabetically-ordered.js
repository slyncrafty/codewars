/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a8059b1fd577709860000f6
/* ========== ========== ========== ========== ========== ==========*/
/*
Alphabetically ordered 

Description:
Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
Examples (input -> output)

    "kata" -> false ('a' comes after 'k')
    "ant" -> true (all characters are in alphabetical order)

*/



// Solution
function alphabetic(s) {
  return [...s].sort().join('') === s;
}



// Test Codes
const dotest = (a,b) => {
    if(alphabetic(a) === b) console.log('Correct!');
    else console.error('Incorrect', alphabetic(a), b);
}
dotest("asd", false);
dotest("codewars", false);
dotest("door", true);
dotest("cell", true);
dotest("z", true);
dotest("", true);    