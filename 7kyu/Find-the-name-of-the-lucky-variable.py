## ========== ========== ========== ========== ========== ==========*/
## https://www.codewars.com/kata/5a47d5ddd8e145ff6200004e
## ========== ========== ========== ========== ========== ==========*/
'''
80's Kids #3: Punky Brewster's Socks

Description:
Each test case will generate a variable whose value is 777. Find the name of the variable.

'''



## Solution
def find_variable():
    for k, v in globals().items():
        if v == 777:
            return k
        