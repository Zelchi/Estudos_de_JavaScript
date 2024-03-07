// https://cursos.alura.com.br/course/javascript-conhecendo-objetos/task/150908


// // Atividade 1
// const pessoa = {
//     nome: "Davi",
//     idade: "18",
//     solteiro: true,
//     hobbies: ["programação", "jogar"],
//     endereço: {
//         rua: 50,
//         cidade: "Caldas Velha",
//         estado: "Goias",
//     }
// }

// if (pessoa.solteiro === true) {
//     pessoa.solteiro = "está"
// } else { pessoa.solteiro = "não está"}

// function MostrarPerfil(pessoa) {
//     console.log(`O nome da pessoa é ${pessoa.nome}`)
//     console.log(`A idade da pessoa é ${pessoa.idade}`)
//     console.log(`A pessoa ${pessoa.solteiro} solteira`)
//     console.log(`O seus hobbies são ${pessoa.hobbies}`)
//     console.log(`Mora na rua ${pessoa.endereço.rua}`)
//     console.log(`Na cidade ${pessoa.endereço.cidade}`)
//     console.log(`No estado de ${pessoa.endereço.estado}`)
// };

// MostrarPerfil(pessoa)

// Atividade 2

// listaPessoas.js
const listaPessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
];

function mostrarListaPessoas(pessoas) {
    console.log("Lista de Pessoas:");
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

// Chamada da função mostrarListaPessoas
mostrarListaPessoas(listaPessoas);

// Adição de uma nova pessoa à lista
listaPessoas.push({ nome: "Ana", idade: 28, cidade: "Salvador" });

// Chamada da função mostrarListaPessoas após a adição
mostrarListaPessoas(listaPessoas);

// Chamada da função filtrarPorCidade
const pessoasSalvador = filtrarPorCidade(listaPessoas, "Salvador");
console.log("Pessoas em Salvador:");
console.log(pessoasSalvador);

// Atividade 3 Calculadora

// funcoesObjeto.js
const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Divisão por zero não é permitida.";
        }
    },
    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};

// Chamadas das funções
console.log("Soma: " + calculadora.soma(5, 3));
console.log("Subtração: " + calculadora.subtracao(8, 4));
console.log("Multiplicação: " + calculadora.multiplicacao(6, 2));
console.log("Divisão: " + calculadora.divisao(10, 2));
console.log("Divisão por zero: " + calculadora.divisao(8, 0));

const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));

// Fazer a Atividade 5 para aprender!!!