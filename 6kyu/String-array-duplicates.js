/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59f08f89a5e129c543000069
/* ========== ========== ========== ========== ========== ==========*/
/*
String array duplicates

Description:
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/



// Solution
function dup(s) {
  const res = [];
  for(const str of s) {
    let noDupStr = str[0];
    for(let i = 1; i < str.length; i++) {
      if(str[i] === str[i-1]) continue;
      noDupStr += str[i];
    }
    res.push(noDupStr);
  }
  return res;
};



// Optimized Solution
function dup(s) {
    return s.map(str => {
        let res = str[0];
        for(let i = 1; i < str.length; i++) {
            if(str[i] !== str[i-1]) res += str[i];
        }
        return res;
    })
}

// Test Codes
const deepEqual = (a, b) => {
    if(a === b) return true;
    if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) return a.every((val, i) => deepEqual(val, b[i]));
    return false;
}

const assertEq = (actual, expected) => {
    if(!deepEqual(actual, expected)) console.log(`Incorrect!`);
    else console.log(`Correct!`);
}

assertEq(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
assertEq(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
assertEq(dup(["kelless","keenness"]), ['keles','kenes']);
assertEq(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
assertEq(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
assertEq(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
assertEq(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
assertEq(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);