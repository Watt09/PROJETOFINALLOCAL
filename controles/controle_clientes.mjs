import Cliente from "../modelos/cliente.mjs";

async function novo(req, res) {
    const criado = await Cliente.create({
        primeiro_nome: req.body.primeiro_nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        email: req.body.email,
        nascimento: req.body.nascimento,

    });
    res.json(criado);
}

async function todos(req, res) {
    const todos = await Cliente.findAll();
    res.json(todos);
}

async function um(req, res){
    const um = await Cliente.findOne({
        where: {id: req.params.id}
    });

    res.json(um);
}

async function altera(req, res) {
    const cli = await Cliente.findOne({
        where: { id: req.body.id }
    });

        cli.primeiro_nome = req.body.primeiro_nome,
        cli.sobrenome = req.body.sobrenome,
        cli.cpf = req.body.cpf,
        cli.email = req.body.email,
        cli.nascimento = req.body.nascimento,

    await cli.save();
    res.json(cli);
}


async function exclui(req, res) {
    const cli = await Cliente.findOne({
        where: { id: req.body.id }
    });
    await cli.destroy();
    res.json(cli);
}

export { novo, todos, altera, exclui, um };