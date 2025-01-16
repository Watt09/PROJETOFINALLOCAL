import  urlBackEnd  from "../constantes/urls.mjs";

async function getLista() {
    const resposta = await fetch(urlBackEnd + '/categoria/listar');
    const categoria = await resposta.json();
    return categoria;
}

async function novo(obj) {
    const opt = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };
    const resposta = await fetch(urlBackEnd + '/categoria/cadastrar', opt);
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
    const resposta = await fetch(urlBackEnd + '/categoria/excluir', opt);
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
    const resultado = await fetch(urlBackEnd + '/categoria/editar', opt);
    const editado = await resultado.json();
    return editado;
}

async function buscaUm(id){
    const resposta = await fetch(urlBackEnd + '/categoria/listar/'+ id)
    const categoria = await resposta.json();
    return categoria;
}
export {getLista, novo, remove, edita, buscaUm};

