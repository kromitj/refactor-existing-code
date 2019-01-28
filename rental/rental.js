class Rental {
	constructor(movie=null, daysRented=0) {
		this.movie = movie 
		this.daysRented = daysRented
		this.charge = this.getCharge()
	}

	getCharge() {
		let result = 0
		if (this.movie.priceCode === 0) {
			result += 2
			if (this.daysRented > 2) 
			{
				result += (this.daysRented - 2) * 1.5
			}
		} else if (this.movie.priceCode === 1) {
			result += this.daysRented*3
		} else if (this.movie.priceCode ===2) {
			result += 1.5
			if (this.daysRented > 3) { 
				result += (this.daysRented - 3) * 1.5
			}
		}
		return result
	}
	getFrequentRenterPoints() {
			if (this.movie.priceCode === 1 && this.daysRented > 1) {
				return 2
			}  else {
				return 1
			}
	}
}

module.exports = Rental