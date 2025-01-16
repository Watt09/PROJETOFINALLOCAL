import urlBackEnd from "../constantes/urls.mjs";

export async function getLista() {
  const resultado = await fetch(urlBackEnd + '/relatorio/listar');
  const relatorioFuncionarios = await resultado.json();
  return relatorioFuncionarios;
}