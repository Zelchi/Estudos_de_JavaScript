// Variáveis
// 1
const string = "Café"
const number = 10
const boolean = true

console.log(typeof(string), typeof(number), typeof(boolean));

// 2
const primeiroNome = "Davi";
const ultimoNome = " Lima";

const nomeCompleto = primeiroNome + ultimoNome

console.log(
    `Meu primeiro nome é ${primeiroNome} e meu ultimo nome é${ultimoNome}, meu nome completo fica ${nomeCompleto}.`
)

// 3
const nome = "Pedro"
const idade = 15

console.log(
    `${nome} tem ${idade} anos.`
)

// 4

var mutavel = 40
console.log(mutavel)
mutavel = 30
console.log(mutavel)

// 5

var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

// let fora = 'Fora do bloco';

// if (true) {
//     let dentro = 'Dentro do bloco';
//     console.log(fora); // retorna 'Fora do bloco'
//     console.log(dentro); // retorna 'Dentro do bloco'
// }

// console.log(fora); // retorna 'Fora do bloco'
// console.log(dentro); // erro 'dentro is not defined'

// 6 

const estaChovendo = false

if (estaChovendo) {
    console.log("Está chovendo!!!")
} else {
    console.log("Não está chovendo.")
}