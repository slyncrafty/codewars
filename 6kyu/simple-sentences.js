/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/52de9bd621c71b919c000592
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple Sentences

Description:

Implement a function, so will produce a sentence out of the given parts.

Array of parts could contain:

    words;
    commas in the middle;
    multiple periods at the end.

Sentence making rules:

    there must always be a space between words;
    there must not be a space between a comma and word on the left;
    there must always be one and only one period at the end of a sentence.

Example:

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
*/



// Solution
function makeSentence(parts) {
  let sentence = '';
  // Loop through the passed in array
  for (const part of parts) {
    // Handle each constraint
    if( part === ',') {
      sentence = sentence.trimEnd() + ',';
    } else if ( part === '.') {
      continue;
    } else {
      sentence += ' ' + part;
    }
  }
  // add period at the end
  return sentence.trim() + '.';
}


/* ## Lessons Learned:
** trimEnd() to remove whitespace from the end of the given string and returns a new string
** trim() to remove whitespace from the both ends of the given string and returns a new string
*/


// Test Codes
console.log(makeSentence(['hello', 'world']) === 'hello world.')
console.log(makeSentence(['Quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']) === 'Quick brown fox jumped over the lazy dog.')
console.log(makeSentence(['hello', ',', 'my', 'dear']) === 'hello, my dear.')
console.log(makeSentence(['one', ',', 'two', ',', 'three']) === 'one, two, three.')
console.log(makeSentence(['One', ',', 'two', 'two', ',', 'three', 'three', 'three', ',', '4', '4', '4', '4']) === 'One, two two, three three three, 4 4 4 4.')
console.log(makeSentence(['hello', 'world', '.']) === 'hello world.')
console.log(makeSentence(['Bye', '.']) === 'Bye.')
console.log(makeSentence(['hello', 'world', '.', '.', '.']) === 'hello world.')
console.log(makeSentence(['The', 'Earth', 'rotates', 'around', 'The', 'Sun', 'in', '365', 'days', ',', 'I', 'know', 'that', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']) === 'The Earth rotates around The Sun in 365 days, I know that.')
