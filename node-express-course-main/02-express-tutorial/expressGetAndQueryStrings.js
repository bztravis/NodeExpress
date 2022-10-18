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

// returns only the selected data from the file!
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

// route parameter: essential for routing
// http://localhost:8080/api/products/2
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
// optional
// http://localhost:8080/api/v1/query?search=a&limit=2
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query

    let sortedProducts =  [...products] // ... spread operator so compound type isn't assigned by reference
    // let sortedProducts = products
    // console.log(sortedProducts) 

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).send("No products matched your search.") // need to explicitly return so you don't continue through logic and respond twice to a single request
        // return res.status(200).json({success: true, data: []})   // up to you
    }
    res.status(200).send(sortedProducts)
})


app.listen(8080, () => {
    console.log('App is listening on port 8080...')
})  