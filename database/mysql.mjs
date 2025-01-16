import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    //host: 'dpg-cu03d15ds78s73euaojg-a',
    //port: '5432',
    database: 'bdlpr1',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
})

export default conexao;