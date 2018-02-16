function listSquared(m, n) {
	const R = require('ramda');
	let output = [];
	const divisorCache = {};
	let sumOfSquareOfDivisor = 0
	for (let iter = m; iter <= n; iter++) {
		const sqrtOfIter = R.compose(Math.floor, Math.sqrt)(iter);
		for (let innerIter = 1; innerIter <= sqrtOfIter; innerIter++) {
			if (R.modulo(iter, innerIter) == 0) {
				let existingDivisorValues = divisorCache[iter];
				if (!existingDivisorValues) {
					if (iter / innerIter == innerIter) {
						divisorCache[iter] = [innerIter];
					} else {
						divisorCache[iter] = [innerIter, R.divide(iter, innerIter)];
					}
				}
				else {
					if (iter / innerIter == innerIter) {
						divisorCache[iter] = R.append([innerIter], existingDivisorValues);
					}
					else {
						divisorCache[iter] = R.append([innerIter, R.divide(iter, innerIter)], existingDivisorValues);
					}
				}
			}
		}
		const square = x => x * x;
		const sumOfDivisors = R.reduce(R.add, 0);
		sumOfSquareOfDivisor = R.compose(sumOfDivisors, R.chain(square), R.flatten, R.values)(divisorCache[iter]);
		const squareRootOfFinalSumOfSquaredDivisors = Math.sqrt(sumOfSquareOfDivisor);
		if(squareRootOfFinalSumOfSquaredDivisors == Math.floor(squareRootOfFinalSumOfSquaredDivisors))
			output = R.append([iter, sumOfSquareOfDivisor], output);
	}
	return output;
}


console.log(listSquared(42, 250));