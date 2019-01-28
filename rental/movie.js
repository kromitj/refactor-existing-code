class Movie {
	constructor(title=null, priceCode=null) {
       this.title = title
       this.priceCode = priceCode
    }
}
Movie.prototype.CHILDRENS = 2
Movie.prototype.REGULAR = 0
Movie.prototype.NEW_RELEASE = 1



module.exports = Movie






