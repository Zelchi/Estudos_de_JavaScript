//"var" podem ser atualizadas
//"let" A principal diferença entre var e let é o escopo "espaço ou oportunidade para um movimento, atividade ou pensamento desimpedido."
//"const" variáveis declaradas com const não podem ser atualizadas.

let input0 = null;

if (input0 === null) {
 console.log('não há informação');
} else {
 console.log(input0);
}

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false
