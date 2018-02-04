function nbYear(p0, percent, aug, p) {
    const R = require('ramda');
    let adjustedPopulation = p0;
    let numberOfCycles = 0;
    while (adjustedPopulation < p) {
        numberOfCycles = R.add(numberOfCycles, 1);
        adjustedPopulation = R.add(R.add(adjustedPopulation, R.multiply(adjustedPopulation, R.divide(percent, 100))), aug);
    }
    return numberOfCycles;
}