/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/58b972cae826b960a300003e
/* ========== ========== ========== ========== ========== ==========*/
/*
Jenny the youngest detective

Description:
Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

    Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
    Spaces are not places, you need the actual letters. No spaces.
    The returned word should be all lowercase letters.
    if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(

Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

*/



// Solution
function missingWord(nums, str) {
  const stri = str.replaceAll(' ','').toLowerCase();
  if (Math.max(...nums) >= stri.length) {
    return "No mission today";
  }
  return nums
    .sort((a, b) => a - b)
    .map((e) => stri[e]).join('');
}



// Test Codes
console.log(missingWord([0, 3, 5]), "I love you", "ivy")
console.log(missingWord([7, 10, 1]), "see you later", "ear")
console.log(missingWord([29, 31, 8]), "The quick brown fox jumps over the lazy dog", "bay")
console.log(missingWord([12, 4, 6]), "Good Morning", "No mission today")
console.log(missingWord([1, 16, 21]), "A purple pig and a green donkey flew a kite in the middle of the night", "pen")
console.log(missingWord([35, 8, 20]), "A song can make or ruin your day if you let it get to you", "mug")
console.log(missingWord([20, 3, 27]), "I love eating toasted cheese and tuna", "vet")
console.log(missingWord([50, 4, 6]), "Hi everybody", "No mission today")