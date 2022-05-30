// commonJS, every file is a module by default

// when using your own modules, always start with . or ..
// third party or built in just the name
// we omit the js extension as long as the file name matches
const names = require('./names')
const {bob, joe} = require('./names')
console.log(names)

const sayHi = require('./utils')    // doesn't need to be an object since we exported sayHi as itself (not an object) in utils.js
console.log(sayHi)

sayHi(bob)
sayHi(joe)



const data = require('./alternative-module-flavors')
console.log(data)


require('./mindGrenade')    // requiring will run the code in the file