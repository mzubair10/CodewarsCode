function persistence(num) {
    const R = require('ramda');
    const numSplittedIntoArray = R.compose(R.split(''), R.toString);
    if (R.length(numSplittedIntoArray(num)) === 1) {
        return 0;
    }
    let multiplicativeofAllIntegers = R.reduce(R.multiply, 1, numSplittedIntoArray(num));
    let counter = 1;
    let lengthOfMultiplicativeResult = R.compose(R.length, R.split(''), R.toString)(multiplicativeofAllIntegers);
    while (lengthOfMultiplicativeResult > 1) {
        counter = R.inc(counter);
        num = multiplicativeofAllIntegers;
        multiplicativeofAllIntegers = R.reduce(R.multiply, 1, numSplittedIntoArray(num));
        lengthOfMultiplicativeResult = R.compose(R.length, R.split(''), R.toString)(multiplicativeofAllIntegers);
    }
    return counter;
}


console.log(persistence(4600086));