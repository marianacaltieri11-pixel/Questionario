let valorVenda = 100.00; 
let formaPagamento = "dinheiro"; 
let valorFinal = valorVenda;


if (formaPagamento.toLowerCase() === "dinheiro") {
    valorFinal = valorVenda * 0.95;
}


let confirmaOperacao = true; 

console.log("Valor final da venda: R$ " + valorFinal.toFixed(2));

if (confirmaOperacao) {
    console.log("Venda realizada com sucesso!");
} else {
    console.log("Venda cancelada.");
}
