const alunos = [
    { nome: "João", notas: [8, 7.7, 6] },
    { nome: "Maria", notas: [5, 5.5, 6] },
    { nome: "Pedro", notas: [3, 2, 4] }
];


console.log("RELATÓRIO DE ALUNOS");

for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;
    let status = "";

    if (media >= 7) {
        status = "Aprovado";
    } else if (media >= 4) {
        status = "Em Recuperação";
    } else {
        status = "Reprovado";
    }

    console.log(aluno.nome + " - Média: " + media.toFixed(1) + " | Status: " + status);
}