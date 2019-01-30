const Price = require('./price.js')
const Movie = require('./movie.js')

class NewReleasePrice extends Price {
	constructor() {
		super()
	}
	getPriceCode() {
		return 1
	}
	getCharge(daysRented) {
		return (daysRented * 3)
	}
	getFrequentRenterPoints(daysRented) {
		return daysRented > 1 ? 2 : 1
	}
}

module.exports = NewReleasePrice