// Atividade 1 | For..of

function Elementos(indice) {
  for (let magia of indice) {
    console.log(magia)
  };
};

Elementos(["FOGO", "AGUA", "TERRA", "VENTO"]);

// Atividade 2 | For Classico

function Habilidades(poderes) {
  for (let i = 0; i < poderes.length; i++) {
    resultado = poderes[i];
    numero = i;
    console.log(`${resultado} ${numero}`);
  };
};

Habilidades(["LUZ", "SOMBRAS", "ELETRICIDADE", "GELO"]);

// Atividade 3 

const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];

function SomadorDeNumeros(numeros) {
  somado = 0;

  for (let i = 0; i < numeros.length; i++) {
    somado += numeros[i];
  };

  return console.log(somado);
};

SomadorDeNumeros(listaNumeros);

// Atividade 4
AnalisadorDeMaiorMenor(listaNumeros);

function AnalisadorDeMaiorMenor(arr) {
  let maior = 0
  let menor = 0

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }

  return console.log(`O maior número é ${maior} e o menor número é ${menor}`);
};

// Atividade 5

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('Números pares do array:');

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

//Atividade 6

const listaDeNumeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

calcularMedia(listaDeNumeros);

function calcularMedia(numeros) {
    soma = 0

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    };

let resultado = soma / numeros.length

return console.log(`A média é ${resultado}`)
};