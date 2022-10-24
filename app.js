// first post flavor

const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan('tiny'))

let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// to parse form data
app.use(express.urlencoded({ extended: false }))

// to parse json data
app.use(express.json())

app.post('/login', (req, res) => {
  // console.log(req.body)

  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send("Please provide credentials")
})

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {

  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please provide name' })
  }
  if (name) {
    return res.status(201).json({ success: true, person: name })
  }
})

app.post('/api/people/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name" })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})


// put method is for update data
// route param is the target to update, req body has content
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id == Number(id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with the id ${id}` })
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
      return person
    }
    else return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

// same as put but not expecting content in body
app.delete('/api/people/:id', (req, res) => {

  const person = people.find((person) => person.id == Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with the id ${req.params.id}` })
  }

  const newPeople = people.filter((person) => 
    person.id !== Number(req.params.id) // remember route param always strings
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(8080)