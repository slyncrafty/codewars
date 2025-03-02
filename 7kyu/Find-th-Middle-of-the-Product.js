/*
Find the Middle of the Product

Description:

Given a string of characters, create a function returning the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits and not all inputs will be string. In those cases, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1

*/



// Solution
function findMiddle(str){
  if (typeof str != "string") return -1;
  const reg = /[0-9]/g;
  let num = str.match(reg);
  if(!num) return -1;
  num = num.reduce((sum, curr) => sum * curr, 1).toString();  
  const len = num.length;
  const mid = Math.floor(len / 2);
  if(len % 2 !== 0) return parseInt(num[mid]);
  let midTwo = num.slice(mid - 1, mid + 1);
  return parseInt(midTwo);
}