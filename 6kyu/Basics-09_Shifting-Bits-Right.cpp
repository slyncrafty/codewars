/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/56c1c1e4876de7e0cb000a10
/* ========== ========== ========== ========== ========== ==========*/
/*
Basics 09: Shifting Bits, right...?

Description:
Your task is to determine the Next Lower Power of 2 to a given input number - or something like that...;-)

Here it's easy, you don't have to check errors or incorrect input values, every thing is ok without bad tricks, only int numbers as input and output ;-)...

Some easy examples:

Input: 2     => Output: 1
Input: 7     => Output: 4
Input: 0     => Output: ?
Input: -128  => Output: -256

*/

#include <iostream>
#include <cmath>



// Solution
int nextLower(int n)

{
    do { n--; }
    while( abs(n) & (abs(n)-1) );
    return n;
}

// Test Codes

std::cout << nextLower(4) << 2 << std::endl;
std::cout << nextLower(-3) << -4 << std::endl;
std::cout << nextLower(18) << 16 << std::endl;
std::cout << nextLower(-16) << -32 << std::endl;