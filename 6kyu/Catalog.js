/* ========== ========== ========== ========== ========== ==========*/
// https://www.codewars.com/kata/59d9d8cb27ee005972000045
/* ========== ========== ========== ========== ========== ==========*/
/*
Catalog

Description:
You are given a small extract of a catalog:

s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

...

(prx stands for price, qty for quantity) and an article i.e "saw".

The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

"table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."

If the article is not in the catalog return "Nothing".
Notes

    There is a blank line between two lines of the catalog.

    The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog; however see below a note for Prolog language).

    The line separator of results may depend on the language \nor \r\n. In Pascal \n is replaced by LineEnding.

    in Perl use "£" instead of "$" before the prices.

    You can see examples in the "Sample ".

Note for Prolog language

    If the article is not in the catalog then R equals "".

    R substrings (separated by "\n") must be in alphabetic order.

*/



// Solution
function catalog(s, article) {
  const lines = s.split('\n').filter(line => line.trim() !== '');
  const results = [];
  
  for (const line of lines) {
    const match = line.match(/<name>(.*?)<\/name><prx>(.*?)<\/prx><qty>(.*?)<\/qty>/);
    if(!match) continue;
    const [, name, prx, qty] = match;
    if(name.includes(article)) {
      results.push(`${name} > prx: \$${prx} qty: ${qty}`)
    }
  }
  return results.length ? results.join('\r\n') : 'Nothing';
}



// Test Codes
const s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`


const assertEquals = (a, b) => {
    if(a === b) console.log('Correct');
    if(deepEqual(a,b)) console.log('Correct');
    else console.error('Incorrect');
}

const deepEqual = (a, b) => {
    if(a === b) return true;
    else if(Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
        return a.every((e,i) => e === b[i]);
    } else return false;
}

assertEquals(catalog(s, 'ladder'), 'ladder > prx: $112 qty: 12')
assertEquals(catalog(s, 'saw'), 'table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10\r\nsaw for metal > prx: $13.80 qty: 32')
assertEquals(catalog(s, 'wood pallet'), 'wood pallet > prx: $65 qty: 21')