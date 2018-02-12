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
    let maxKey = 0;
    if(isNegative){
        maxKey = Math.min(...R.keys(keyValuePair));
    }else{
        maxKey = Math.max(...R.keys(keyValuePair));
    }
    const notEqualToMaxKey = x => x != maxKey;
    const takeNormalDifferenceKey = R.filter(notEqualToMaxKey);
    const normalDifference = R.join('', takeNormalDifferenceKey(R.keys(keyValuePair)));
    const lowerKeyValue = R.join('', R.take(1, keyValuePair[maxKey]));
    const missingValue = R.add(list[lowerKeyValue], normalDifference);
    return missingValue;
}


console.log(findMissing([-11, -19, -23]));