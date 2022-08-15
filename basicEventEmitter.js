const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data recieved: ${name} ${id}`)
})
customEmitter.on('response', () => {
    console.log(`Some other logic here`)
})

customEmitter.emit('response', 'john', 34)  // passing in event name as well as additional parameters
// order of listen THEN emit matters!

console.log("actually does happen last");