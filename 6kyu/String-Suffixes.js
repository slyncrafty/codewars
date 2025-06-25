/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/559d34cb2e65e765b90000f0
/* ========== ========== ========== ========== ========== ==========*/
/*
String Suffixes

Description:

Let's say take 2 strings, A and B, and define the similarity of the strings to be the length of the longest prefix common to both strings. For example, the similarity of strings abc and abd is 2, while the similarity of strings aaa and aaab is 3.

write a function that calculates the sum of similarities of a string S with each of it's suffixes.
Examples (input -> output):

'ababaa' -> 11
'abc' -> 3

Explanation:

In the first case, the suffixes of the string are ababaa, babaa, abaa, baa, aa and a. The similarities of each of these strings with the string ababaa are 6,0,3,0,1,1 respectively. Thus the answer is 6 + 0 + 3 + 0 + 1 + 1 = 11.

For the second case, the answer is simply 3 + 0 + 0 = 3.

Note : Each string will have at least one character - no need to check for empty strings :)

*/



// Solution
function stringSuffix(s) {
    const n = s.length;
    let totalSim = n;
    for(let i = 1; i < n; i++) {
        let j = 0; 
        while(i + j < n && s[j] === s[i+j]) {
            j++;
        }
        totalSim += j;
    }
    return totalSim;
}



/**  Lesson Learned
 *      Linear time pattern searching Algorithm
 *     Z-Algorithm locates all instances of a specific pattern within a text in linear time. 
 *      Run two nested loops, the outer goes to every index and the inner finds the length of the longest prefix that matches the substring starting at the curr index. O(n^2)
 * 
 */



// Test Codes
console.log(stringSuffix('aa'),3);
console.log(stringSuffix('abc'),3);
console.log(stringSuffix('ababaa'),11);
console.log(stringSuffix('aaaa'),10);
console.log(stringSuffix('aaaaa'),15);
console.log(stringSuffix('aaaaaa'),21);
console.log(stringSuffix('mnsomn'),8);
console.log(stringSuffix('apple'),5);
console.log(stringSuffix('a'),1);
console.log(stringSuffix('pippi'),8);