const express = require('express')
const app = express()

const {products, people} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

// returns all data from the file
// app.get('/api/products', (req, res) => {
//     res.send(products)
// })

// returns only the selected ata from the file!
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

// using a bazooka for a cockroach
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => {
//         return product.id === 1
//     })
//     res.json(singleProduct)
// })

// route parameter
app.get('/api/products/:productID', (req, res) => {
    console.log(req.params)
    const {productID} = req.params

    singleProduct = products.find((product) => {
        return product.id === Number(productID)
    })

    if (!singleProduct) {
        return res.status(404).send('Product does not exist.')
    }

    res.json(singleProduct)
})

// multiple route parameters
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    const {productID, reviewID} = req.params
    res.send(productID + reviewID)
})


// query strings / url parameters
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    let sortedProducts = [...products]
    console.log(sortedProducts)
    res.send(sortedProducts)
})


app.listen(8080, () => {
    console.log('App is listening on port 8080...')
})