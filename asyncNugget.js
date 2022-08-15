// async must be in front of the fuction for you to use await
// await waits for promise to be settled
// async functions *always* return a promise

const example = async () => {
    return 'hello there'
}

console.log(example());

async function someFunc() {
    const result = await example()
    console.log(result)
    console.log("after");
}

someFunc()