const R = require('ramda');
function permutations(str) {
    return R.uniq(Array.from(permute(str.split(''))).map(perm => perm.join('')));
}

function* permute(a, n = R.length(a)) {
    if (n <= 1) {console.log('AA ', a); yield a.slice();}
    else for (let i = 0; i < n; i++) {
        console.log('I ', i, n, a);
        yield* permute(a, n - 1);
        console.log('I N', i, n);
        const j = n % 2 ? 0 : i;
        console.log('J ', j, n, i);
        [a[n - 1], a[j]] = [a[j], a[n - 1]];
    }
}
console.log(permutations("abc"));