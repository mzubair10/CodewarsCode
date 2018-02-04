// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case
function isIsogram(str) {
    const R = require('ramda');
    if (!R.isNil(str)) {
        const convertToLower = x => R.toLower(x);
        const splitComponents = R.split('');
        const isRepeated = (val, key) => val > 1;
        const finalCurriedFunction = R.compose(R.isEmpty, R.pickBy(isRepeated), R.countBy(R.toLower), splitComponents);
        return finalCurriedFunction(str);
    }
}


isIsogram('ABD');