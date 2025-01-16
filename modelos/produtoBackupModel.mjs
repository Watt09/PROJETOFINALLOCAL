import { DataTypes } from 'sequelize';
import conexao from '../database/mysql.mjs';

const tbProdutoBackup = conexao.define('ProdutoBackup', {
  nome: DataTypes.STRING,
  categoria: DataTypes.STRING,
  preco: DataTypes.INTEGER,
  descricao: DataTypes.STRING,
  deleted_at: DataTypes.TIME,
},{
  timestamps: false,
});

tbProdutoBackup.sync();
export default tbProdutoBackup;
