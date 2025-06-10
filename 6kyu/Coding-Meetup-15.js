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



function findOddNames(list) {
    return list.filter(( {firstName }) => {
        let isOdd = 0;
        for(let i = 0; i < firstName.length; i++) {
            // bitwise AND( charCodeAt(i) & 1 is 0 for even, 1 for odd )
            isOdd ^= firstName.charCodeAt(i) & 1;
        }
        return isOdd === 1; // truthy(1) means the sum is odd
    })
}



/*  Lesson Learned
**  The first method uses .split(), and loop through again to get sum are costly and allocated a new array. 
**  
**  The second solution is faster and more efficient
**  Using BITWISE operations allows to track parity without sum.
**  By checking the bitwise AND with 1(x&1) extract th LSB of x and 
**  combined with bitwise XOR (^) toggle/track the right-hand side without modulo(%) operations.



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