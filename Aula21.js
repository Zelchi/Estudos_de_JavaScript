const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
  }]
}

// código omitido

for (let chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== 'object' && tipo !== 'function')
    texto = `a chave ${chave} tem o valor ${estudante[chave]}`
  console.log(texto);
}

const meuObjeto = {};

// Criando uma propriedade não enumerável
Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true // Definindo a enumerabilidade como true
});

// Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
console.log(Object.keys(meuObjeto)); // Saída: ['propriedadeNaoEnumeravel']

// Exibindo o valor da propriedade
console.log(meuObjeto.propriedadeNaoEnumeravel); // Saída: 42
