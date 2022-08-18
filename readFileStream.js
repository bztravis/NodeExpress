const {createReadStream} = require('fs')


// second param is the options object
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf-8'
})


// reading data in chunks of 64kb (by default)
stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (error) => {
    console.log(error)
})