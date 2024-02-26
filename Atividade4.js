// 1

function comrpimentar(pessoa) {
    console.log(`Saudações ${pessoa}`)
};

comrpimentar("Davi");

//2

function Idade(idade) {
    const idadeMinima = 18;
    if (idade >= idadeMinima) {
        console.log(`É maior de Idade, tem ${idade}`);
    } else {
        console.log(`${idade} não tem idade o suficiente.`)
    }
};

Idade(17)

//3

function Numero(num1, num2, num3) {
    let maior = num1

    if (num2 > maior) {
        maior = num2
    }
    if (num3 > maior) {
        maior = num3
    }
    return console.log(maior)
}

Numero(30, 9, 9)

// Calculadora 4

function Calculadora(base, expoente){
    return console.log(Math.pow(base, expoente))
};

Calculadora(10, 2)

// 5

function verificar(palavra){
    palavra = palavra.toLowerCase()
    stringinvertida = palavra.split('').reverse().join('')
    if (stringinvertida === palavra) {
        console.log(`${palavra} é um palíndromo.`)
    } else {
        console.log(`${palavra} não é um palíndromo, fica ${stringinvertida}`)
    }
}

verificar("A base do teto desaba")
