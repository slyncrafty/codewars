/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
/* ========== ========== ========== ========== ========== ==========*/
/*
Sum of odd numbers

Description:

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
3 --> 7 + 9 + 11 = 27

*/



// Solution
function rowSumOffNumbers(n) {
    return n**3;
}


// Test Codes
console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);