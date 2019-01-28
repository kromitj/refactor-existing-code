class Customer {
	constructor(name=null) {
  	 this.name = name
  	 this.rentals = []
	}
	addRental(rental) {
		this.rentals.push(rental)
	}
	getTotalCharge() {
		let result = 0
		this.rentals.forEach((rental) => {
			result += rental.charge
		})
		return result
	}
	getTotalFrequentRenterPoints() {
		let result = 0
		this.rentals.forEach((rental) => {
			result += rental.getFrequentRenterPoints()
		})
		return result
	}
	statement() {
		let frequentRenterPoints = 0
		let result = (`Rental Record  for ${this.name} \n`)		
		this.rentals.forEach((rental) => {
			result += `\t ${rental.movie.title} \t ${rental.charge} \n`
		})
		result += `Amount Owed is ${this.getTotalCharge()} \n`
		result += `You Earned: ${this.getTotalFrequentRenterPoints()} frequent rental points \n`
		console.log(result)
		return result
	}	
	
}

module.exports = Customer