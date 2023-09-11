// Definindo o objeto Banco
const Banco = {
    conta: "123456", // Número da conta
    saldo: 1000, // Saldo inicial
    tipoConta: "Corrente", // Tipo de conta
    agencia: "7890", // Número da agência
  
    // Método para buscar o saldo atual
    buscarSaldo: function () {
      return this.saldo;
    },
  
    // Método para realizar um depósito
    deposito: function (valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`;
      } else {
        return "Valor de depósito inválido.";
      }
    },
  
    // Método para realizar um saque
    saque: function (valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`;
      } else {
        return "Saldo insuficiente ou valor de saque inválido.";
      }
    },
  
    // Método para retornar o número da conta
    numeroConta: function () {
      return this.conta;
    },
  };
  
  // Exemplo de utilização
  console.log(Banco.buscarSaldo()); // Retorna o saldo atual
  console.log(Banco.deposito(500)); // Realiza um depósito de R$500
  console.log(Banco.saque(200)); // Realiza um saque de R$200
  console.log(Banco.numeroConta()); // Retorna o número da conta
  