class Rental {
	constructor(movie=null, daysRented=0) {
		this.movie = movie 
		this.daysRented = daysRented
		this.charge = this.getCharge()
	}

	getCharge() {
		return this.movie.getCharge(this.daysRented)
	}
	getFrequentRenterPoints() {
			return this.movie.getFrequentRenterPoints(this.daysRented)
	}
}

module.exports = Rental