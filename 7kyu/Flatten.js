/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5250a89b1625e5decd000413/
/* ========== ========== ========== ========== ========== ==========*/
/*
Flatten

Description:
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3])  ==> [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  ==> [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]])  ==> [[1,2,3]]

*/



// Solution
function flatten(array) {
  return [].concat(...array);
}


function flatten(array) {
  const res = [];
  for(const elem of array) {
    if(Array.isArray(elem)) {
      res.push(...elem);
    } else {
      res.push(elem);
    }
  }
  return res;
}



// Test Codes
const simpleTest = (input, expected) => {
    const actual = flatten(input);
    if(actual === expected) return true;
    if(deepEqual(actual, expected)) console.log('Correct!');
    else console.log('Incorrect');
}

const deepEqual = (a, b) => {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  return false;
};

simpleTest([], []);
simpleTest([1, 2, 3], [1, 2, 3]);
simpleTest([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]], [1, 2, 3, "a", "b", "c", 1, 2, 3]);
simpleTest([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]], [3, 4, 5, [9, 9, 9], "a,b,c"]);
simpleTest([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]], [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
