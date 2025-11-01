/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/580be55ca671827cfd000043
/* ========== ========== ========== ========== ========== ==========*/
/*
Word Challenges at School

Description:
The principal of a school likes to put challenges to the students related with finding words of certain features. One day she said: "Dear students, the challenge for today is to find a word that has only one vowel and seven consonants but cannot have the letters "y" and "m". I'll give a special award for the first student that finds it." One of the students used his dictionary and spent all the night without sleeping, trying in vain to find the word. The next day, the word had not been found yet. This student observed that the principal has a pattern in the features for the wanted words:

    The word should have n vowels, may be repeated, for example: in "engineering", n = 5.
    The word should have m consonants, may be repeated also: in "engineering", m = 6.
    The word should not have some forbidden letters (in an array), forbid_letters.
    Vowels are a, e, i, o, and u.

You will be provided with a list of words, WORD_LIST(python/crystal), wordList(javascript), wordList (haskell), $word_list(ruby), and you have to create the function, wanted_words(), that receives the three arguments in the order given above, wanted_words(n, m, forbid_list) and output an array with the word or an array, having the words in the order given in the pre-loaded list, in the case of two or more words were found.

Let's see some cases:

wantedWords(1, 7, ["m", "y"]) == ["strength"]
wantedWords(3, 7, ["m", "y"]) == ['afterwards', 'background', 'photograph', 'successful', 'understand']

For cases where no words are found the function will output an empty array.

wantedWords(3, 7, ["a", "s" , "m", "y"]) == []

Help our student to win this and the next challenges of the school. He needs to sure about a suspect that he has. That many times there are no solutions for what the principal is asking for. All words have its letters in lowercase format. Enjoy it!

*/

// Solution
// function wantedWords(n, m, forbid_let){
//     const words = wordList.filter(e => !forbid_let.some(ch => e.includes(ch)));

//   const getFreqMap = (word) => {
//       const freqMap = {};
//       for(const ch of word) {
//         freqMap[ch] = (freqMap[ch] || 0) + 1;
//       }
//       return freqMap;
//     }
//     const charCounts = (word) => {
//       const map = getFreqMap(word);
//       let vowelCount = 0;
//       let consonantCount = 0;
//       for(const [key, count] of Object.entries(map)) {
//         if(['a','e','i','o','u'].includes(key)) {
//           vowelCount += count;
//         } else {
//           consonantCount += count;
//         }
//       }
//       return [vowelCount, consonantCount];
//     }
//     const result = [];
//     for(const word of words) {
//       const [vowelCount, consonantCount] = charCounts(word);
//       if(vowelCount === n && consonantCount === m) result.push(word);
//     }
//     return result;
// }

/**
 *
 * Filter out words containing the forbidden letters
 * Count vowels and consonants per word
 * as counting, find word with matching (n, m) counts.
 *
 * This solution uses Set and .has() to look up the vowel counts which is O(1) lookup.
 */
function wantedWords(n, m, forbid_let) {
	const vowels = new Set('aeiou');
	const forbidden = new Set(forbid_let);
	const result = [];

	for (const w of wordList) {
		if ([...w].some((ch) => forbidden.has(ch))) continue;
		let vCount = 0,
			cCount = 0;
		for (const ch of w) vowels.has(ch) ? vCount++ : cCount++;
		if (vCount === n && cCount === m) result.push(w);
	}
	return result;
}

// Test Codes
console.log(wantedWords(1, 7, ['m', 'y']), ['strength']);

console.log(wantedWords(3, 7, ['m', 'y']), [
	'afterwards',
	'background',
	'photograph',
	'successful',
	'understand',
]);

console.log(wantedWords(3, 7, ['a', 's', 'm', 'y']), []);
