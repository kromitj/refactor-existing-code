class Customer {
	constructor(name=null) {
  	 this.name = name
  	 this.rentals = []
	}
	getName() {
		return this.name
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
		this.rentals
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
	htmlStatement() {
		let result = `<H1>Rentals for <EM>${this.getName()}</EM></H1><P>\n`
		this.rentals.forEach((rental) => {
			result += `\t ${rental.movie.title}:  ${rental.charge} <br>\n`
		})
		result += `<p>You owe: <em>${this.getTotalCharge()}</em><p>\n`
		result += `On this rental you earned <em>${this.getTotalFrequentRenterPoints()}</em> frequent renter points</p>`
		console.log(result)
		return result
	}
	
}

module.exports = Customer