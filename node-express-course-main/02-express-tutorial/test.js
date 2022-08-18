const giveResult = (id) => {
    if (id == 1) {
        console.log('defined')
        return 'string'
    } else if (id == 2) {
        return console.log('After return.')
    }
}

if (giveResult(1)) {
    console.log("True 1");
}
if (!giveResult(2)) {
    console.log("True 2");
}
// can use this ! in order to see if defined...