function divisors(integer) {
    const R = require('ramda');
    let primeResult = '$num is prime';
    const sortAscending = function (a, b) { return a - b; };
    const flooredSqrt = R.compose(Math.floor, Math.sqrt);
    const divisorsList = [];
    const tempInteger = integer;
    let flooredSqrtResult = flooredSqrt(tempInteger)
    while (flooredSqrtResult > 1) {
        if (R.mathMod(integer, flooredSqrtResult) == 0) {
            divisorsList.push(flooredSqrtResult);
            divisorsList.push(R.divide(integer, flooredSqrtResult));
        }
        flooredSqrtResult = R.subtract(flooredSqrtResult, 1);
    }
    if (R.length(divisorsList) > 0) {
        return R.sort(sortAscending, R.uniq(divisorsList));
    }
    return R.replace('$num', integer, primeResult);
};

console.log(divisors(25));