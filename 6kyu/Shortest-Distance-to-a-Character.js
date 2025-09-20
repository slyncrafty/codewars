/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5c8bf3ec5048ca2c8e954bf3
/* ========== ========== ========== ========== ========== ==========*/
/*
Shortest Distance to a Character

Description:
Given a string s and a character c, return an array of integers representing the shortest distance from the current character in s to c.
Notes

    All letters will be lowercase.
    If the string is empty, return an empty array.
    If the character is not present, return an empty array.

Examples

s = "lovecodewars"
c = "e"
result = [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]

s = "aaaabbbb"
c = "b"
result = [4, 3, 2, 1, 0, 0, 0, 0]

s = ""
c = "b"
result = []

s = "abcde"
c = ""
result = []

*/



// Solution
function shortesttoChar(s, c) {
  if(!s || !c) return [];
  
  const pos = [];
  for(let i = 0;i < s.length; i++) {
    if(s[i] === c) pos.push(i);
  }
  if(pos.length === 0) return [];
  
  const res = [];
  
  for(let i = 0;  i < s.length; i++) {
    let minDist = Infinity;
    let left = 0, right = pos.length  - 1; 
    while(left <= right) {
      const mid = Math.floor((left + right) / 2);
      const dist = Math.abs(pos[mid] - i);
      if(dist < minDist) {
        minDist = dist;
      }
      if(pos[mid] < i) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    res.push(minDist);
  }
  return res;
}



// Test Codes
const deepEqual = (a, b) => {
    if(a === b) return true;
    if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
        return a.every((e,i) => e === b[i]);
    }
    return false;
}
const test = (a,b) => deepEqual(a,b) ? console.log('Correct') : console.log('Incorrect');
test(shortesttoChar("lovecodewars", "e"), [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]);
test(shortesttoChar("aaaaa", "a"), [0, 0, 0, 0, 0]);
test(shortesttoChar("aabbaabb", "a"), [0, 0, 1, 1, 0, 0, 1, 2]);
test(shortesttoChar("aaaabbbb", "b"), [4, 3, 2, 1, 0, 0, 0, 0]);
test(shortesttoChar("aaaaa", "b"), []);
test(shortesttoChar("lovecoding", ""), []);
test(shortesttoChar("", ""), []);