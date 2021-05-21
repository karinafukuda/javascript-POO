//const -> não se altera
//class por convenção sempre com letra maiúscula
//private fields - se a variável começa com # teóricamente é privada, node a partir da v12 já implementou isso
//Nesse código testado o #saldo só pode ser acessado dentro da classe
// https://github.com/tc39/proposal-class-fields#private-fields
//Consenso da comunidade é de que: se a variável que começa com _ é privada e deve ser acessada somente pela classe
//Classes por arquivo devem começar com letra maiúscula

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// const cliente1 = new Cliente ();
// //instância
// cliente1.nome = "Karina Fukuda";
// cliente1.cpf = 12312312312;

//com constructor
const cliente1 = new Cliente ("Karina Fukuda" , 12312312312);
const cliente2 = new Cliente ("Gabriel Rocha", 28286895987);
// let numeroDeContas = 0;
// const contaCorrenteKarina = new ContaCorrente();
// contaCorrenteKarina.agencia = 1001;
// contaCorrenteKarina.cliente = cliente1;

//com constructor
const contaCorrenteKarina = new ContaCorrente(1001 , cliente1);
//numeroDeContas++;

contaCorrenteKarina.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);
//numeroDeContas++;
new ContaCorrente(102, cliente2);
new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteKarina.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);


// console.log(cliente1);
// contaCorrenteKarina.depositar(100);
// contaCorrenteKarina.sacar(50);
// contaCorrenteKarina.depositar(150);

// const valorSacado = contaCorrenteKarina.sacar(50);
// console.log(valorSacado);
// console.log(contaCorrenteKarina);


// node ./Projeto-Bytebank/index.js
