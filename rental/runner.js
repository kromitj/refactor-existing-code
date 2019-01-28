const Movie =	require('./movie.js')
const Rental = require('./rental.js')
const Customer = require('./customer.js')




let a = new Movie("blah", 1)
let b = new Rental(a, 3)
let c = new Customer("mitch")
c.addRental(b)
c.statement()
c.htmlStatement()