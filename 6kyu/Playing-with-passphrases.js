/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/559536379512a64472000053
/* ========== ========== ========== ========== ========== ==========*/
/*
Playing with passphrases

Description:
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

    1. shift each letter by a given number but the transformed letter must be a letter (circular shift),
    2. replace each digit by its complement to 9,
    3. keep such as non alphabetic and non digit characters,
    4. downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
    5. reverse the whole result.

Example:

your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase

*/



// Solution
function playPass(s, n) {
  return s
    .split('')
    .map((char,i) => {
      const charCode = char.charCodeAt(0);
      if((charCode >= 97 && charCode <= 122) ||(charCode >= 65 && charCode <= 90)) {
        if(charCode >= 97 && charCode <= 122) {
          char = String.fromCharCode((charCode + n - 97) % 26 + 97);
        } 
        if(charCode >= 65 && charCode <= 90) {
          char = String.fromCharCode((charCode + n - 65) % 26 + 65);
        }
        return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      }
      if(charCode >= 48 && charCode <= 57)  { // digits
        return (9 - parseInt(char)).toString();
      }
      return char;
      }).reverse().join('');
  }



// Test Codes
const assertEquals = (a,b) => {
    if(a === b) console.log('Correct');
    else console.error('Incorrect', a, b);
}
assertEquals(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J")

assertEquals(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2), 
    "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")