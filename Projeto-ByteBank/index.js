//const -> não se altera
//class por convenção sempre com letra maiúscula
//private fields - se a variável começa com # teóricamente é privada, node a partir da v12 já implementou isso
//Nesse código testado o #saldo só pode ser acessado dentro da classe
// https://github.com/tc39/proposal-class-fields#private-fields
//Consenso da comunidade é de que: se a variável que começa com _ é privada e deve ser acessada somente pela classe
//Classes por arquivo devem começar com letra maiúscula
import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { Funcionario } from "./Funcionarios/Funcionario.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

// const cliente1 = new Cliente ("Karina Fukuda" , 12312312312);
// const contaCorrenteKarina = new ContaCorrente(1001 , cliente1);
// contaCorrenteKarina.depositar(500);
// contaCorrenteKarina.sacar(100);

// Conceito Polimorfismo ~ desde que as classes herdem um elemento em comum
const diretor = new Diretor ("Karina" , 20000 , 12345612300);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente ("Carlos" , 10000 , 98765432100);
gerente.cadastrarSenha("123");
const cliente = new Cliente ( "Lais", 44444444444 , "111" );

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "111");


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado );


// node ./Projeto-Bytebank/index.js
