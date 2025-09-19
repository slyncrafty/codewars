/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5375f921003bf62192000746
/* ========== ========== ========== ========== ========== ==========*/
/*
Word a10n (abbreviation)

Description:
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

    A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
    The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

Example

 input: "elephant-rides are really fun!"
          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
 words (^):   "elephant" "rides" "are" "really" "fun"
                123456     123     1     1234     1
 ignore short words:               X              X

 abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
 all non-word characters (*) remain in place
                     "-"      " "    " "     " "     "!"
output: "e6t-r3s are r4y fun!"

*/



// Solution
function abbreviate(string) {
  const arr = string.split(/([^a-zA-Z]+)/);
  return arr.map(e => {
    if(/^[a-zA-Z]+$/.test(e)){
      if(e.length >= 4) {
        return e[0] + (e.length - 2) + e[e.length-1];
      }
      return e;
    }
    return e;
  }).join('');
}


// Using regex to handle words length >= 4
function abbreviate(string) {
  return string
    .replace(/[a-zA-Z]{4,}/gi, w => w[0] + (w.length - 2) + w[w.length - 1]);
}



// Test Codes
console.log(abbreviate("elephant-rides are really fun!")); // "e6t-r3s are r4y fun!"
console.log(abbreviate("internationalization")); // "i18n"
console.log(abbreviate("accessibility")); // "a11y"
console.log(abbreviate("fun!")); // "fun!"
console.log(abbreviate("cat")); // "cat"
console.log(abbreviate("hello world")); // "h3o w3d"