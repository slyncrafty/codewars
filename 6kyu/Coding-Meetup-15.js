/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names
/* ========== ========== ========== ========== ========== ==========*/
/*
Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

Description:
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]

Explanation of the above:

    Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
    Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number

Notes:

    Preserve the order of the original list.
    Return an empty array [] if there is no developer with an "odd" name.
    The input array and first names will always be valid and formatted as in the example above.

*/



// Solution
function findOddNames(list) {
  const res = [];
  list.forEach((p) => {
    const sumOfFirstName = p.firstName.split('').reduce((acc, curr) => acc + curr.charCodeAt(), 0);
    if(sumOfFirstName % 2 !== 0)  res.push(p);
  })
  return res;
}



// Test Codes
var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

var answer1 = [
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1), answer1);


var list2 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
];

var answer2 = [];

console.log(findOddNames(list2), answer2);