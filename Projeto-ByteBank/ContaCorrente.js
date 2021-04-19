export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log(this._saldo);
            return valor;
        }
    }

    depositar(valor){
        if(valor < 0)
        {
          return;           
        }
        this._saldo += valor;
        console.log(this._saldo);
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
