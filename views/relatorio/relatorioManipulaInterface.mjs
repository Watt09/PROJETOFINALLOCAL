import { getLista } from "../relatorio/relatorioAcessaDados.mjs";

async function desenhaTabela() {
  const td_tbody = document.getElementById('tbFuncionarios');

  td_tbody.innerHTML = '';

  const dados = await getLista();

  for (let i = 0; i < dados.length; i++) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td5 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.innerText = dados[i].id;
    td2.innerText = dados[i].primeiro_nome;
    td5.innerText = dados[i].sobrenome;
    td3.innerText = dados[i].cpf;

    const salario = !isNaN(parseFloat(dados[i].salario)) 
      ? parseFloat(dados[i].salario).toFixed(2)
      : 'N/A';
    td4.innerText = salario;

    tr.append(td1, td2, td5, td3, td4);
    td_tbody.append(tr);
  }
}

async function carregarRelatorio() {
  try {
    const response = await fetch('/relatorio/');
    const relatorio = await response.json();

    const tbody = document.querySelector('#relatorio tbody');
    tbody.innerHTML = '';

    relatorio.forEach((mes) => {
      const tr = document.createElement('tr');

      const lucroBruto = !isNaN(parseFloat(mes.lucroBruto)) ? parseFloat(mes.lucroBruto).toFixed(2) : 'N/A';
      const custoMateriaPrima = !isNaN(parseFloat(mes.custoMateriaPrima)) ? parseFloat(mes.custoMateriaPrima).toFixed(2) : 'N/A';
      const custoManutencao = !isNaN(parseFloat(mes.custoManutencao)) ? parseFloat(mes.custoManutencao).toFixed(2) : 'N/A';
      const folhaPagamento = !isNaN(parseFloat(mes.folhaPagamento)) ? parseFloat(mes.folhaPagamento).toFixed(2) : 'N/A';
      const lucroLiquido = !isNaN(parseFloat(mes.lucroLiquido)) ? parseFloat(mes.lucroLiquido).toFixed(2) : 'N/A';
      
      tr.innerHTML = `
        <td>${mes.mes}</td>
        <td>${lucroBruto}</td>
        <td>${custoMateriaPrima}</td>
        <td>${custoManutencao}</td>
        <td>${folhaPagamento}</td>
        <td>${lucroLiquido}</td>
      `;
      tbody.appendChild(tr);
    });
    
  } catch (error) {
    console.error('Erro ao carregar o relatório:', error);
    alert('Erro ao carregar os dados do relatório.');
  }
}

function gerarTabelas() {
  carregarRelatorio();
  desenhaTabela();
}

window.addEventListener('load', gerarTabelas);