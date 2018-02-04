// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
// "indivisibility" -> 1 # 'i' occurs six times

function duplicateCount(text) {
    const R = require('ramda');
    if (!R.isNil(text)) {
        const convertToLower = x => R.toLower(x);
        const splitComponents = R.split('');
        const isRepeated = (val, key) => val > 1;
        const finalCurriedFunction = R.compose(R.length, R.keys, R.pickBy(isRepeated), R.countBy(R.toLower), splitComponents);
        return finalCurriedFunction(text);
    }
}

console.log(duplicateCount('indivisibility'))