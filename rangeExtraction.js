function solution(list) {
	const R = require('ramda');
	let arr = [], resArr = [];
	const checkFor2OrLessElements = element => {
		if (R.length(resArr) < 3) {
			const takeWhileNotNull = x => x != null;
			const takeResElements = R.takeWhile(takeWhileNotNull, resArr);
			arr.push(takeResElements);
			resArr = [];
			if (element) {
				resArr.push(element);
			}
		}
	}
	const checkFor3OrMoreElements = element => {
		if (R.length(resArr) > 2) {
			const firstElementInRE = R.take(1, resArr);
			const lastElementInRE = R.takeLast(1, resArr);
			arr.push(firstElementInRE + "-" + lastElementInRE);
			resArr = [];
			if (element) {
				resArr.push(element);
			}
		}
	}
	const iterateThroughList = (iter) => {
		iter.forEach((element, index) => {
			if (resArr.length == 0) {
				resArr.push(element);
			}
			else {
				const lastElement = R.takeLast(1, resArr);
				if (R.inc(lastElement) == element) {
					resArr.push(element);
				} else {
					R.juxt([checkFor2OrLessElements, checkFor3OrMoreElements])(element);
				}
			}
		})
	};
	const main = R.compose(checkFor2OrLessElements, checkFor3OrMoreElements, iterateThroughList)(list);
	return arr.join(',');
}
console.log(solution([-8, -7, -6, -3, -2, -1, 0, 1, 3, 4, 6, 8, 9, 10]));