import urlBackEnd from '../constantes/urls.mjs';

export async function getLista() {
  const resultado = await fetch(urlBackEnd + '/venda/listar');
  const vendas = await resultado.json();
  return vendas;
}

export async function getUm(id) {
  const resultado = await fetch(urlBackEnd + '/venda/listar/' + id);

  const venda = await resultado.json();
  return venda;
}

export async function getUmProduto(produtoId) {
    const resultado = await fetch(urlBackEnd + '/produto/listar/' + produtoId);

    const produto = await resultado.json();
    return produto;
}


export async function novo(obj) {
  const opcoes = {
    method: 'post',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(obj),
  };

  const resultado = await fetch(urlBackEnd + '/venda/cadastrar', opcoes);

  const cadastrado = await resultado.json();

  return cadastrado;
}
export  async function altera(obj) {
    const opcoes = {
        method: 'put',
    
        headers: {
          'Content-Type': 'application/json',
        },
    
        body: JSON.stringify(obj),
      };
    
      const resultado = await fetch(urlBackEnd + '/venda/editar', opcoes);
    
      const editado = await resultado.json();
    
      return editado;
}

export async function exclui(id) {
    const opcoes = {
        method: 'delete',
    
        headers: {
          'Content-Type': 'application/json',
        },
    
        body: JSON.stringify({ id: id }),
      };
    
      const resultado = await fetch(urlBackEnd + '/venda/deletar', opcoes);
    
      const deletado = await resultado.json();
    
      return deletado;
}