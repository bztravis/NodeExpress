const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))
// static assets in public folder

// since index.html is currently a static asset... we can just dump in the public/static folder
// other option is to have server-side rendering (SSR) (using a template engine)
// app.get('/', (req, res) => {
//     console.log(path.resolve(__dirname, './navbar-app/index.html'))
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('The resource you\'re looking for doesn\'t exist.')
})

app.listen(8080, () => {
    console.log('Server is listening on port 8080...')
})