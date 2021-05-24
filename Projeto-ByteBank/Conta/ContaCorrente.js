import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta { 
    static numeroDeContas = 0;

    constructor (cliente, agencia ){
        super(0, cliente, agencia);
        // this.agencia = agencia;
        // this.cliente = cliente;
        // this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    } 
        //sobrescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
