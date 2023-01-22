module.exports = function reverse (n) {
	let splitString = n.toString().split('')

	let reverse = splitString.reverse();

	if (reverse[0] === '0') {
		reverse = reverse.slice(1);
	} else if (reverse[reverse.length - 1] === '-') {
		reverse = reverse.slice(0, -1);
	}

	let reversedNumber = reverse.join('');
	return +reversedNumber
}
