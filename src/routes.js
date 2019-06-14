const express = require('express');
const routes = express.Router();
const ProdutoController = require('./controllers/ProdutoController');

routes.get("/produtos", ProdutoController.retornarProdutos);
routes.get("/produtos/:id", ProdutoController.retornarProdutoPeloId);
routes.post("/produtos", ProdutoController.adicionarProduto);
routes.put("/produtos/editar/:id", ProdutoController.update);
routes.delete("/produtos/delete/:id", ProdutoController.deletarProduto);

module.exports = routes;