import { getLista, novo, remove, edita, buscaUm } from "./acessa_dados_categoria.js";

//Funções
async function salvar() {
    const iptnome = document.getElementById('nome');
    const iptdescricao = document.getElementById('descricao');


    const obj = {
        "nome": iptnome.value,
        "descricao": iptdescricao.value
  
    }
    await novo(obj);
    document.forms[0].reset();
    DesenhaTabela();
};

async function editar() {
    const iptid = document.getElementById('id');
    const iptnome = document.getElementById('nome');
    const iptdescricao = document.getElementById('descricao');


    const obj = {
        "id": iptid.value,
        "nome": iptnome.value,
        "descricao": iptdescricao.value,

    };

    await edita(obj);
    document.forms[0].reset();
    DesenhaTabela();
}

function ManipulaSalvar(event) {
    event.preventDefault();
    if (document.getElementById('id').value) {
        editar();
    } else {
        salvar();
    }
    document.getElementById('form_Categoria').reset();
    document.getElementById('id').value = "";
}


async function ManipulaExcluir(event) {
    const id = event.target.getAttribute('data-id');
    await remove(id);
    DesenhaTabela();
}

async function ManipulaEditar(event) {
    const id = event.target.getAttribute('data-id');
    const cliente = await buscaUm(id);
    document.getElementById('id').value = cliente.id;
    document.getElementById('nome').value = cliente.nome;
    document.getElementById('descricao').value = cliente.descricao;

}

async function DesenhaTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getLista();
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');
        const td2 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const btExc = document.createElement('button');
        const btEdi = document.createElement('button');

        btEdi.innerText = 'Editar';
        btEdi.setAttribute('data-id', dados[i].id);
        btEdi.addEventListener('click', ManipulaEditar);

        btExc.innerText = 'Excluir';
        btExc.setAttribute('data-id', dados[i].id);
        btExc.addEventListener('click', ManipulaExcluir)


        td2.innerText = dados[i].nome;
        td5.innerText = dados[i].descricao;
        td6.append(btExc, btEdi);
        tr.append(td2, td5, td6);
        tbody.append(tr);
    }
}

//Viculações
const btsSalvar = document.getElementById('btSalvar');
btsSalvar.addEventListener('click', ManipulaSalvar);


window.addEventListener('load', DesenhaTabela);