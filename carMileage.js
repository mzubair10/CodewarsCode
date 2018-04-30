const R = require('ramda');
function isInteresting(number, awesomePhrases) {
	let numbersSplit = R.split('', R.toString(number));
	if (number <= 97)
		return 0;
	const getInterestingNumber = R.applySpec({
		doDigitsMatchAnyOfTheAwesomePhrase: doDigitsMatchAnyOfTheAwesomePhrase,
		areDigitsPalindrome: areDigitsPalindrome,
		areDigitsSequentialDec: areDigitsSequentialDec,
		areDigitsSequentialInc: areDigitsSequentialInc,
		isAnyDigitFollowedByAllZero: isAnyDigitFollowedByAllZero,
		isAllDigitTheSameNumber: isAllDigitTheSameNumber
	});
	const isInteresting = R.values(getInterestingNumber(numbersSplit, awesomePhrases));
	return Math.max(...isInteresting);
}
const equals0 = R.equals('0');
const getHeadDigit = num => R.compose(R.join(''), R.flatten, R.drop(1), R.splitAt(1))(num);
const isNumber3OrMoreDigits = numbersSplit => R.length(numbersSplit) > 2;
const checkForZeroesN = num => getHeadDigit(num);
const isAnyDigitFollowedByAllZero = (numbersSplit) => {
	if (Number(R.join('', numbersSplit)) >= 100) {
		let allDigitsExceptFirst = getHeadDigit(numbersSplit);

		if (R.all(equals0, allDigitsExceptFirst)) {
			return 2;
		}
	}
	let counter = 0;
	while (counter < 2 && (Number(R.join('', numbersSplit)) + 2) >= 100) {
		counter++;
		let inc = Number(R.join('', numbersSplit)) + counter;
		allDigitsExceptFirst = getHeadDigit(R.split('', R.toString(inc)));
		if (R.all(equals0, allDigitsExceptFirst)) {
			return 1;
		}
	}
	return 0;
};
const isAllDigitTheSameNumber = (numbersSplit) => {
	const checkForUniqueness = num => R.compose(R.equals(1), R.length, R.uniq)(num);
	if (Number(R.join('', numbersSplit)) >= 100) {
		if (checkForUniqueness(numbersSplit))
			return 2;
	}
	let counter = 0;
	while (counter < 2 && (Number(R.join('', numbersSplit)) + 2) >= 100) {
		counter++;
		let inc = Number(R.join('', numbersSplit)) + counter;
		if (checkForUniqueness(R.split('', R.toString(inc))))
			return 1;
	}
	return 0;
}
const areDigitsSequentialInc = (numbersSplit) => {
	const areDigitsInc = splitNumbersInArray => splitNumbersInArray.every((number, i) => {
		if (splitNumbersInArray[i + 1] && splitNumbersInArray[i + 1] != 0) {
			return (splitNumbersInArray[i + 1] - splitNumbersInArray[i] == 1)
		}
		else if (splitNumbersInArray[i - 1] != 9 && number == 0) {
			return false;
		}
		return true;
	});
	if (Number(R.join('', numbersSplit)) >= 100) {
		if (areDigitsInc(numbersSplit))
			return 2;
	}
	let counter = 0;
	while (counter < 2 && (Number(R.join('', numbersSplit)) + 2) >= 100) {
		counter++;
		let inc = Number(R.join('', numbersSplit)) + counter;
		if (areDigitsInc(R.split('', R.toString(inc))))
			return 1;
	}
	return 0;
}
const areDigitsSequentialDec = (numbersSplit) => {
	const areDigitsDec = splitNumbersInArray => splitNumbersInArray.every((number, i) => {
		if (splitNumbersInArray[i + 1] && splitNumbersInArray[i + 1] != 0) {
			return (splitNumbersInArray[i] - splitNumbersInArray[i + 1] == 1)
		}
		else if (splitNumbersInArray[i - 1] != 1 && number == 0) {
			return false;
		}
		return true;
	});
	if (Number(R.join('', numbersSplit)) >= 100) {
		if (areDigitsDec(numbersSplit))
			return 2;
	}
	let counter = 0;
	while (counter < 2 && (Number(R.join('', numbersSplit)) + 2) >= 100) {
		counter++;
		let inc = Number(R.join('', numbersSplit)) + counter;
		if (areDigitsDec(R.split('', R.toString(inc))))
			return 1;
	}
	return 0;
}
const areDigitsPalindrome = (numbersSplit) => {
	const checkForPalindrome = splitNumbersInArray => R.equals(splitNumbersInArray, R.reverse(splitNumbersInArray));
	if (Number(R.join('', numbersSplit)) >= 100) {
		if (checkForPalindrome(numbersSplit))
			return 2;
	}
	let counter = 0;
	while (counter < 2 && (Number(R.join('', numbersSplit)) + 2) >= 100) {
		counter++;
		let inc = Number(R.join('', numbersSplit)) + counter;
		if (checkForPalindrome(R.split('', R.toString(inc))))
			return 1;
	}
	return 0;
}
const doDigitsMatchAnyOfTheAwesomePhrase = (numbersSplit, awesomePhrases) => {
	const checkForMatchInAwesomePhrase = splitNumbersInArray => R.length(R.intersection([Number(R.join('', splitNumbersInArray))], awesomePhrases)) > 0;
	if (checkForMatchInAwesomePhrase(numbersSplit))
		return 2;
	let counter = 0;
	while (counter < 2 && (Number(R.join('', numbersSplit)) + 2) >= 100) {
		counter++;
		let inc = Number(R.join('', numbersSplit)) + counter;
		if (checkForMatchInAwesomePhrase(R.split('', R.toString(inc))))
			return 1;
	}
	return 0;
}
console.log(isInteresting(256, [1337, 256, 376006]));