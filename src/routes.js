const express = require('express')
const ProductsController = require('./controllers/ProductsController')

const routes = express.Router()

routes.get('/products', ProductsController.listAll)
routes.post('/products', ProductsController.store)

module.exports = routes