const Router = require('express').Router()
let products = require('../productsData')
//ADDING PRODUCT Router
Router.get('/products', (req, res) => {
  res.render('products', { title: 'all products' })
})
Router.get('/api/products', (req, res) => {
  res.json(products)
})
Router.post('/api/products', (req, res) => {
  const { name, price } = req.body
  if (!name || !price) {
    return res.status(422).json({ error: 'Invalid parameters' })
  }
  const prod = {
    name,
    price,
    id: new Date().getTime().toString(),
  }
  console.log(prod)
  products.push(prod)
  console.log(req.body)
  res.json(prod)
})
Router.delete('/api/products/:productId', (req, res) => {
  products = products.filter((product) => req.params.productId !== product.id)
  res.json({ status: 'OK' })
})
module.exports = Router
