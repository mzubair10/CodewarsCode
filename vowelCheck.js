function getCount(str) {
    const R = require('ramda');
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const indexAvailable = x =>  R.indexOf(x, vowel) > -1 ;
    const curriedVowelCount = R.compose(R.view(R.lensProp('true')), R.countBy(indexAvailable), R.split(''));
    const vowelCount = curriedVowelCount(str);
    if(R.isNil(vowelCount)){
        return 0;
    }
    return vowelCount;
}

console.log(getCount('rtraaei'));