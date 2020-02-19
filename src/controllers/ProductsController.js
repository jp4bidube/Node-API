const Product = require("../models/Products");

module.exports = {
  async listAll(req, res) {
    const { page = 0, pageSize = 5 } = req.query;
    const products = await Product.findAndCountAll({
      limit: parseInt(pageSize),
      offset: page * pageSize
    });

    return res.json(products);
  },

  async store(req, res) {
    const { name, description, quantity, value } = req.body;

    const product = await Product.create({
      name,
      description,
      quantity,
      value
    });

    return res.json(product);
  },
  async show(req, res) {
    const product = await Product.findByPk(req.params.id);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByPk(req.params.id);
    product.update({
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      value: req.body.value
    });
    return res.json(product);
  },

  async delete(req, res) {
    const product = await Product.findByPk(req.params.id);
    let name = product.name;
    product.destroy();
    return res.send(`O produto ${name} foi removido com sucesso!`);
  }
};
