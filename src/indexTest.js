function reverse(n) {
	let splitString = n.toString().split('')

	let reverse = splitString.reverse();

	console.log(reverse)

	if (reverse[0] === '0') {
		reverse = reverse.slice(1);
		console.log(reverse);
	} else if (reverse[reverse.length - 1] === '-') {
		reverse = reverse.slice(0, -1)
		console.log(reverse)
	}

	let reversedNumber = reverse.join('')
	return console.log(+reversedNumber)
	// let exclusion;

	// if (reverse[0] === '0') {
	// 	exclusion = reverse.slice(1)
	// }

	// if (exclusion[exclusion.length - 1] === '-') {
	// 	exclusion = exclusion.slice(0, -1)
	// }

	// console.log(exclusion)


	// let reversedString = exclusion.split().join('')
  // return console.log(+reversedString)
}

reverse(-251)