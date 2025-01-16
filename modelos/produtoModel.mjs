import { DataTypes } from 'sequelize';
import conexao from '../database/mysql.mjs';

const tbProduto = conexao.define('Produto', {
  nome: DataTypes.STRING,
  categoria: DataTypes.STRING,
  preco: DataTypes.STRING,
  descricao: DataTypes.STRING,
});

tbProduto.sync();

export default tbProduto ;