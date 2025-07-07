/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/57d27a0a26427672b900046f
/* ========== ========== ========== ========== ========== ==========*/
/*
Duck Shoot - Easy Version

Description:
You've arrived at a carnival and head straight for the duck shooting tent. Why wouldn't you?

You will be given a set amount of ammo, and an aim rating of between 1 and 0. No your aim is not always perfect - hey maybe someone fiddled with the sights on the gun...

Anyway your task is to calculate how many successful shots you will be able to make given the available ammo and your aim score, then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged. You will always shoot left to right.

Example of start and end duck string with two successful shots:

Start ---> |~~~~~22~2~~~~~|

Bang!! Bang!!

End ---> |~~~~~XX~2~~~~~|

All inputs will be correct type and never empty.

*/



// Solution
function duckShoot(ammo, aim, ducks){
  let ducksCount = (ducks.match(/2/g) || '').length;
  
  const hitRate = Math.min(ducksCount, Math.floor(ammo * aim));
  let numHit = 0; 
  console.log(hitRate)
  return ducks.split('').map(char => {
    if(char === '2' && numHit < hitRate) {
      numHit++;
      return 'X';
    }
    return char;
  }).join('');
}



// Test Codes
console.log(duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|'), '|~~X~~~X2~2~~22~2~~~~2~~~|');
console.log(duckShoot(9, 0.22, '|~~~~~~~2~2~~~|'), '|~~~~~~~X~2~~~|'); 
console.log(duckShoot(6, 0.41, '|~~~~~22~2~~~~~|'), '|~~~~~XX~2~~~~~|');    