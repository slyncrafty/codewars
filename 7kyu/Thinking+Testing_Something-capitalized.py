## ========== ========== ========== ========== ========== ========== ##
## https://www.codewars.com/kata/56d93f249c844788bc000002
## ========== ========== ========== ========== ========== ========== ##
'''
Thinking & Testing : Something capitalized

Description:
No Story

No Description

Only by Thinking and Testing

Look at the results of the testcases, and guess the code!
'''

## Solution
def testit(s):
    result = []
    for w in s.split():
        if len(w) < 2:
            result.append(w.upper())
        else:
            result.append(w[:-1] + w[-1].upper())
    return ' '.join(result)

## Test Codes
tests = [
    #(input, expected)
    # test cases:
    ((''), ''),
    (('a'), 'A'),
    (('b'), 'B'),
    (('a a'), 'A A'),
    (('a b'), 'A B'),
    (('a b c'), 'A B C'),
    (("aa"), "aA"),
    (("ab ab"), "aB aB"),
]

def run_tests():
    print("Running tests...\n")
    for i, (input, expected) in enumerate(tests, start=1):
        if isinstance(input, tuple):
            result = testit(*input)
        else:
            result = testit(input)
        
        if result == expected:
            print(f"Test {i}: ✓ Passed")
        else:
            print(f"Test {i}: ✗ FAILED")
            print(f"   Input:     {input}")
            print(f"   Expected:  {expected}")
            print(f"   Got:       {result}")
    
    print("\nDone.")
    
if __name__ == "__main__":
    run_tests()