import urlBackEnd from "../constantes/urls.mjs"
async function getLista() {
    const resposta = await fetch(urlBackEnd + '/clientes/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function novo(obj) {
    const opt = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };
    const resposta = await fetch(urlBackEnd + '/clientes/cadastrar', opt);
    const casdastrando = await resposta.json();
    return casdastrando;
}

async function remove(id){
    const opt = {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    };
    const resposta = await fetch(urlBackEnd + '/clientes/excluir', opt);
    const apagado = await resposta.json();
    return apagado;
   
}
async function edita(obj) {
    const opt ={
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    const resultado = await fetch(urlBackEnd + '/clientes/editar', opt);
    const editado = await resultado.json();
    return editado;
}

async function buscaUm(id){
    const resposta = await fetch(urlBackEnd + '/clientes/listar/'+ id)
    const cliente = await resposta.json();
    return cliente;
}
export {getLista, novo, remove, edita, buscaUm};

