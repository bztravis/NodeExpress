const http = require('http')
const fs = require('fs')

http
    .createServer((req, res) => {
        const text = fs.readFileSync('./content/big.txt', 'utf-8')
        res.end(text)
    })
    .listen(8080)