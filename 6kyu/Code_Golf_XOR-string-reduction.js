/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5ad6e5bdb0e8d46b4500201a/
/* ========== ========== ========== ========== ========== ==========*/
/*
[Code Golf] XOR string reduction

Description:
Given a string consisting entirely of binary digits (0 , 1) seperated using spaces. Find the XOR of all digits and return the answer.
Examples :

Given

"1 0 0 1 0" --> 0
"1 0 1 1 1 0 0 1 0 0 0 0" --> 1

How :

1 0 0 1 0

Solving :

(1 XOR 0) (0 XOR 1) 0
1 1 0
(1 XOR 1) 0
0 0
0 XOR 0
0 ---> Answer

This is code-golf so shortest code is winner. The limit of solution is set to 40 chars (exclusive).
*/



// Solution
X=([Q,...S])=>Q?Q^X(S):0

// X=s=>~~s.split(' ').reduce((a,c)=>a^c)

// X=s=>eval(s.replace(/ /g,'^'))


// Test Codes
const strictEqual = (a,e) => {
    if(a===e) console.log('Correct');
    else console.error('Incorrect', a, e);
}

strictEqual(X('1 0 0 1 0') , 0)
strictEqual(X('1 0 1 1 1 0 0 1 0 0 0 0') , 1)
strictEqual(X('1 0 0 1 0 1 0 0 1 0 1 0 1 0 1 0 1 0') , 0)