// first post flavor

const express = require('express')
const app = express()

const morgan = require('morgan')

const people = require('./routes/people')
const login = require('./routes/auth')

app.use(morgan('tiny'))

// static assets
app.use(express.static('./methods-public'))

// to parse form data
app.use(express.urlencoded({ extended: false }))

// to parse json data
app.use(express.json())

app.use('/api/people', people)

app.use('/login', login)

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})



app.listen(8080)