const Movie =	require('./movie.js')
const Rental = require('./rental.js')
const Customer = require('./customer.js')




let a = new Movie("blah", 1)
let b = new Movie("yo", 0)
let c = new Movie("Wizard of Oz", 2)
let d = new Rental(a, 3)
let e = new Rental(b, 2)
let f = new Rental(c, 1)

let g = new Customer("mitch")

g.addRental(d)
g.addRental(e)
g.addRental(f)
g.statement()
g.htmlStatement()