/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/
/* ========== ========== ========== ========== ========== ==========*/
/*
Extract the IDs from the data set


Description:
Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]

The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.

*/



// Solution
function extractIds(data){
    if(!data || typeof data !== 'object') return [];
    const res = [];
    
    const traverse = (node) => {
      if(!node || typeof data !== 'object') return;
      if("id" in node) res.push(node.id);
      if(Array.isArray(node.items)) {
        for(const item of node.items) {
          traverse(item);
        }
      }
    }
    
    traverse(data);
    return res;
}



const extractIds = data => 
  data && typeof data === 'object' && 'id' in data ?
      [data.id, ...(Array.isArray(data.items) ? data.items.flatMap(extractIds) : [] )]
      : [];



// Test Codes
const test = (input, expected) => {
    const actual = extractIds(input);
    if(deepEqual(actual, expected))  console.log('Correct!');
    else console.error(`Incorrect! ${actual} does not match ${expected}`);
}

const deepEqual = (a, b) => {
    if(a === b) return true;
    if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) return a.every((e,i) => deepEqual(e, b[i]));
    return false;
}

test({
            id: 1,
            items: [
                { id: 3 },
                {
                    id: 4, items: [
                        { id: 6 },
                        { id: 7 },
                        { id: 8, items: [{ id: 9 }] }
                    ]
                }
            ]
        }, [1, 3, 4, 6, 7, 8, 9]);

