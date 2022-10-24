// originally from middleware.js

// doesn't have node modules needed
// originally from node-express-course-main/02-express-tutorial/app.js


const express = require('express')
const morgan = require('morgan')
const app = express()

const { products, people } = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')

// middleware:
// req >> middlewar >> res

app.use(morgan('tiny'))
// app.use(morgan('default'))

app.use([logger/* , authorize */])
// express built in middleware
app.use(express.static('./public')) // idk tbh



app.get('/usesLogger', logger, (req, res) => {
  res.status(200).send('<h1 style="font-family: sans-serif">Logger test!</h1>')
})

app.get('/', (req, res) => {
  // logger() // can't call this function because it needs access to the req object

  res.status(200).send('<h1 style="font-family: sans-serif">Home page!</h1>')
})

app.get('/about', (req, res) => {
  res.status(200).send('<h1 style="font-family: sans-serif">About!</h1>')
})

app.get('/api/products', authorize, (req, res) => {
  // logger() // can't call this function because it needs access to the req object

  res.status(200).send('<h1 style="font-family: sans-serif">Products!</h1>')
})

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.status(200).send('<h1 style="font-family: sans-serif">Items!</h1>')
})

app.listen(8080)


/**
 * Middleware options:
 * 1. our own custom
 * 2. express js includes some
 * 3. 
 */