// doesn't have node modules needed
// originally from node-express-course-main/02-express-tutorial/app.js


const express = require('express')
const app = express()

const {products, people} = require('./data')
const logger = require('./logger')

// middleware:
// req >> middlewar >> res

// into logger.js now
/* const logger = (req, res, next) => {    // express supplies these three params for us!
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // problem will be in the browser, you have to supply either a next middleware or terminate with a res.send()
    next()
} */

// app.use(logger)


app.get('/usesLogger', logger, (req, res) => {
    res.status(200).send('<h1 style="font-family: sans-serif">Logger test!</h1>')
})

app.use('/api', logger)
// ANY route within /api will run the logger module

app.get('/', (req, res) => {
    // logger() // can't call this function because it needs access to the req object

    res.status(200).send('<h1 style="font-family: sans-serif">Home page!</h1>')
})

app.use(logger) // express is based on order

app.get('/about', (req, res) => {
    res.status(200).send('<h1 style="font-family: sans-serif">About!</h1>')
})

app.get('/api/products', (req, res) => {
    // logger() // can't call this function because it needs access to the req object

    res.status(200).send('<h1 style="font-family: sans-serif">Products!</h1>')
})

app.get('/api/items', (req, res) => {
    res.status(200).send('<h1 style="font-family: sans-serif">Items!</h1>')
})

app.listen(8080)