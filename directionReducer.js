//dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]
function dirReduc(arr) {
    const R = require('ramda');
    let result = [];
    const contradictions = [{ "NORTH": "SOUTH" }, { "SOUTH": "NORTH" }, { "WEST": "EAST" }, { "EAST": "WEST" }];

    R.forEach((direction) => {
        R.map((cont) => {
            const dirHas = R.contains(direction, R.keys(cont));
            if (dirHas) {
                if (R.equals(R.takeLast(1, result), R.values(cont))) {
                    result = R.dropLast(1, result);
                } else {
                    result.push(direction);
                }
            }
        }, contradictions)
    }, arr);
    return result;
}

console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']));