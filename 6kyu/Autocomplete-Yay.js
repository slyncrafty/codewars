/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/60d2325592157c0019ee78ed
/* ========== ========== ========== ========== ========== ==========*/
/*

Autocomplete! Yay!

Description:

It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']

For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

Important note:

Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".

(Thanks to wthit56 for the suggestion!)
*/



// Solution
function autocomplete(input, dictionary){
  const cleanedInput = input.replace((/[^A-Za-z]/g), '').toLowerCase();
  const len = cleanedInput.length;
  return dictionary.filter(e => e.toLowerCase().slice(0,len) === cleanedInput).splice(0,5);
}


// Test Codes
let dictionaryNoGuess = [
'airplane','apple','air','avenue','airport','adamantium','awkwardness','awesome','amazing',
'ball','book','bike','bill','billiard','bell','bowl','Blastoise','beautiful',
'car','cookie','coup','candle','change','champion','call','camel','Charizard','catastrophic','cat',
'dog','down','dirigible','dare','doll','decode','digit','download','digital','dollar','decompose','declaration','dream',
'eat','excellent','elephant','ear','eye','eagle','evil','elevator','electronic','electron','elegant','easy',
'fairy','fin','flower','floral','float','fight','finish','finally','figure',
'gold','ghost','grate','grapes','giant','godzilla','gigantic','gigabyte','gremlin','gravel','game','Gyarados',
'howl','house','hot','hidden','heat','Hyrule','heart','health','hammer','harmony',
'igloo','inn','inside','inverted','infection','imagine','imagination','image','internal','impressive','inconceivable',
'jump','jumping','judge','judging','juggle','juggling','juggler','jiggle','jello','jelly','jam',
'king','key','kingdom','keepsake','kick','kicker','knot','kit','kitten',
'lamp','light','lol','llama','lake','love','link','league','legend','laboratory','lab',
'more','morbid','move','mover','movie','monocle','murica','molar','mouth','muscle','montage',
'Nopesville','no','naughty','nice','nail polish','noodles','niece','nissan',
'octopus','orange','oval','orderly','order','orbit','ordinal','orion',
'pinch','pallet','paint','portrait','photograph','photo','pork','pig','pigeon',
'queen','quick','quickly','quest','question','quarry','quintuplets','query','quandary','quesadilla',
'royal','ruler','regal','rhino','rage','right','regular','regulate','regurgitate','reasonable','roll','rolling',
'same','sum','sip','sum','small','suggestion','seven','sink','sinker','string',
'tyrant','tiger','tired','tied','trick','trap','titan','titanic','tower','towering','trouble','terrific','terrible','this',
'umbrella','unicorn','under','undercover','united','unbelievable','unimaginable','ultra','ultraviolet',
'victory','violin','viola','vibrant','video playback','velcro','velvet',
'window','win','wedding','wet','where','wild','well','welcome','wonderful',
'xylophone','x-ray','X-Men','Xavier','xenon','xerox','Xerneas',
'Yaphi','you','yourself','your','yonder','yodel','yammer','Yveltal',
'Zelda','Zygarde','zebra','zero','Zeus','zap cannon','zephyr','zig-zag'
];

console.log(autocomplete('a', dictionaryNoGuess), ['airplane', 'apple', 'air', 'avenue', 'airport'])
console.log(autocomplete('nothinghere', dictionaryNoGuess), [])
console.log(autocomplete('z', dictionaryNoGuess), ['Zelda', 'zebra', 'zero', 'Zeus', 'zephyr'])
console.log(autocomplete('ni', dictionaryNoGuess), ['nice', 'niece', 'nissan'])
console.log(autocomplete('o', dictionaryNoGuess), ['octopus', 'orange', 'oval', 'orderly', 'order'])
console.log(autocomplete('n~!@#$%^&*()_+1234567890ope', dictionaryNoGuess), ['Nopesville'])
