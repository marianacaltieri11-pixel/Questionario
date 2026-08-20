const opcoesAcompanhamentos = ["Maionese", "Carne", "Queijo", "Bacon", "Salada"];
const precoAcompanhamento = 2.00;


const sanduiche = "X-Burguer";
const precoSanduiche = 15.00;


let acompanhamentosEscolhidos = ["Maionese", "Queijo", "Bacon"];


let totalAcompanhamentos = acompanhamentosEscolhidos.length * precoAcompanhamento;
let valorTotal = precoSanduiche + totalAcompanhamentos;


console.log("Sanduíche: " + sanduiche);
console.log("Acompanhamentos: " + acompanhamentosEscolhidos.join(", "));
console.log("O valor total a pagar é: R$ " + valorTotal.toFixed(2));