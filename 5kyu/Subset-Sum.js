/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/688a614adfe03af512d4458c
/* ========== ========== ========== ========== ========== ==========*/
/*
Subset Sum

Description:
Given a possibly empty list of strictly positive numbers and a non-negative target number, return either a subset of the list summing to the target, or null or a similar empty value if no such subset exists.

The subset must consist of unique ( by index ) list elements.
If a particular value occurs more than once in the input list, you can use it up to as many times as it occurs.
The empty subset sums to 0.
If multiple valid subsets exist, return any one of them.

The target will never be much bigger than the sum of the input list, and often quite a bit smaller.

*/



// Solution
/**
 * @param{number[]} xs
 * @param{number} target
 * @returns{number[] | null} subset summing to target or null
 */
function subsetSum(xs,target) {
  if(target === 0) return [];
  if(xs.length === 0) return null;
  
  const prevSum = new Array(target + 1).fill(-1);
  const idx = new Array(target + 1).fill(-1);
  
  prevSum[0] = -2;
  
  for(let i = 0; i < xs.length; i++) {
    const x = xs[i];
    if(x > target) continue;
    // iterate down so each index is used once at most. 
    for(let s = target; s >= x; s--) {
      if(prevSum[s] === -1 && prevSum[s - x] !== -1) {
        prevSum[s] = s - x; 
        idx[s] = i;
      }
    }
  }
  
  if(prevSum[target] === -1) return null;
  
  const subset = [];
  for(let s = target; s > 0; s = prevSum[s]) {
    subset.push(xs[idx[s]]);
  }
  subset.reverse();
  return subset;
}



// Test Codes
const impossible = false, possible = true;

const test = (possible, xs, target) => {
    const actual = subsetSum([...xs], target);
    if( possible ) {
        if(isSubset(xs, actual) && actual.reduce((a,c) => a+c,0 === target)) console.log("Correct");
        else console.log("incorrect!")
    } else {
        if(actual === null) console.log("Correct");
        else console.log("Incorrect")
    }
}

function isSubset(a, b) {
    if(a === null || b === null) return false
    // Create a hash set and insert all elements of a
    const hashSet = new Set(a);
    // Check each element of b in the hash set
    for (const num of b) {
        if (!hashSet.has(num)) {
            return false;
        }
    }
    // If all elements of b are found in the hash set
    return true;
}

test( possible, [], 0 );
test( impossible, [], 2 );
test( possible, [1,2,3,4,5], 0 );
test( possible, [1,2,3,4,5], 2 );
test( possible, [1,2,3,4,5], 4 );
test( possible, [1,2,3,4,5], 6 );
test( possible, [1,2,3,4,5], 8 );
test( possible, [1,2,3,4,5], 10 );
test( possible, [1,2,3,4,5], 12 );
test( possible, [1,2,3,4,5], 14 );
test( impossible, [1,2,3,4,5], 16 );
test( impossible, [2,4,6,8,10], 17 );
test( possible, [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 64 );
test( possible, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1], 64 );