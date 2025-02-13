/*
KanaKonverter I

Description:

Write a simple converter for vowels.

      Romaji:    a/A e/E i/I u/U o/O
      Hiragana:  あ  え   い  う   お 
      Katakana:  ア  エ   イ  ウ   オ

Expect the above characters as input. There won't be invalid input.

Rules:

If there is no input return an empty string. 
Do not change romaji. (a->a, A->A ... NOT A->a )
Change Kana to lower case romaji. (あ->a ... NOT あ->A)
Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")

Example 1:

Input: "aeiou" 
Output:"hiragana"

Expected output: "あえいおう"

Example 2:

Input: "AえイOう"
Output:"romaji"

Expected output: "AeiOu"

*/



// Solution

const romajiDictLow = "aeiou";
const romajiDictUp  = "AEIOU";
const hiraDict      = "あえいおう";
const kataDict      = "アエイオウ";

function vowels(input, output){
  const hiraganaToRom = {};
  const katakanaToRom = {};
  const romToHiragana = {};
  const romToKatakana = {};
  const hiraToKata = {};
  const kataToHira = {};
  
  for(let i = 0; i < hiraDict.length; i++){
    if(output === "hiragana"){
        romToHiragana[romajiDictLow[i]] = hiraDict[i];
        romToHiragana[romajiDictUp[i]] = hiraDict[i];
        kataToHira[kataDict[i]] = hiraDict[i];
    }
    else if(output === "katakana"){
        romToKatakana[romajiDictLow[i]] = kataDict[i];
        romToKatakana[romajiDictUp[i]] = kataDict[i];
        hiraToKata[hiraDict[i]] = kataDict[i];
    }
    else if(output === "romaji"){
        hiraganaToRom[hiraDict[i]] = romajiDictLow[i];
        katakanaToRom[kataDict[i]] = romajiDictLow[i];
    }
  }
  let res = "";
  
  for(const char of input)
  {
    if(output === "hiragana" && romToHiragana[char])
      {
        res += romToHiragana[char];
      }
    else if(output === "hiragana" && kataToHira[char])
      {
        res += kataToHira[char];
      }
    else if(output === "katakana" && romToKatakana[char])
      {
        res += romToKatakana[char];
      }
    else if(output === "katakana" && hiraToKata[char])
      {
        res += hiraToKata[char];
      }
    else if(output === "romaji" && hiraganaToRom[char])
      {
        res += hiraganaToRom[char];
      }
    else if(output === "romaji" && katakanaToRom[char])
      {
        res += katakanaToRom[char];
      }
    else
      {
        res += char;
      }
  }
  return res;
}