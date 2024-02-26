// https://cursos.alura.com.br/course/javascript-conhecendo-arrays/task/148938

//1

const array1 = [];

function Splice(num1,num2,num3){
    return array1.splice(num1,num2,num3); // Essa função serve para agilizar o processo de adicionar novos dados dentro do array.
};

Splice(1,1,2); Splice(3,1,4); Splice(7,1,8); // a função sendo utilizada.

console.log(array1, `O tamanho é "${array1.length}"`); // Mostra o resultado e tbm o tamanho da lista do array.

//2

const array2 = [1,2,3,4,5]; // array simples, lista do 1 ao 5, indice 0 ao 4.

function Adicionar(num1,num2,num3){
    return array2.splice(num1,num2,num3) // função para trocar o valor do indice
};

console.log(array2) // Mostra o antes.

Adicionar(0,1,9) // trocando o valor do indice 0, que era 1 e foi para 9.

console.log(array2) // Mostra o depois; 

//3

const array3 = [] // Array vazia

function Colocar(num1){
    return array3.push(num1) // função para adicionar um valor dentro do array.
}

console.log(array3) // Antes de adicionar

Colocar(1); Colocar(2); Colocar(3) //função para adicionar o valor.

console.log(array3) // depois de adicionar o valor.

// 4 
function ArrayCom3Numeros(num1,num2,num3){
    array4 = []
    array4.push(num1*2)
    array4.push(num2)
    array4.push(num3)
    return console.log (array4)
};

ArrayCom3Numeros(10,10,10);

// 5
// Clinica Veterinaria.

const clinica = ["Cachorro", "Gato", "Porco"]

function Fila(Animal){
    clinica.pop()
    return console.log(`O ${Animal} foi atendido, proximos:${clinica}`)
}

Fila("Porco")
Fila("Gato")
Fila("Cachorro")


// Resposta da 2

// Inicializando o array com cinco elementos
let meuArray1 = [10, 20, 30, 40, 50];

// Exibindo o array antes da alteração
console.log("Array antes da alteração: ", meuArray1);

// Atribuindo um novo valor para a primeira posição (índice 0) do array
meuArray1[0] = 5;
meuArray1[4] = 3;

// Exibindo o array depois da alteração
console.log("Array depois da alteração: ", meuArray1);


// Resposta da 4

const meuArray = []; // Criando um array vazio
meuArray.push(5); // Adicionando números ao array
meuArray.push(10);
meuArray.push(15);

//Exibição dos Itens
console.log("Itens no array meuArray:", meuArray);

//Atualização de Itens
//Dobrando o valor do primeiro elemento
meuArray[0] = meuArray[0] * 2; 
//mesma operação utilizando o operador `*=`
//meuArray[0] *= 2;
console.log("Array após a atualização do primeiro elemento:", meuArray);


// Reposta da 5

// Criando um array vazio para representar a fila de animais na clínica
const clinica1 = [];

// Chegada de animais na clínica
clinica1.push("Cachorro");
clinica1.push("Gato");
clinica1.push("Coelho");

// Exibindo a fila de animais na clínica após a chegada
console.log("Fila de animais após a chegada: ", clinica1);

// Removendo cada animal da lista:
clinica1.pop();
clinica1.pop();
clinica1.pop();

// Exibindo o estado final da lista:
console.log("Fila de animais aguardando: ", clinica1);