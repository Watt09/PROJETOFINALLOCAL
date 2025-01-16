import { getLista, novo, remove, edita, buscaUm } from "./acessa_dados_funcionarios.js";

//Funções
async function salvar() {
    const iptprimeiro_nome = document.getElementById('primeiro_nome');
    const iptsobrenome = document.getElementById('sobrenome');
    const iptcpf = document.getElementById('cpf');
    const iptemail = document.getElementById('email');
    const iptnascimento = document.getElementById('nascimento');
    const iptsalario = document.getElementById('salario');


    const obj = {
        "primeiro_nome": iptprimeiro_nome.value,
        "sobrenome": iptsobrenome.value,  
        "cpf": iptcpf.value,
        "email": iptemail.value,
        "nascimento": iptnascimento.value,
        "salario": iptsalario.value
  
    }
    await novo(obj);
    document.forms[0].reset();
    DesenhaTabela();
};

async function editar() {
    const iptid = document.getElementById('id');
    const iptprimeiro_nome = document.getElementById('primeiro_nome');
    const iptsobrenome = document.getElementById('sobrenome');
    const iptcpf = document.getElementById('cpf');
    const iptemail = document.getElementById('email');
    const iptnascimento = document.getElementById('nascimento');
    const iptsalario = document.getElementById('salario');


    const objFun = {
        "id": iptid.value,
        "primeiro_nome": iptprimeiro_nome.value,
        "sobrenome": iptsobrenome.value,
        "cpf": iptcpf.value,
        "email": iptemail.value,
        "nascimento": iptnascimento.value,
        "salario": iptsalario.value,

    };

    await edita(objFun);
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
    document.getElementById('form_Funcionario').reset();
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
    document.getElementById('primeiro_nome').value = cliente.primeiro_nome;
    document.getElementById('sobrenome').value = cliente.sobrenome;
    document.getElementById('cpf').value = cliente.cpf;
    document.getElementById('email').value = cliente.email;
    document.getElementById('nascimento').value = cliente.nascimento;
    document.getElementById('salario').value = cliente.salario;

}

async function DesenhaTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getLista();

    let totalFP = 0;

    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td7 = document.createElement('td');
        const btExc = document.createElement('button');
        const btEdi = document.createElement('button');

        btEdi.innerText = 'Editar';
        btEdi.setAttribute('data-id', dados[i].id);
        btEdi.addEventListener('click', ManipulaEditar);

        btExc.innerText = 'Excluir';
        btExc.setAttribute('data-id', dados[i].id);
        btExc.addEventListener('click', ManipulaExcluir)
        


        td1.innerText = dados[i].primeiro_nome;
        td2.innerText = dados[i].sobrenome;
        td3.innerText = dados[i].cpf;
        td4.innerText = dados[i].email;
        td5.innerText = dados[i].nascimento;
        td7.innerText = dados[i].salario;
        td6.append(btExc, btEdi);
        tr.append(td1, td2, td3, td4, td5, td7, td6);


        tbody.append(tr);

        totalFP += parseFloat(dados[i].salario);

    }
        
        const trTotal = document.createElement('tr');
    trTotal.style.fontWeight = 'bold';

        const tdTotalMes = document.createElement('td');
    tdTotalMes.innerText = 'Folha de Pagamento';

        const tdTotalFP = document.createElement('td');
    tdTotalFP.innerText = totalFP.toFixed(2);
    tdTotalFP.style.color = 'red';

    const tdTotalAcoes = document.createElement('td'); // Coluna de ações vazia para a linha de total

    trTotal.append(
        tdTotalMes,
        tdTotalFP,
        tdTotalAcoes,
    );

    tbody.append(trTotal);
}

//Viculações
const btsSalvar = document.getElementById('btSalvar');
btsSalvar.addEventListener('click', ManipulaSalvar);


window.addEventListener('load', DesenhaTabela);