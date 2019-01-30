const Price = require('./price.js')
const Movie = require('./movie.js')

class RegularPrice extends Price {
	constructor() {
		super()
	}
	getPriceCode() {
		return 0
	}
	getCharge(daysRented) {
		let result = 2
		if (daysRented > 2) {
			result += (daysRented -2) *1.5
		}
		return result
	}
}

module.exports = RegularPrice