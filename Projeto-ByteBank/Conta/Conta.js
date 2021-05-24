//--- Classe Abstrata
export class Conta{
   constructor (saldoInicial, cliente, agencia){
    if(this.constructor == Conta){
       throw new Error("Você não deveria instanciar um objeto do tipo <Conta> diretamente, pois esta é uma classe abstrata.");
    } // acima um erro gerado que para a execução ;
    this._saldo = saldoInicial;
    this._cliente = cliente; 
    this.agencia = agencia;
  }

  //set , get ---assessores
   set cliente(novoValor){
    if(novoValor instanceof Cliente){
         this._cliente = novoValor;
    }
  }

  get cliente(){
     return this._cliente;
  }

  //com o getter progege para que o valor seja acessado mas não alterado ou atribuído em outro local;
  get saldo(){
     return this._saldo;
  }

  //método abstrato
  sacar(valor){
   throw new Error ("O método Sacar da Conta é abstrato");
    // let taxa = 1
    // return this._sacar(valor, taxa);
  }

  _sacar(valor, taxa){
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;    
  }

  depositar(valor){
    if(valor <= 0)
    {
      return;           
    }
    this._saldo += valor;
  }

  //method---  obj , obj    =>    instancia da Contacorrente
  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}