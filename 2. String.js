const texto1 = "Olá, mundo!";
const texto2 = "Olá, mundo!";
const senha1 = "Coxinha123";
const StringDeNumero = "12345";

const citação = "Meu nome é ";
const MeuNome = "Davi";
console.log(citação)

// concatenação (+)

console.log(citação + MeuNome)

// Decifrando Codigos

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// //Diferença com letras maiúsculas

//const cidade = "belo horizonte";
//const saida = "Belo Horizonte";

//console.log(cidade === saida); // false

//Sem diferença com letras maiúsculas
//O toLowerCase() que converte todos os caracteres da string informada

const cidade = "belo horizonte";
const saida = "Belo Horizonte";

const inputMinusculo = saida.toLowerCase();

console.log(cidade === inputMinusculo); // true

//ength pode ser utilizada para sabermos quantos caracteres uma string contém:

const senha = "minhaSenha123"
console.log(senha.length); // 13 caracteres
