/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5286b2e162056fd0cb000c20
/* ========== ========== ========== ========== ========== ==========*/
/*
Description:

The Collatz Conjecture states that for any positive natural number n, this process:

    if n is even, divide it by 2
    if n is odd, multiply it by 3 and add 1
    repeat

will eventually reach n = 1.

For example, if n = 20, the resulting sequence will be:

[ 20, 10, 5, 16, 8, 4, 2, 1 ]

Write a program that will output the length of the Collatz Conjecture for any given n.
In the example above, the output would be 8.

For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture
*/



// Solution
function collatz(n) {
    if (n <= 0) return -1;
    let counter = 1;
    while(n !== 1){
      n = n % 2 === 0 ? n / 2 : n * 3 + 1;
      counter++;
    }
    return counter;
}



// Test Code
console.log(collatz(20)); // 8
console.log(collatz(15)); // 18