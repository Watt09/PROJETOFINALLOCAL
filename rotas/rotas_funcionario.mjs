import { Router } from "express";
import { altera, exclui, novo, todos, um } from "../controles/controle_funcionario.mjs";

const rotas_funcionario = Router();

rotas_funcionario.post('/cadastrar', novo);
rotas_funcionario.get('/listar', todos);
rotas_funcionario.put('/editar', altera);
rotas_funcionario.delete('/excluir', exclui);
rotas_funcionario.get('/listar/:id',um);

export default rotas_funcionario;