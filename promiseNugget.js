// point of promises is to avoid callback hell, write async code in sync fashion
// promise is an object that will return a vlue in the future

// states: pending, rejected, fulfilled it's a one way street from pending to one of the other two

// call the parameters whatever you want, but convention is that, these are functions themselves
const promise = new Promise((resolve, reject) => {
    resolve()   // can add parameter to deliever value to the app
})

console.log(promise);


const promise2 = new Promise((resolve, reject) => {
    resolve('hello world')   // can add parameter to deliever value to the app
})

console.log(promise2);
// console.log(promise2.value);    // this doesn't work (undefined), will use .then() for resolve and .catch() for reject()
promise2.then((data) => {   // call parameter whatever you like // this function is another callback function
    console.log(data);
})


const promise3 = new Promise((resolve, reject) => {
    reject('there was an error')   // can add parameter to deliever value to the app
})

console.log(promise3);
promise3.catch((err) => {
    console.log(err);
})