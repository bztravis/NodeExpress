const http = require('http')

const server = http.createServer((req, res) => {
    console.log("request event")
    if (req.url === '/') {
        res.end('Welcome to our homepage.')
    }
    else if (req.url === '/about') {
        res.end('Welcome to our about page.')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>This page doesn't exist.</p>
        <a href="/">home</a>
        `)
    }
})

// listen() is async
server.listen(8080)