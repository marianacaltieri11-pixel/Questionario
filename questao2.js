let distancia = 300; 
let consumo = 10; 
let precoGasolina = 5.50; 
let numeroPessoas = 4;


let litrosNecessarios = distancia / consumo;
let custoTotal = litrosNecessarios * precoGasolina;
let custoPorPessoa = custoTotal / numeroPessoas;


console.log("Custo total da gasolina: R$ " + custoTotal.toFixed(2));
console.log("Valor por pessoa: R$ " + custoPorPessoa.toFixed(2));