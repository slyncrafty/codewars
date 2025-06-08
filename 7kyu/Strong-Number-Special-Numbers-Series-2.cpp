/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a4d303f880385399b000001
/* ========== ========== ========== ========== ========== ==========*/
/*
Strong Number (Special Numbers Series #2)

Description:

Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
Task

Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
Examples

    1 is a strong number, because 1! = 1, so return "STRONG!!!!".
    123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
    145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
    150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".
*/

// Solution
#include <string>
#include <iostream>
using namespace std;

int get_factorial(int number)
{
    return (number == 1 || number == 0) ? 1 : number * get_factorial(number - 1);
}

string strong_num(int number)
{
    if (number == 1 || number == 2)
        return "STRONG!!!!";

    string numString = to_string(number);
    int len = numString.length();
    int sum = 0;

    for (int i = 0; i < len; i++)
    {
        sum += get_factorial(numString[i] - '0');
    }

    return (number == sum) ? "STRONG!!!!" : "Not Strong !!";
}

// Test Codes
void test(string target, string source)
{
    std::cout << target << source << std::endl;
}

int main()
{
    test(strong_num(1), "STRONG!!!!");

    test(strong_num(2), "STRONG!!!!");

    test(strong_num(145), "STRONG!!!!");

    test(strong_num(7), "Not Strong !!");

    test(strong_num(93), "Not Strong !!");

    test(strong_num(185), "Not Strong !!");
    return 0;
}