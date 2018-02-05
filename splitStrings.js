function solution(str){
    const R = require('ramda');
    const splitString = R.splitEvery(2)(str);
    const checkSingleCharacter = x => R.length(x) > 1 ? x : R.concat(x, '_');
    return R.map(checkSingleCharacter, splitString);
 }

 console.log(solution('abcdef'));