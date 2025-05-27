/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047
/* ========== ========== ========== ========== ========== ==========*/
/*
Build a pile of Cubes

Description:

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3 n3, the cube above will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which will have a volume of 13 1^3 13.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m n3+(n−1)3+(n−2)3+...+13=m if such a n exists or -1 if there is no such n.
Examples:

findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/



// Solution
function findNb(m) {
    //m = (n*(n+1)/2)**2
    const constant = 2 * Math.sqrt(m);
    if (!Number.isInteger(constant)) return -1;
    let n = Math.floor(Math.sqrt(constant));    
    while(n*(n+1) < constant){
      n++
    }
    return n*(n+1) === constant ? n : -1;
}


// Test Codes
console.log(findNb(4183059834009), 2022)
console.log(findNb(24723578342962), -1)
console.log(findNb(135440716410000), 4824)
console.log(findNb(40539911473216), 3568)