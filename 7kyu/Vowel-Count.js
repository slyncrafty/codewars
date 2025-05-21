/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/54ff3102c1bad923760001f3
/* ========== ========== ========== ========== ========== ==========*/
/*
Vowel Count

Description:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/



// Solution
function getCount(str) {
  let countVowels = 0;
  let vowels = "aeiou";
  for(let i = 0; i < str.length; i++) {
    const currChar = str[i];
    for(let j= 0; j < vowels.length; j++) {
      if(currChar === vowels[j]) countVowels++;
    }
  }
  return countVowels;
}

function getCount(str) {
    const regex = /[aeiou]/g; 
    const countVowels = str.match(regex);
    return countVowels === null ? 0 : countVowels.length;
}


// Test Codes
console.log(getCount("abracadabra"), 5);
console.log(getCount("pear tree"), 4);
console.log(getCount("o a kak ushakov lil vo kashu kakao"), 13);
console.log(getCount("my pyx"), 0);
console.log(getCount("tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty"), 168);
