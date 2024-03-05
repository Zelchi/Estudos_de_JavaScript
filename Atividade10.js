// For Classico;
function Somar(notas) {
    let valorSomado = 0
    for (let i = 0; i < notas.length; i++) {
        valorSomado += notas[i]
    };
    console.log(valorSomado);
};

Somar([50, 125, 125, 35, 8, 768]);

// For Of;
function Somar(notas) {
    let valorSomado = 0
    for (valor of notas) {
        valorSomado += valor
    };
    console.log(valorSomado);
};

Somar([50, 125, 125, 35, 8, 768]);


// Do Fim ao Inicio;
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}