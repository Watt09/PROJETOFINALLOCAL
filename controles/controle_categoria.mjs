import Categoria from "../modelos/categoria.mjs";

async function novo(req, res) {
    const criado = await Categoria.create({

        nome: req.body.nome,
        descricao: req.body.descricao,
        
    });
    res.json(criado);
}



async function todos(req, res) {

    const todos = await Categoria.findAll({});

    res.json(todos);


}

async function um(req, res) {

    const um = await Categoria.findOne({

        where: { id: req.params.id }

    });

    res.json(um);
}
 
async function altera(req, res) {

    const altera = await Categoria.findOne({ where: { id: req.body.id } });

    altera.nome = req.body.nome;
    altera.descricao = req.body.descricao;
    
    const alterado = await altera.save();
    res.json(alterado);
}



async function exclui(req, res) {
    const exclui = await Categoria.findOne({ where: { id: req.body.id } });

    await exclui.destroy();
    res.json(exclui);
}

export { novo, todos, altera, exclui, um };
