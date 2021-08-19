const path = require('path')
const Router = require('express').Router()
// const apiMiddleware = require('../middlewares/apiProduct')
//to apply middleware on all route
// Router.use(apiMiddleware)
Router.get('/', (req, res) => {
  res.render('index', { title: 'my Home' })
})
Router.get('/download', (req, res) => {
  res.download(path.resolve(__dirname) + '/../views/about.ejs')
})

Router.get('/about', (req, res) => {
  res.render('about', { title: 'my About' })
})
Router.get('/contact', (req, res) => {
  res.render('contact', { title: 'contact page' })
})

// Router.get('/api/products', apiMiddleware, (req, res) => {
//   res.json([
//     { name: 'naaz', class: 11 },
//     { name: 'adnan', class: 4 },
//   ])
// })

module.exports = Router
