/*
Exclamation marks series #14: Convert the exclamation marks and question marks to a prime number

Description:

Convert the continuous blocks of exclamation marks or question marks to a digit and use these digits to form a number. If this number is a prime number, return it. If not, divide this number by the smallest factor greater than 1, until it becomes a prime number.

You can assume that all test results are greater than 1 and the length of every continuous substring (! or ?) is less than 10.
Examples

"!!"              ==>   2  # prime
"!??"             ==>   3  # 12 --> 6 --> 3
"!???"            ==>  13  # prime
"!!!??"           ==>   2  # 32 --> 16 --> 8 --> 4 --> 2
"!!!???"          ==>  11  # 33 --> 11
"!???!!"          ==>  11  # 132 --> 66 --> 33 --> 11
"!????!!!?"       ==>  53  # 1431 --> 477 --> 159 --> 53
"!!!!!!!???????"  ==>  11  # 77 --> 11

*/



// Solution
function convert(s){
    let number = parseInt(s
                           .match(/!+|\?+/g)
                           .map(digit=>digit.length)
                           .join('')
                           );
    while(!isPrime(number)){
        number = toPrimeNumber(number);
    }
    return number;
  }
  
function isPrime(n){
    if(n < 2) return false;
    for(let i = 2; i * i <= n; i++)
    {
        if(n % i === 0) return false;
    }
    return true;
}
  
function toPrimeNumber(n){
    for(let i = 2; i <= n; i++)
    {
    if(n % i === 0) return n/i;
    }
    return n;
}