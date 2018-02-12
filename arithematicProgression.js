var findMissing = function (list) {  
    const R = require('ramda');
    let isNegative = false;
    const keyValuePair = {};
    if(list[1] - list[0] < 0){
        isNegative = true;
    }
    list.forEach((el, i) => {
        if(list[i+1]){
            const diff = list[i+1] - list[i];
            keyValuePair[diff] = [i, i+1];
        }        
    });
    let key = 0;
    if(isNegative){
        key = Math.min(...R.keys(keyValuePair));
    }else{
        key = Math.max(...R.keys(keyValuePair));
    }
    const notEqualToKey = x => x != key;
    const takeNormalDifferenceKey = R.filter(notEqualToKey);
    const normalDifference = R.join('', takeNormalDifferenceKey(R.keys(keyValuePair)));
    const lowerKeyValue = R.join('', R.take(1, keyValuePair[key]));
    const missingValue = R.add(list[lowerKeyValue], normalDifference);
    return missingValue;
}


console.log(findMissing([-11, -19, -23]));