/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/5a353a478f27f244a1000076
/* ========== ========== ========== ========== ========== ==========*/
/*
Jokes you've been 'awaiting' for ... promise

Description:

Here are some classic Christmas cracker jokes.

There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.
Your challenge

    Write an async function which takes an apiUrl and jokeId which returns a promise.
    The data will need to be filtered to get the specified joke by id.
    When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.

Handle error cases

    If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
    Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.

Throw error in a promise style
Info

Get the data using the mocked fetch(url) function, which implements the basics of the fetch api. Learn about fetch. Learn about async/await.

Joke data shape:

{
  jokes: [{ 
    id: 101,
    setup: "Who is Santa's favorite singer?",
    punchLine: "Elf-is Presley!"
  },
...moreJokes]
// Use for your tests ^^

*/



// Solution
async function sayJoke(apiUrl, jokeId){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        if( !data || !data.jokes ) throw new Error('No jokes at url: ${url}');
        const joke = data.jokes.find(j => j.id === jokeId);
        if( !joke ) throw new Error('No jokes found id: {jokeId}');
    
        return {
            saySetup: () => joke.setup,
            sayPunchLine: () => joke.punchLine,
        };
    } catch (err) {
        throw err;
    }
}



/* ## Lessons Learned:
** Using async/await function to fetch data from given url and return. 
** 
** For validating fetched data, for example, `!data.jokes` works for this case,
** but it isn't truthy so better to replace it with safer option `!Array.isArray(data.jokes)
** which also makes sure later when using .find() and it does not fail
*/

       

// Test Codes
const jokesUrl = "http://great.jokes/christmas";

try {
    let joke = sayJoke(jokesUrl, 101);
    console.log(joke.saySetup(), "Who is Santa's favorite singer?", "Setup line for ID 101");
    console.log(joke.sayPunchLine(), "Elf-is Presley!", "Punch line for ID 101");
    } catch (e) {
    console.error(e);
}