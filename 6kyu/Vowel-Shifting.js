/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/577e277c9fb2a5511c00001d
/* ========== ========== ========== ========== ========== ==========*/
/*
Vowel Shifting

Description:
You get a text and have to shift the vowels by n positions to the right. (Negative value for n should shift to the left.)

Position means the vowel's position if taken as one item in a list of all vowels within the string.

A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Vowels are "aeiou" / "AEIOU".

If text is null or empty, then simply return back the original text.
Example:

text = "This is a test!"
n = 1
output = "Thes is i tast!"

text = "This is a test!"
n = 3
output = "This as e tist!"

*/



// Solution
function vowelShift(text, n) {
  if(!text || n === 0) return text;
  const vowels = new Set('aeiouAEIOU'.split(''));
  const positions = [];
  for(let i = 0; i < text.length; i++) {
    if(vowels.has(text[i])) positions.push(i); 
  }
  if(positions.length === 0) return text;
  
  const vowelChars = positions.map(i => text[i]);
  const offset = (n % vowelChars.length);
  const shifted = vowelChars.slice(-offset).concat(vowelChars.slice(0,-offset));
  
  const arr = text.split('');
  positions.forEach((pos, i) => {
    arr[pos] = shifted[i];
  })
  return arr.join('');
}



// optimized
const vowelShiftRegex = (text, n) => {
    if(!text || n === 0) return text;

    const regex = /[aeiou]/gi;
    const arr = text.match(regex);
    if(!arr || arr.length === 0) return text;

    const k = ((n % arr.length));
    const shifted = arr.slice(-k).concat(arr.slice(0,-k));
    let i = 0;
    return text.replace(regex, () => shifted[i++]);
}



// Test Codes
const strictEqual = (actual, expected) => {
    if(actual === expected) console.log('Correct');
    else console.error('Incorrect.', actual, expected)
}

strictEqual(vowelShift(null, 0), null);
strictEqual(vowelShift("", 0), "");
strictEqual(vowelShift("This is a test!", 0), "This is a test!");
strictEqual(vowelShift("This is a test!", 1), "Thes is i tast!");
strictEqual(vowelShift("This is a test!", 3), "This as e tist!");
strictEqual(vowelShift("This is a test!", 4), "This is a test!");
strictEqual(vowelShift("This is a test!", -1), "This as e tist!");
strictEqual(vowelShift("This is a test!", -5), "This as e tist!");
    