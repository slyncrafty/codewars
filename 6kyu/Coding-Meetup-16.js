/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details
/* ========== ========== ========== ========== ========== ==========*/
/*
Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

Description:
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

write a function that

    adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:

Hi, could you please provide your <property name>.

    and returns only the developers with missing details:

[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]

Notes:

    At most only one of the values will be null / empty.
    Preserve the order of the original list.
    Return an empty array [] if there is no developer with missing details.
    The input array will always be valid and formatted as in the example above.
*/



// Solution
function askForMissingDetails(list) {
    return list.filter(p => Object.values(p).includes(null)).map((e) => {
        for(const key of Object.keys(e)) {
            if(e[key] === null) {
                e['question'] = `Hi, could you please provide your ${key}.`;
            }
        }
        return e;
    })
}



// filter(callback) method
function askForMissingDetails(list) {
    return list.filter(function(a) {
        for(let key in a) {
            if(a[key] === null) {
                a.question = `Hi, could you please provide your ${key}.`;
                return a;
            }
        }
    })
}



/*  Lesson Learned:
**  .filter(callback) can keep only those callback return truthy 
**  does fewer total iterations compared to .filter and .map
**  But this method uses .filter to handle two concerns, which could reduce readability
*/



// Test Codes
var list1 = [
  { firstName: null, lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' }
];

var list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: null, continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Amar', lastName: null, country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

var list3 = [
  { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: null, age: 41, language: 'Clojure' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: null, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: null, continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

var list4 = [
  { firstName: 'Paulo', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' }
];

// Working solution
function askForMissingDetailsSolution(list) {
  const withQuestion = list.map(dev => {
    Object.keys(dev).forEach(prop => dev[prop] === null ? 
                             dev.question = `Hi, could you please provide your ${prop}.` : 
                             null);
    return dev;
  });
  return withQuestion.filter(dev => dev.question);
}


console.log('List of developers: ', JSON.stringify(list1));
console.log(askForMissingDetails(list1), askForMissingDetailsSolution(list1));

console.log('List of developers: ', JSON.stringify(list2));
console.log(askForMissingDetails(list2), askForMissingDetailsSolution(list2));

console.log('List of developers: ', JSON.stringify(list3));
console.log(askForMissingDetails(list3), askForMissingDetailsSolution(list3));

console.log('List of developers: ', JSON.stringify(list4));
console.log(askForMissingDetails(list4), askForMissingDetailsSolution(list4));