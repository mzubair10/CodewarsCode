var palindromeChainLength = function (n) {
    const R = require('ramda');
    let cumulativeNumber = n;
    let stepsNeeded = 0;
    const reverse = R.compose(R.reverse, R.toString);
    const areNumbersSame = originalNum => {
        if (R.toString(originalNum) != reverse(originalNum)) {
            cumulativeNumber = originalNum + Number(reverse(originalNum));
            return false;
        }
        return true;
    }
    while (areNumbersSame(cumulativeNumber) === false) {
        stepsNeeded = R.inc(stepsNeeded);
    }
    return stepsNeeded;
};

console.log(palindromeChainLength(172));