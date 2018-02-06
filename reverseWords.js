// Write a reverseWords function that accepts a string a parameter, and 
//reverses each word in the string. Any spaces in the string should be retained.

// Example:

// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// reverseWords("double  spaces"); // returns  "elbuod  secaps"

function reverseWords(str) {
    const R = require('ramda');
    const splitWords = R.split(' '); //[ 'This', 'is', 'an', 'example!' ]
    const indWord = w => R.reverse(w); //R.split('', w); //R.compose(R.reverse, R.split('', w));
    const reverseIndWord =  R.map(indWord, splitWords(str));
    return R.join(' ')(reverseIndWord);
    //return R.map(indWord, splitWords(str));
}

console.log(reverseWords("a b c d"));