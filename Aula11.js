// Desconstruido

const alunos = ['João', 'Pedro', 'Paula', 'Vitor']
const notas = [10, 5, 9, 2]

const lista = [alunos, notas]

function NotaDoAluno(nome) {
    if (lista[0].includes(nome)) {
        const [alunos, notas] = lista
        const indice = alunos.indexOf(nome)
        const mediaAluno = notas[indice]
        return console.log(`O Aluno ${nome}, tem a nota: ${mediaAluno}`)
    } else { console.log(`Aluno ${nome} não encontrado.`) }
}

NotaDoAluno("Vitor")
NotaDoAluno("João")
NotaDoAluno("Maria")