''' 
/* ========== ========== ========== ========== ========== ==========*/
// https:/www.codewars.com/kata/559e10e2e162b69f750000b4/
// ========== ========== ========== ========== ========== ==========*/
//
What dominates your array?

Description:
A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

'''

#  Solution
def dominator(arr):
    for x in arr:
       if arr.count(x) > len(arr) / 2:
           return x
    
    return -1

#  Test Codes
def assert_equals(actual, expected):
    if(actual == expected):
        print('✅Test Passed')
    else:
        print('❌Test Failed', actual, 'expected match', expected)

assert_equals(dominator([3,4,3,2,3,1,3,3]),3)
assert_equals(dominator([1,2,3,4,5]),-1)
assert_equals(dominator([1,1,1,2,2,2]),-1)
assert_equals(dominator([1,1,1,2,2,2,2]),2)
assert_equals(dominator([]),-1)