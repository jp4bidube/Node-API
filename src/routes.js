const express = require("express");
const ProductsController = require("./controllers/ProductsController");

const routes = express.Router();

routes.get("/products", ProductsController.listAll);
routes.get("/products/:id", ProductsController.show);
routes.post("/products", ProductsController.store);
routes.put("/products/:id", ProductsController.update);
routes.delete("/products/:id", ProductsController.delete);

module.exports = routes;
