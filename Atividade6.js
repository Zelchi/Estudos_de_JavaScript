// 1

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);

console.log(array3);

// 2

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array5 = array4.slice(3, 8);

console.log(array5);

// 3

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas);

// 4

const menuPrincipal = ['Macarrão', 'Bifé', 'Pastel'];
const menuDeSobremesas = ['Sorvete', 'Bolo', 'Doce']

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log('Veja o menu completo:', menuCompleto );

// 5

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas

// 6

console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

// 7

matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);