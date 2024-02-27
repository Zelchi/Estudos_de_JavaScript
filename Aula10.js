const alunos = ['João','Pedro','Paula','Vitor']
const notas = [10,5,9,2]

const lista =[alunos,notas]

function NotaDoAluno(alunos){
    if (lista[0].includes(alunos)){
        const indice = lista[0].indexOf(alunos)
        const mediaAluno = lista[1][indice]
        return console.log(`O Aluno ${alunos}, tem a nota: ${mediaAluno}`)
    } else { console.log(`Aluno ${alunos} não encontrado.`)}
}

NotaDoAluno("Vitor")