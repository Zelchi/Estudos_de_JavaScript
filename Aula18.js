const alunos = ['Ana', 'Marcos', 'Maria', 'Mouro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { // O _ usa o correspondente, nesse caso o "medias[indice]"
    return medias[indice] < 7; 
});

console.log(reprovados)