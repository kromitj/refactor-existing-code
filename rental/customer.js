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
		var thisAmount = 0
		this.rentals.forEach((rental) => {
			let rentalAmount = rental.getCharge()
			thisAmount += rentalAmount 
			result += `\t ${rental.movie.title} \t ${rentalAmount} \n`
			frequentRenterPoints++
			if (rental.movie.priceCode === 1 && rental.daysRented > 1) {
				frequentRenterPoints++
			} 

		})
		result += `Amount Owed is ${thisAmount} \n`
			result += `You Earned: ${frequentRenterPoints} frequent rental points \n`
		console.log(result)
	}	
	
}

module.exports = Customer