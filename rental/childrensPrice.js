const Price = require('./price.js')

class ChildrendsPrice extends Price {
	constructor() {
		super()
	}
	getPriceCode() {
		return 2
	}
	getCharge(daysRented) {
		console.log("yooooooooo")
		let result = 1.5
		if (daysRented > 3) {
			result += (daysRented - 3) * 1.5
		}
		return result
 	}
}

module.exports = ChildrendsPrice