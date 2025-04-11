/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59fd6d2332b8b9955200005f
/* ========== ========== ========== ========== ========== ==========*/
/*
Integer reduction

In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.

Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.

Note also that the order of the numbers in n does not change: solve(1284569,2) = '12456', because we have removed 8 and 9. 

*/



// Solution
function solve(n, k) {
    let digits = n.toString().split('');
    const stack = [];

    for(const digit of digits){
        while(stack.length && k>0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    stack.splice(stack.length - k, k);
    return stack.join('').trim();
}

// Test Codes
console.log(solve(123056,1));   //'12056'
console.log(solve(123056,2));   //'1056'
console.log(solve(123056,3));   //,'056'
console.log(solve(123056,4));   //,'05'
console.log(solve(1284569,1));  //,'124569'
console.log(solve(1284569,2));  //'12456'
console.log(solve(1284569,3));   //'1245'
console.log(solve(1284569,4));   //'124'