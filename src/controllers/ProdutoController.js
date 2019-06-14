//CRUD
const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

module.exports = {
    //req: requisição (contém os parametros em tela)
    //res: resposta
    async retornarProdutos(req,res) {
        //Consulta no banco MongoDB todos o registros da tabela Produto
        const produtos = await Produto.find();

        return res.json(produtos);
    },
    async retornarProdutoPeloId(req,res) {
        //Consulta no banco MongoDB um registro na tabela Produto pelo ID do produto
        const produto = await Produto.findById(req.params.id);

        return res.json(produto);
    },
    async adicionarProduto(req,res) {
        //Adiciona no banco MongoDB um novo registro na tabela Produto
        const produto = await Produto.create(req.body);

        return res.json(produto);
    },
    async update(req,res) {
        //Atualiza no banco MongoDB um registro da tabela Produto
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(produto);
    },
    async deletarProduto(req,res) {
        //Deleta no banco MongoDB um registro da tabela Produto
        const produto = await Produto.findByIdAndDelete(req.params.id);

        return res.send();
    }
};