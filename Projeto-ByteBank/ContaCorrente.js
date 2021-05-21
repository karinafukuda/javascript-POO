import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    
    static numeroDeContas = 0;
    _cliente;
    agencia;
    _saldo = 0;

    //com o set protegemos para que o valor em 'cliente' seja atribuido corretamente; //assessor - não é um método --- o assessor sempre é público( sem _ )
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

    constructor (agencia , cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
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
