const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const browser_app = readFileSync('./navbar-app/browser-app.js')
const logo = readFileSync('./navbar-app/logo.svg')


const server = http.createServer((req, res) => {    // envoked every time the user requests our server
    console.log(req.method, req.url)

    const url = req.url

    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if (url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(styles)
        res.end()
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/js'})
        res.write(browser_app)
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(logo)
        res.end()
    }
    else {
        res.writeHead(404)
        res.end('<h1>Resource not found.</h1>')
    }
})

server.listen(8080)