/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/
/* ========== ========== ========== ========== ========== ==========*/
/*
Counting Duplicates

Description:
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/



// Solution
function duplicateCount(text){
  if(text.length === 0) return 0; 
  text = text.toLowerCase();
  const freqMap = {};
  for(const char of text){
    freqMap[char] = (freqMap[char] || 0) + 1; 
  }
  return Object.values(freqMap)
        .filter(c => c > 1)
        .length;
}



// Test Codes
console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
