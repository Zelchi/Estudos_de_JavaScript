const banco = [{
    nome: 'Manon',
    saldo: 1000.40,
    cpf: '798.103.110-28',
}, {
    nome: 'Apolo',
    saldo: 1000.40,
    cpf: '462.171.410-25',
}, {
    nome: 'Zelchi',
    saldo: 1000.40,
    cpf: '698.739.219-91',
}, {
    nome: 'Nyx',
    saldo: 1000.40,
    cpf: '410.543.232-41',
}, {
    nome: 'Reginaldo',
    saldo: 1000.40,
    cpf: '717.362.761-93',
}, {
    nome: 'Kareré',
    saldo: 1000.40,
    cpf: '346.946.510-91',
}];

function MostrarContaNome(nome) {
    const conta = banco.find(conta => conta.nome === nome);
    if (conta) {
        console.log('Detalhes da conta:');
        console.log('Nome:', conta.nome);
        console.log('Saldo:', conta.saldo);
        console.log('CPF:', conta.cpf);
    } else {
        console.log('Conta não encontrada.');
    }
}

MostrarContaNome('Apolo');

// Banco 2

const contaBancaria = {
    titular: "João",
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
};

const cliente = {
    nome: "Carlos",
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}

// Realize operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500);
cliente.conta.sacar(200);

// Chame a função mostrarSaldo para exibir as informações atualizadas
mostrarSaldo(cliente)