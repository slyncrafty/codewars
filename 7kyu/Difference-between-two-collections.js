/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/594093784aafb857f0000122
/* ========== ========== ========== ========== ========== ==========*/
/*
Difference between two collections

Description:
Find the difference between two collections. The difference means that either the element is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain duplicates; the difference should not contain duplicates.
Example

A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]

*/



// Solution
function diff(a, b){
  const setA = new Set(a);
  const setB = new Set(b);

  const res = [];
  
  for(const x of setA) {
    if(!setB.has(x)) res.push(x);
  }
  for(const x of setB) {
    if(!setA.has(x)) res.push(x);
  }
  return res.sort();
}



function diff(a,b) {
    return [...new Set([...a,...b])]
            .filter((e) => !(a.includes(e) && b.includes(e)))
            .sort();
}


// Test Codes
const deepEqual = (a,b) => {
    if(a === b) return true;
    if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
        return a.every((e,i) => deepEqual(e, b[i]));
    }
    return false;
}


deepEqual(diff(["a","b"], ["a","b"]), []);

let a1 = ["a","b"];
let b1 = [];
deepEqual(diff(a1, b1), a1);


let a2 = [];
let b2 = ["a","b"];
deepEqual(diff(a2, b2), b2);


deepEqual(diff([], []), []);

let a3 = ["a","b","z"];
let b3 = ["a","b"];
deepEqual(diff(a3, b3), ["z"]);


let a4 = ["a","b","z","d","e","d"];
let b4 = ["a","b", "j","j"];
deepEqual(diff(a4, b4), ["d","e","j","z"]);
