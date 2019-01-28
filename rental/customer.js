class Customer {
	constructor(name=null) {
  	 this.name = name
  	 this.rentals = []
	}
	addRental(rental) {
		this.rentals.push(rental)
	}
	statement() {
		let frequentRenterPoints = 0
		let result = (`Rental Record  for ${this.name} \n`)
		var totalAmount = 0
		this.rentals.forEach((rental) => {
			totalAmount += rental.charge
			frequentRenterPoints += rental.getFrequentRenterPoints()
			result += `\t ${rental.movie.title} \t ${rental.charge} \n`

		})
		result += `Amount Owed is ${totalAmount} \n`
			result += `You Earned: ${frequentRenterPoints} frequent rental points \n`
		console.log(result)
	}	
	
}

module.exports = Customer