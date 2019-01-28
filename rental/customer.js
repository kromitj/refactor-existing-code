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
			let rentalAmount = this.amountFor(rental)
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
	amountFor(rental) {
		let thisAmount = 0
		if (rental.movie.priceCode === 0) {
			thisAmount += 2
			if (rental.daysRented > 2) 
			{
				thisAmount += (rental.daysRented - 2) * 1.5
			}
		} else if (rental.movie.priceCode === 1) {
			thisAmount += rental.daysRented*3
		} else if (rental.movie.priceCode ===2) {
			thisAmount += 1.5
			if (rental.daysRented > 3) { 
				thisAmount += (rental.daysRented - 3) * 1.5
			}
		}
		return thisAmount
	}
}

module.exports = Customer