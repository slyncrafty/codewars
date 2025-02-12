/*
Powers of 3

Description:

Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

largest_power(3) == 0
largest_power(4) == 1

You may assume that the input to your function is always a positive integer.

*/



// Solution

function largestPower(n){
    let res = 3;
    let count = 0;
    // edge cases
    if(n < 1)
    { 
      while(res**count > n)
      {
        count--;
      } 
    }
    else{
      while(res**count < n)
      {
        count++;
      }
      count--;
    }
    return count;// return the largest integer k such that 3^k < n
}