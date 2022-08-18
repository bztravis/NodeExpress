const express = require('express')
const app = express()   // similar to the pure http createServer / server instance
// app is your server instance from the function invoked

// all browsers perform a get request
// every time the user performs a get request on our domain
app.get('/', (req, res) => {
    console.log('User hit the resource.')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

// gives a 404 response if doesn't match by default

app.all('*', (req, res) => {
    res
        .status(404)
        .send('<h1>Resource not found.</h1>')
})

app.listen(8080, () => {
    console.log(`Server is listening on port 8080.`);
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use  "middle work"
// app.listen