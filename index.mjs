import express from 'express';
import conexao from './database/mysql.mjs';
import rotas_clientes from './rotas/rotas_clientes.mjs';
import rotas_categoria from './rotas/rotas_categoria.mjs';
import rotas_funcionario from './rotas/rotas_funcionario.mjs';
import rotas_produtos from './rotas/produtoRouter.mjs';
import rotasRelatorio from './rotas/relatorioRouter.mjs';
import rotasVenda from './rotas/vendaRouter.mjs';
import tbProdutoBackup from './modelos/produtoBackupModel.mjs';
import tbClienteAuditoria from './modelos/clienteAuditoriaModel.mjs';

 
const app = express();
app.use(express.json());

app.use('/clientes', rotas_clientes);
app.use('/produto', rotas_produtos);
app.use('/categoria', rotas_categoria);
app.use('/venda', rotasVenda);
app.use('/funcionarios', rotas_funcionario);
app.use('/relatorio', rotasRelatorio);
app.use(express.static('./views/clientes'));
app.use(express.static('./views/categoria'));
app.use(express.static('./views/produtos'));
app.use(express.static('./views/venda'));
app.use(express.static('./views/funcionario'));
app.use(express.static('./views/relatorio'));
app.use(express.static('./views')); 

async function initializeDatabase() {
    try {
      await tbProdutoBackup.sync({ alter: true });
      console.log('Tabela produtobackup sincronizada com sucesso!');
  
      await tbClienteAuditoria.sync({ alter: true });
      console.log('Tabela clienteauditoria sincronizada com sucesso!');

    } catch (error) {
      console.error('Erro ao sincronizar tabela: ', error);
    }
  }


  initializeDatabase().then(() => {
    app.listen(80, function () {
      console.log('Escutando na porta 80.');
    });
  });

