const example = async () => {   // I don't think you need the async here because there is no await, it's just returning a value
    // return window.setTimeout(() => "timeout string", 2000)
    return 'hello there'
}

async function someFunc () {
    const result =  await example()
    console.log(result)
    console.log('hello there after')
}

someFunc()

// console.log("hi there")
// console.log(example())
// console.log(someFunc())
// let brianResult = someFunc()
// window.setTimeout(() => console.log("timeout string"), 2000)

// global variables
console.log(__dirname)
console.log(__filename)
console.log(module)
console.log(process)

// similar to Window object's functions
setInterval(() => {
    console.log("hello world repeating")
}, 1000)