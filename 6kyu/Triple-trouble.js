/*
Triple trouble

Description:

Write a function which takes two integers num1 and num2 and returns 1 if there is a straight triple of a digit at any place in num1 and also a straight double of the same digit in num2.

If this isn't the case, return 0.
Examples

451999277, 41177722899 -->  1 // num1 has straight triple 999s and num2 has straight double 99s
1222345, 12345 -->  0 // num1 has straight triple 2s but num2 has only a single 2
12345, 12345 -->  0
888, 77 --> 0 // num1 has three '8's, num2 has 2 '7's, but they are not the same digit
88888, 88888   --> 1 // more than 3 or 2 repetitions also count 
123123123, 123 --> 0 // '123' is not a single digit

*/



// Solution
function tripledouble(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    const triplets = [...str1.matchAll(/(\d)\1\1/g)];
    for(const match of triplets){
      const digit = match[1];
      if(str2.includes(digit + digit)){
        return 1;
      }
    }
    return 0;
}