/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/
/* ========== ========== ========== ========== ========== ==========*/
/*
Build a Trie

Description:
The goal of this kata is to implement trie (or prefix tree) using dictionaries (aka hash maps or hash tables), where:

    the dictionary keys are the prefixes
    the value of a leaf node is None in Python, nil in Ruby, null in Groovy, JavaScript and Java, and Nothing in Haskell.
    the value for empty input is {} in Python, Ruby, Javascript and Java (empty map), [:] in Groovy, and Trie [] in Haskell.

Examples:

buildTrie() => {}
buildTrie("") => {}
buildTrie("trie") => {'t': {'tr': {'tri': {'trie': null}}}}
buildTrie("tree") => {'t': {'tr': {'tre': {'tree': null}}}}
buildTrie("A","to", "tea", "ted", "ten", "i", "in", "inn") => {'A': null, 't': {'to': null, 'te': {'tea': null, 'ted': null, 'ten': null}}, 'i': {'in': {'inn': null}}}
buildTrie("true", "trust") => {'t': {'tr': {'tru': {'true': null, 'trus': {'trust': null}}}}}

*/



// Solution
function buildTrie(...words) {
    const root = {};
  
    // for each word in words, walk through its prefixes
    for(const w of words) {
      if(!w) continue;
      
      let node = root;
      for(let i = 1; i <= w.length; i++) {
        const prefix = w.slice(0, i);
        // the last prefix for the `w`
        if(i === w.length) {
          if(!(prefix in node)) node[prefix] = null; 
        } else {
          if(!(prefix in node) || node[prefix] === null) node[prefix] = {};
          node = node[prefix];
        }
      }
    }
    return root;
}


// Test Codes
const simpleTest = (actual, expected) => {
    if(deepEqualObj(actual, expected)) console.log('Correct!');
    else console.log('Incorrect');
}

const deepEqualObj = (a,b) => {
    if(a === b) return true;
    if(a && b && typeof a === 'object' && typeof b === 'object') {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return keysA.every(k => deepEqualObj(keysA[k], keysB[k]));
    }
    return false;
}

simpleTest(buildTrie(), {});
simpleTest(buildTrie("", ), {});
simpleTest(buildTrie("trie"), {'t': {'tr': {'tri': {'trie': null}}}});
simpleTest(buildTrie("tree"), {'t': {'tr': {'tre': {'tree': null}}}});
simpleTest(buildTrie("trie", "trie"), {'t': {'tr': {'tri': {'trie': null}}}});
simpleTest(buildTrie("A","to", "tea", "ted", "ten", "i", "in", "inn"), {'A': null, 't': {'to': null, 'te': {'tea': null, 'ted': null, 'ten': null}}, 'i': {'in': {'inn': null}}});
simpleTest(buildTrie("true", "trust"), {'t': {'tr': {'tru': {'true': null, 'trus': {'trust': null}}}}});