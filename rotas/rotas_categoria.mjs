import {Router} from "express";
import { altera, exclui, novo, todos, um } from "../controles/controle_categoria.mjs";
const rotas_categoria=Router();
rotas_categoria.post('/cadastrar', novo);
rotas_categoria.get('/listar', todos);
rotas_categoria.get('/listar/:id', um);
rotas_categoria.delete('/excluir', exclui);
rotas_categoria.put('/editar', altera);

export default rotas_categoria;