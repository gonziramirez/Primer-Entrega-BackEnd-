const products = require('../products/controller.products')
const cart = require('../cart/controller.cart')

const routes = (app) => {
  app.use('/api/products', products)
  app.use('/api/cart', cart)
}

module.exports = routes