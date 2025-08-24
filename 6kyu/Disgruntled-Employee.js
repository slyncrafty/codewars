/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/541103f0a0e736c8e40011d5
/* ========== ========== ========== ========== ========== ==========*/
/*
Disgruntled Employee

Description:
Sir Bobsworth is a custodian at a local data center. As he suspected, Bobsworth recently found out he is to be fired on his birthday after years of pouring his soul into maintaining the facility.

Bobsworth, however, has other plans.

Bobsworth knows there are 1 to n switches in the breaker box of the data center. Moving from switch 1 to n, Bob first flips every switch off. Beginning from the first switch again, Bob then flips every 2nd switch. Once again starting from the first switch, Bob then flips every 3rd switch. Bob continues this pattern until he flips every nth switch & makes n passes.

At the end of Bobsworth's mayhem, how many switches are turned off?
Specifications

Create the function off, that receives the nth switch as argument n. The function should return an ascending array containing all of the switch numbers that remain off after Bob completes his revenge.
Example: (Input --> Output)

1 --> [1]
2 --> [1]
4 --> [1, 4]

The parameter n will always be a number >= 1.

*/



// Solution
function off(n) {
  // 1st turn flips all switches off
  // k-th turn flips every k-th switch( x % k === 0, 2 <= k <=n )
  // k-th switch will be ON only if k has even number of divisors
  // counting perfect squares <= n gives switches that have odd number of divisors
  const res = [];
  for(let i = 1; i*i <= n; i++) {
    res.push(i*i);
  }
  return res;
}



// Test Codes
console.log(off(1), [1]);
console.log(off(2), [1]);
console.log(off(4), [1,4]);
console.log(off(9), [1,4,9]);