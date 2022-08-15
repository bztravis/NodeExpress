/* const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems); */

/* console.log("first task")
setTimeout(() => {
    console.log('second task')  // timeout is an API that will run at the end of the sync/instant code
})
console.log('final task') */

/* setInterval(() => {
    console.log('hello world')
  }, 2000)
  console.log(`I will run first`)
  // process stays alive unless
  // Kill Process CONTROL + C
  // unexpected error
   */



const {readFile, writeFile} = require('fs').promises
// node module called util that will allow us to not have to manually wrap the async fs functions
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
        
//         })
//     })
// }



// eventually these functions will be provided for us by the libs!
const start = async () => {
    try {
        const second = await readFile('./content/second.txt', 'utf-8')
        const first = await readFile('./content/first.txt', 'utf-8')
        await writeFile('./content/resultWriteFilePromiseOutput.txt', `\nTHIS IS AWESOME: ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    }
    catch (error) {
        console.log(error)
    }
}

start()

// getText('./content/first.txt')
//     .then((result) => {console.log(result)})
//     .catch((err) => {console.log(err)})

// gets messsy once you have multiple reads and stuff (nesting)
/*   readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) {
        return
    } else {
        console.log(data)
    }

  }) */