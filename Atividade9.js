// https://cursos.alura.com.br/course/javascript-conhecendo-arrays/task/148978

// 1

const notas1 = [10, 9, 2, 8];
const notas2 = [4, 1, 5, 10];

function NotasJuntas(...notas) {
    console.log(notas)
}

NotasJuntas(notas1, notas2)

// 2

const valores = [10, 9, 2, 8];

const soma = valores.reduce((valor, valorAtual) => {
    return valor + valorAtual
}, 0);

console.log(soma)

// 3

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const lista = [...new Set([...coresLista1, ...coresLista2])];
console.log(lista)

// 4

function filtraNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
}

const numArray = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = filtraNumerosPares(numArray);
console.log(listaNumerosPares); // Saída: [2, 4, 6]

// 5 

const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
}

const numerosFiltrados = filtraNumeros(listaNumeros);
console.log(numerosFiltrados); // Saída: [6, 9, 12]