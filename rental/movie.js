const RegularPrice = require('./regularPrice.js')
const ChildrensPrice = require('./childrensPrice.js')
const NewReleasePrice = require('./newreleasePrice.js')

class Movie {
	constructor(title=null, priceCode=null) {
       this.title = title
       this.setPriceCode(priceCode)
    }
    getPriceCode() {
    	return this.price.getPriceCode()
    }
    setPriceCode(arg) {
    	switch (arg) {
				case 0:
					this.price = new RegularPrice(); 
					break;
				case 1:
					this.price = new NewReleasePrice(); 
					break;
				case 2:
					this.price = new ChildrensPrice(); 
					break;
				default:
					
				}
    }
    getCharge(daysRented) {
    	return this.price.getCharge(daysRented)
    }

    getFrequentRenterPoints(daysRented) {
    	return this.price.getFrequentRenterPoints(daysRented)
    	
    }
}
Movie.prototype.REGULAR = 0
Movie.prototype.NEW_RELEASE = 1
Movie.prototype.CHILDRENS = 2



module.exports = Movie






