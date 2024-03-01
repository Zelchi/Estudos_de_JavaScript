// Exemplo de For:
const notas = [10, 9, 2, 8];

somaDasNotas = 0;

for (let todasAsNotas of notas) {
    somaDasNotas += todasAsNotas;
};

const resultado = somaDasNotas / notas.length;

console.log(resultado);