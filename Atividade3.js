//1
const saldo = 30

const deposito = 10
const saque = 15

const operação = saldo - deposito + saque

console.log(operação)

//2

const numero = 8;
const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
console.log(resultado); // Ímpar

//3

const logado = true
const admin = false

const analisar = logado && admin

console.log("Admin está logado?", analisar)

//4

const professor = false;
const aluno = false;

const permissão = professor || aluno;

console.log("Esse usuario pode entrar?", permissão)

//5

const usuario = 18
const idadeMinima = 18

if (usuario >= idadeMinima) {
console.log("Você tem permissão para comprar o ingresso!")
} else {
    console.log("Você não tem permissão para comprar. :(")
}