function countSmileys(arr) {
    const R = require('ramda');
    const eyes = [':', ';'];
    const nose = ['-', '~'];
    const mouth = [')', 'D'];
    const validValues = [':', ';', '-', '~', ')', 'D'];
    let totalSmileyFaces = 0;
    const checkForSmileyConditions = x => {
        const splitValues = R.split('')(x);
        const crossIntersectionEyes = R.length(R.intersection(eyes, splitValues));
        const crossIntersectionMouth = R.length(R.intersection(mouth, splitValues));
        const numberofNose = splitValues.reduce(function (a, e, i) {
            if (nose.indexOf(e) > -1)
                a.push(i);
            return a;
        }, []);
        const invalidCharacterCheck = o => R.indexOf(o, validValues) == -1;
        const invalidCharactersInGivenString = R.map(invalidCharacterCheck, splitValues);
        const isInvalidConditionMet = R.any((char) => char == true, invalidCharactersInGivenString);
        if (isInvalidConditionMet == true) {
            return;
        }
        if (crossIntersectionEyes > 0 && crossIntersectionMouth > 0 && numberofNose.length <= 1) {
            totalSmileyFaces = R.inc(totalSmileyFaces);
        }
    }
    const smileyCount = R.map(checkForSmileyConditions)(arr);
    return totalSmileyFaces;
}


console.log(countSmileys([';~)', ':)', ':-)', ':--)']));