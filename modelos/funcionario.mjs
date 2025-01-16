import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Funcionario = conexao.define('Funcionario', {
    primeiro_nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    nascimento: DataTypes.STRING,
    salario: DataTypes.DECIMAL, 

});


export default Funcionario;