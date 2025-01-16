import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Categoria = conexao.define('Categoria',{
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    
});

export default Categoria;