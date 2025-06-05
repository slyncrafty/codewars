/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented
/* ========== ========== ========== ========== ========== ==========*/
/*
Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

Description:

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

    true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
    false otherwise.

For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

your function should return true as there is at least one developer from each age group.

Notes:

    The input array will always be valid and formatted as in the example above.
    Age is represented by a number which can be any positive integer up to 199.
*/



// Solution
function isAgeDiverse(list) {
  const ageGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const ageMap = new Set(list.map(person => {
    const age = parseInt(person.age);
    return age > 100 ? 10 : Math.floor(age / 10);
  }));
  return ageGroup.every(age => ageMap.has(age)) ? true : false;
}



/*  Lesson Learned
**  Array transfomation and validation using .map, .every
**
**  Data normalization -- normalizing raw data and map to meaningful categories 
**  Using Set, eliminates duplicates automatically and .has() is O(1) lookups 
*/



// Test Codes
function isAgeDiverseSolution(list) {
    let decades = { 10: false, 20: false, 30: false, 40: false, 50: false, 60: false, 70: false, 80: false, 90: false, 100: false };
    list.forEach( dev => decades[ dev.age < 100 ? Math.floor(dev.age/10) * 10 : Math.floor(dev.age/100) * 100 ] = true );
    return Object.keys(decades).every( decade => decades[decade] );
}
const list1 = [ { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' }
                  , { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' }
                  , { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' }
                  , { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' }
                  , { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' }
                  , { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' }
                  , { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' }
                  , { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' }
                  , { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' }
                  , { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' }
                  ];
console.log( isAgeDiverse(list1.map( x => ({...x}) )), isAgeDiverseSolution(list1) );

const list2 = [ { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' }
                  , { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' }
                  ];
console.log( isAgeDiverse(list2.map( x => ({...x}) )), isAgeDiverseSolution(list2) );
    
const list3 = [ { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' }
                  , { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
                  , { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' }
                  , { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
                  ];
console.log( isAgeDiverse(list3.map( x => ({...x}) )), isAgeDiverseSolution(list3) );