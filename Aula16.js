// Callbacks

const notas = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas)