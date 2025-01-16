
import tbProdutoBackup from '../modelos/produtoBackupModel.mjs';

export async function backupProduto(produto) {
  try {

    await tbProdutoBackup.create({
      id: produto.id,
      nome: produto.nome,
      categoria: produto.categoria,
      preco: produto.preco,
      descricao: produto.descricao,
      deleted_at: new Date(), 
    });
    console.log('Backup realizado com sucesso.');
  } catch (error) {
    console.error('Erro ao realizar backup:', error.message);
    throw new Error('Não foi possível realizar o backup do produto.');
  }
}
