import { DataTypes } from 'sequelize';
import conexao from '../database/mysql.mjs';

const tbClienteAuditoria = conexao.define(
  'ClienteAuditoria',
  {
    cod: DataTypes.INTEGER,
    primeiro_nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    nascimento: DataTypes.STRING,
    tipo_operacao: DataTypes.STRING,
  },
  { timestamps: false }
);

tbClienteAuditoria.sync();
export default tbClienteAuditoria;
