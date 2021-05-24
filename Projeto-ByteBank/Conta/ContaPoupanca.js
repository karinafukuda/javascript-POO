import { Conta } from "./Conta/Conta.js";

export class ContaPoupanca extends Conta{
  constructor(saldoInicial, cliente, agencia){
   super(saldoInicial, cliente, agencia);
   // this._saldoInicial = saldoInicial;
  }

  sacar(valor){
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}