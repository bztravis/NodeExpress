const logger = (req, res, next) => {    // express supplies these three params for us!
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // problem will be in the browser, you have to supply either a next middleware or terminate with a res.send()
    next()
}

module.exports = logger