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
	amountFor(aRental) {
		let result = 0
		if (aRental.movie.priceCode === 0) {
			result += 2
			if (aRental.daysRented > 2) 
			{
				result += (aRental.daysRented - 2) * 1.5
			}
		} else if (aRental.movie.priceCode === 1) {
			result += aRental.daysRented*3
		} else if (aRental.movie.priceCode ===2) {
			result += 1.5
			if (aRental.daysRented > 3) { 
				result += (aRental.daysRented - 3) * 1.5
			}
		}
		return result
	}
}

module.exports = Customer