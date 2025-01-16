import { Router } from "express";
import {listarRelatorios, todos } from "../controles/relatorioController.mjs";


const rotasRelatorio = Router()
rotasRelatorio.get('/listar', todos);
rotasRelatorio.get('/', listarRelatorios)

export default rotasRelatorio