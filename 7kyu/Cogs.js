/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a30e7e9c5e28454790000c1
/* ========== ========== ========== ========== ========== ==========*/
/*
Cogs

Description:
Kata Task

You are given a list of cogs in a gear train

Each element represents the number of teeth of that cog

e.g. [100, 75] means

    1st cog has 100 teeth
    2nd cog has 75 teeth

If the first cog rotates clockwise at 1 RPM what is the RPM of the final cog?

(use negative numbers for anti-clockwise rotation)
Notes

    no two cogs share the same shaft
*/



// Solution
function cogRpm(cogs) {
  const N = cogs.length;
  if(N === 0) return 0;
  else if(N === 1) return 1;
  const G1 = cogs[0];
  const GN = cogs[N-1];
  const sign = (N-1) % 2 === 0 ? 1 : -1;
  return G1/GN * sign;
}



// Test Codes
console.log(cogRpm([100, 75]), -4/3);
console.log(cogRpm([100, 100, 75]), 4/3);
console.log(cogRpm([100, 100]), -1);
console.log(cogRpm([100, 100, 100]), 1);
console.log(cogRpm([100, 100, 100, 100]), -1);