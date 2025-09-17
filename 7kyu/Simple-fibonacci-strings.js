/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5aa39ba75084d7cf45000008
/* ========== ========== ========== ========== ========== ==========*/
/*
Simple fibonacci strings

Description:
Given that

f0 = '0'
f1 = '01'
f2 = '010' = f1 + f0
f3 = '01001' = f2 + f1

You will be given a number and your task is to return the nth fibonacci string. For example:

solve(2) = '010'
solve(3) = '01001'

*/



// Solution
function solve(n){
    if(n === 0) return '0';
    if(n === 1) return '01';
    
    let prev = '0', curr = '01';
    for(let i = 2; i <= n; i++) {
        [prev, curr] = [curr, curr + prev]
    }
    return curr;
}


// Test Codes
const strictEqual = (actual, expected) => {
    if(actual === expected) console.log('Correct');
    else console.error('Incorrect', actual, expected);
}

strictEqual(solve(0),'0');
strictEqual(solve(1),'01');
strictEqual(solve(2),'010');
strictEqual(solve(3),'01001');
strictEqual(solve(5),'0100101001001');