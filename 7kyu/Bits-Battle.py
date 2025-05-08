## ========== ========== ========== ========== ========== ==========##
## https://www.codewars.com/kata/58856a06760b85c4e6000055
## ========== ========== ========== ========== ========== ==========##
"""
Bits Battle

Description:

The odd and even numbers are fighting against each other!

You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.

You should return:

    odds win if number of 1s from odd numbers is larger than 0s from even numbers
    evens win if number of 1s from odd numbers is smaller than 0s from even numbers
    tie if equal, including if list is empty

Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.
Example:

For an input list of [5, 3, 14]:

    odds: 5 and 3 => 101 and 11 => four 1s
    evens: 14 => 1110 => one 0

Result: odds win the battle with 4-1

If you enjoyed this kata, you can find a nice variation of it here.

"""



## Solution

def bits_battle(numbers):
    odd_ones = 0
    even_zeros = 0
    for num in numbers:
        if(num == 0): 
            continue
        
        binary_num = bin(num)[2:]
        if(num % 2 == 0):
            even_zeros += binary_num.count('0')
        else:
            odd_ones += binary_num.count('1')
        
    if odd_ones > even_zeros:
        return 'odds win'
    elif odd_ones < even_zeros:
        return 'evens win'
    else:
        return 'tie'



## Test Codes
print(bits_battle([5, 3, 14]), 'odds win')
print(bits_battle([3, 8, 22, 15, 78]), 'evens win')
print(bits_battle([]), 'tie')
print(bits_battle([1, 13, 16]), 'tie')
print(bits_battle([0]), 'tie')
print(bits_battle([0, 1, 2]), 'tie')