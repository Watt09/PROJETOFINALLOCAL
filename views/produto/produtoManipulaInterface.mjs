import { altera, buscaUm, exclui, getLista, novo } from '../produto/produtoAcessaDados.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById('categoria');

  fetch('/categoria/listar')
        .then((response) => response.json())
        .then((categories) => {
            categorySelect.innerHTML = '<option value="">Selecione uma categoria</option>';
            
            categories.forEach((categoria) => {
                const option = document.createElement('option');
                option.value = categoria.nome; 
                option.textContent = categoria.nome; 
                categorySelect.appendChild(option);
            });
        })
        .catch((error) => {
            console.error('Erro ao carregar categorias:', error);
            categorySelect.innerHTML = '<option value="">Erro ao carregar categorias</option>';
        });
      });

async function salvar() {
  const iptNome = document.getElementById('nome');
  const iptCategoria = document.getElementById('categoria');
  const iptPreco = document.getElementById('preco');
  const iptDescricao = document.getElementById('descricao');
  const obj = {
    nome: iptNome.value,
    categoria: iptCategoria.value,
    preco: iptPreco.value,
    descricao: iptDescricao.value,
  };

  console.log(obj)

  await novo(obj);
  document.forms[0].reset();
  desenhaTabela();
}

async function editar() {
  const iptId = document.getElementById('id');
  const iptNome = document.getElementById('nome');
  const iptCategoria = document.getElementById('categoria');
  const iptPreco = document.getElementById('preco');
  const iptDescricao = document.getElementById('descricao');
  const obj = {
    id: iptId.value,
    nome: iptNome.value,
    categoria: iptCategoria.value,
    preco: iptPreco.value,
    descricao: iptDescricao.value,
  };
  await altera(obj);
  document.forms[0].reset();
  desenhaTabela();
}

function decideSalvarEditar(event) {
  // manipulaSalvar
  event.preventDefault();

  if (document.getElementById('id').value) {
    editar();
  } else {
    salvar();
  }

  document.forms[0].reset();
  document.getElementById('id').value = '';
}

async function excluir(event) {
  const id = event.target.getAttribute('data-id');
  await exclui(id);
  desenhaTabela();
}

async function preencheDadosParaEdicao(event) {
  const id = event.target.getAttribute('data-id');
  const produto = await buscaUm(id);
  document.getElementById('id').value = produto.id;
  document.getElementById('nome').value = produto.nome;
  document.getElementById('categoria').value = produto.categoria;
  document.getElementById('preco').value = produto.preco;
  document.getElementById('descricao').value = produto.descricao;
}

async function desenhaTabela() {
  const tbody = document.getElementById('produtoTabela');
  tbody.innerHTML = '';
  const dados = await getLista();
  for (let i = 0; i < dados.length; i++) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');

    const btEd = document.createElement('button');
    const btEx = document.createElement('button');

    btEd.innerText = 'Editar';
    btEd.setAttribute('data-id', dados[i].id);
    btEd.addEventListener('click', preencheDadosParaEdicao);

    btEx.innerText = 'Excluir';
    btEx.setAttribute('data-id', dados[i].id);
    btEx.addEventListener('click', excluir);

    td1.innerText = dados[i].nome;
    td2.innerText = dados[i].categoria;
    td3.innerText = dados[i].preco;
    td4.innerText = dados[i].descricao;
    td5.append(btEd, btEx);

    tr.append(td1, td2, td3, td4, td5);
    tbody.append(tr);
  }
}

// Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);


window.addEventListener('load', desenhaTabela);
