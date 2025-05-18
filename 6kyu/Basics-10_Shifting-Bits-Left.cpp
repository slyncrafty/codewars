/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56c1c1ed0e10121d77000a56
/* ========== ========== ========== ========== ========== ==========*/
/*
Basics 10: Shifting Bits, left...?

Description:
Your task is to determine the Next Higher Power of 2 to a given input number - or something like that...;-)

Here it's easy, you don't have to check errors or incorrect input values, every thing is ok without bad tricks, only int numbers as input and output;-)...

Some easy examples:

Input: 2      => Output: 4
Input: 7      => Output: 8
Input: -1     => Output: ?
Input: -128   => Output: -64

There are some static tests at the beginning and many random tests if you submit your solution.
*/

#include <iostream>

// Solution
int nextHigher(int n)
{
    if (n == 0) return 1;
    if (n > 0)
    {
        int power = 1;
        while (power <= n)
        {
            power *= 2;
        }
        return power;
    }
    int power = -1;
    while (power > n)
    {
        power *= 2;
    }
    return power / 2;
}



// int nextLower(int n)

// {
//     do { n++; }
//     while( abs(n) & (abs(n)-1) );
//     return n;
// }



// Test Codes

std::cout << nextHigher(4) << 8 << std::endl;
std::cout << nextHigher(-16) << 8 << std::endl;
std::cout << nextHigher(16) << 32 << std::endl;
std::cout << nextHigher(-2) << -1 << std::endl;