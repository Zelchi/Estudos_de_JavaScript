// Arrow Function

const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
 
console.log(soma) //170

//Função normal.

const soma1 = numeros.reduce(function (acc, atual) {
    return atual + acc   
}, 0);

console.log(soma1)