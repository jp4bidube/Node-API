const Product = require('../models/Products')

module.exports ={
  async listAll(req, res) {
    const products = await Product.findAll()

    return res.json(products)
  },

  async store(req, res) {
    const {name, description, quantity, value } = req.body

    const product = await Product.create({ name, description, quantity, value })

    return res.json(product)
  }
}