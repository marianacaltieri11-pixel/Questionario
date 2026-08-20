let convidados = [];


function cadastrarConvidado(nome) {
    if (convidados.length >= 10) {
        console.log("A lista está cheia! Não é possível cadastrar mais de 10 convidados.");
    } else {
        convidados.push(nome);
        console.log(nome + " cadastrado com sucesso!");
    }
}


function removerConvidado(nome) {
    let indice = convidados.indexOf(nome);
    
    if (indice !== -1) {
        convidados.splice(indice, 1);
        console.log(nome + " foi removido da lista.");
    } else {
        console.log("Nome não encontrado na lista.");
    }
}


function exibirConvidados() {
    let listaOrdenada = [...convidados].sort();
    console.log("LISTA DE CONVIDADOS");
    console.log(listaOrdenada);
}


cadastrarConvidado("Ana");
cadastrarConvidado("Carlos");
cadastrarConvidado("Beatriz");

exibirConvidados();

removerConvidado("Carlos");

exibirConvidados();