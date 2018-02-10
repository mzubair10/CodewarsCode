function tripledouble(num1, num2) {
    const R = require('ramda');
    const numbersSplit = R.converge(R.split(''), [R.toString]);
    const unique3Numbers = [];
    const unique2Numbers = [];
    //num1 split
    numbersSplit(num1).forEach(function (element, i) {
        const reducedSplit = R.slice(i, i + 3);
        const num1Reduced = reducedSplit(numbersSplit(num1));
        if (num1Reduced.length > 2) {
            const uniqNumbersAvailable = R.converge(R.length, [R.uniq]);
            if (uniqNumbersAvailable(num1Reduced) === 1) {
                unique3Numbers.push(element);
            }
        }
    });

    //num2 split
    numbersSplit(num2).forEach(function (element, i) {
        const reducedSplit = R.slice(i, i + 2);
        const num2Reduced = reducedSplit(numbersSplit(num2));
        if (num2Reduced.length > 1) {
            const uniqNumbersAvailable = R.converge(R.length, [R.uniq]);
            if (uniqNumbersAvailable(num2Reduced) === 1) {
                unique2Numbers.push(element);
            }
        }
    });
    if (R.length(R.intersection(unique3Numbers, unique2Numbers)) >= 1) {
        return 1;
    }
    return 0;
}


console.log(tripledouble(451999277, 41177722899))