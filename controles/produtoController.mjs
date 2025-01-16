import tbProduto from "../modelos/produtoModel.mjs";
import {backupProduto} from "../controles/backupProdutoController.mjs";

async function novo(req, res) {
    const criado = await tbProduto.create({
        nome: req.body.nome,
        categoria: req.body.categoria,
        preco: req.body.preco,
        descricao: req.body.descricao
    });
    res.json(criado);
}

async function todos(req, res) {
    const todos = await tbProduto.findAll();
    res.json(todos);
}

async function um(req, res){
    const um = await tbProduto.findOne({
        where: {id: req.params.id }
    });
    res.json(um);
}

async function altera(req, res) {
    const pro = await tbProduto.findOne({
        where: { id: req.body.id }
    });
    pro.nome = req.body.nome;
    pro.categoria = req.body.categoria;
    pro.preco = req.body.preco;
    pro.descricao = req.body.descricao;
    await pro.save();
    res.json(pro);
}

 async function exclui(req, res) {
    try {
      const produto = await tbProduto.findOne({
        where: { id: req.body.id },
      });
  
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }
      await backupProduto(produto);
      await produto.destroy();
  
      res.json({ message: 'Produto excluído e backup realizado com sucesso.', produto });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


export { novo, todos, altera, exclui, um };