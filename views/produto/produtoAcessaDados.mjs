import urlBackEnd from "../constantes/urls.mjs";

async function getLista() {
  const resposta = await fetch(urlBackEnd + '/produto/listar');
  const produto = await resposta.json();
  return produto;
}

async function buscaUm(id) {
  const resposta = await fetch(urlBackEnd + '/produto/listar/' + id);
  const produto = await resposta.json();
  return produto;
}

async function novo(obj) {
  const opt = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
  };
  const resposta = await fetch(urlBackEnd + '/produto/cadastrar', opt);
  const cadastrado = await resposta.json();
  return cadastrado;
}

async function altera(obj) {
  const opt = {
      method: 'put',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
  };
  const resposta = await fetch(urlBackEnd + '/produto/editar', opt);
  const editado = await resposta.json();
  return editado;
}

async function exclui(id) {
  const opt = {
      method: 'delete',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
  };
  const resposta = await fetch(urlBackEnd + '/produto/deletar', opt);
  const apagado = await resposta.json();
  return apagado;
}

export { getLista, buscaUm, novo, altera, exclui };