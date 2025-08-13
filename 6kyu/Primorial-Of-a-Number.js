/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/
/* ========== ========== ========== ========== ========== ==========*/
/*
Primorial Of a Number 

Description:
Definition (Primorial Of a Number)

Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.
Task

Given a number N , calculate its primorial.
Notes

    Only positive numbers will be passed (N > 0) .

Input >> Output Examples:

1- numPrimorial (3) ==> return (30)

Explanation:

Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

Mathematically written as , P3# = 30 .

2- numPrimorial (5) ==> return (2310)

Explanation:

Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .

Mathematically written as , P5# = 2310 .

3- numPrimorial (6) ==> return (30030)

Explanation:

Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Mathematically written as , P6# = 30030 .
*/



// Solution
function numPrimorial(n){
  let count = 0;
  let candidate = 2;
  let res = 1; 
  while(count !== n) {
    if(isPrime(candidate)) {
      res *= candidate;
      count++;
    }
    candidate++;
  }
  return res;
}

const isPrime = (n) => {
  if(n < 2) return false;
  if(n === 2) return true;
  const lim = Math.floor(Math.sqrt(n));
  for(let i = 2; i <= lim; i++) {
    if(n % i === 0) return false;
  }
  return true;
}



// Test Codes
console.log(numPrimorial(3), 30);
console.log(numPrimorial(4), 210);
console.log(numPrimorial(5), 2310);
console.log(numPrimorial(8), 9699690);
console.log(numPrimorial(9), 223092870);