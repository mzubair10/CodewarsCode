function DNAStrand(dna) {
    const R = require('ramda');
    const knownDnaComplementaries = [
        { 'A': 'T' },
        { 'T': 'A' },
        { 'C': 'G' },
        { 'G': 'C' }
    ];
    const isNotNil = x => R.not(R.isNil(x));
    const isAvailable = x => {
        return knownDnaComplementaries.map((y) => {
            if (R.indexOf(x, R.keys(y)) > -1 ){
                return R.values(y);
            }
        })
    }
    const checkComplementary = R.compose(R.join(''),R.filter(isNotNil), R.flatten, R.map(isAvailable), R.split(''));
    return checkComplementary(dna);
}
console.log(DNAStrand('GTAT'));