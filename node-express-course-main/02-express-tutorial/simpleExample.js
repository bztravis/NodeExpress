const http = require('http')

const server = http.createServer((req, res) => {    // envoked every time the user requests our server
    // console.log('user hit the server')

    const url = req.url

    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>content</h1>')
        res.end()
        console.log(req.method)
        console.log(req.url)
    }
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else {
        res.writeHead(404)
        res.end('<h1>Resource not found.</h1>')
    }
})

server.listen(8080)