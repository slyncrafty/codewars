/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5ac95cb05624bac42e000005
/* ========== ========== ========== ========== ========== ==========*/
/*
Frequency Analysis With Buckets

Description:

Given an input array (arr) of positive integers, the objective is to return an output array where each index represents the amount of times an element appeared (frequency) in the input array.

More specifically, the element at each index of the output array will be an array (bucket) containing integers that appeared index-amount-of-times.

Otherwise, slot nulls (JavaScript, Java), None's (Python) nils (Ruby), or NULL's (C/C++) where appropriate. A valid array will always be provided.

If an array of [1,2,3,4,4,5,5,5] is passed in, the expected output should be: [null, [1,2,3], [4], [5], null, null, null, null, null].

Explanation:

// bucketize(arr) ======> outputArray
bucketize([1,2,3,4,4,5,5,5]) ======> [null, [1,2,3], [4], [5], null, null, null, null, null]

An element cannot appear 0 times, so a null is placed at outputArray[0]. The elements 1, 2, and 3 appear once. This is why they are located at outputArray[1]. Notice the elements are grouped together in an array and sorted in ascending order. The element 4 appears twice. This is why it is located at outputArray[2]. The element 5 appears three times. This is why it is located at outputArray[3].

Although an integer could have possibly appeared four, five, six, seven, or eight times, this is not the case for this particular example. This is the reason why the elements at outputArray[4], outputArray[5], outputArray[6], outputArray[7], and outputArray[8] are all null values.

Examples:

bucketize([2,2,4,4,6,6,9,9,9,9]) ===> [null, null, [2,4,6], null, [9], null, null, null, null, null, null];
bucketize([3,3,3,3,2]) =============> [null, [2], null, null, [3], null];
bucketize([5,5,5,5,5]) =============> [null, null, null, null, null, [5]];
bucketize([77,3,40,40,40]) =========> [null, [3,77], null, [40], null, null];
bucketize([16,7,5,3,6,23]) =========> [null, [3,5,6,7,16,23], null, null, null, null, null];


*/



// Solution
function bucketize(arr) {
    // count frequencies in arr
  const freq = {};
  for(const elem of arr) {
    freq[elem] = (freq[elem] || 0) + 1;
  }

  // initialize result array filled with null
  const result = Array(arr.length + 1).fill(null);

  // iterate through freq map to populate result array
  // if null, replace with a new array
  for(const [val, count] of Object.entries(freq)) {
    const valueNum = parseInt(val, 10);
    if(result[count] === null) {
        result[count] = [ valueNum ];
    } else {
        result[count].push(valueNum);
    }
  }
  return result;
}



/* ## Lessons Learned:
** Built frequency map obj to count frequencies in the given array and push each item to matching index of resulting array.  
** 
** The current solution relies on the JS object key order since we know that keys are integers. 
** Adding additional step of sorting sort will ensure correctly sorted for non-number keys.
*/



// Test Codes
let intArrExampleOne = [1,1,1];
console.log(bucketize(intArrExampleOne), [null, null, null, [1]]);

let intArrExampleTwo = [7,6,6];
console.log(bucketize(intArrExampleTwo), [null, [7], [6], null]);

let intArrExampleThree = [5,5,5,9];
console.log(bucketize(intArrExampleThree), [null, [9], null, [5], null]);

let intArrExampleFour = [8,8,4,4];
console.log(bucketize(intArrExampleFour), [null, null, [4, 8], null, null]);

let intArrExampleFive = [1,7,7,7,7,10];
console.log(bucketize(intArrExampleFive), [null, [1,10], null, null, [7], null, null]);

let intArrExampleSix = [20, 40, 60, 80, 100, 20];
console.log(bucketize(intArrExampleSix), [null, [40, 60, 80, 100], [20], null, null, null, null]);

