/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/60d2325592157c0019ee78ed
/* ========== ========== ========== ========== ========== ==========*/
/*
Sum the nums, sum the sums and sum the nums up to that sum

Description:
Let's define two functions:

S(N) — sum of all positive numbers not more than N
S(N) = 1 + 2 + 3 + ... + N

Z(N) — sum of all S(i), where 1 <= i <= N
Z(N) = S(1) + S(2) + S(3) + ... + S(N)

You will be given an integer N as input; your task is to return the value of S(Z(N)).

For example, let N = 3:

Z(3n) = 1n + 3n + 6n = 10n
S(Z(3n)) = S(10n) = 55n

The input range is 1 <= N <= 10^9 and there are 80 ( 40 in LC ) test cases, of which most are random.

This is my first kata and I hope you'll enjoy it :).
Best of luck!
*/



// Solution
function sumOfSums(n) {
    const S = (n) => n * (n + 1n) / 2n;
    const Z = (n) => n * (n + 1n) * (n + 2n) / 6n;
    return S(Z(BigInt(n)));
}



/*  Lessons Learned 
**  type BigInt
**  special numeric type in javascript that allows to work with integers larger than max safe number. 
**  BigInts are created by appending `n` to the end of a integer literal.
**  You can't mix BigInts with Number in mathematical operations without converting. 
*/



// Test Codes
console.log( sumOfSums(3n), 55n, `sumOfsums(3)` );
console.log( sumOfSums(5n), 630n, `sumOfsums(5)` );
console.log( sumOfSums(100n), 14_740_530_850n, `sumOfsums(100)` );
