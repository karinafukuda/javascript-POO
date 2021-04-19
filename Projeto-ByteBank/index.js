//const -> não se altera
//class por convenção sempre com letra maiúscula
//private fields - se a variável começa com # teóricamente é privada, node a partir da v12 já implementou isso
//nesse código o #saldo só pode ser acessado dentro da classe

class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            console.log(this.#saldo);
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(this.#saldo);
        }
    }
}

// let valorSacado = 200;
// if (contaCorrenteKarina.saldo >= valorSacado){
//     contaCorrenteKarina.saldo -= valorSacado;
// }

const cliente1 = new Cliente ();
//instância
cliente1.nome = "Karina Fukuda";
cliente1.cpf = 12312312312;

const cliente2 = new Cliente ();
//instância
cliente2.nome = "Gabriel";
cliente2.cpf = 22322322322;


const contaCorrenteKarina = new ContaCorrente();

contaCorrenteKarina.agencia = 1001;
contaCorrenteKarina.saldo = 0;

console.log(cliente1);
contaCorrenteKarina.depositar(100);
contaCorrenteKarina.sacar(50);
contaCorrenteKarina.depositar(150);




// node ./Projeto-Bytebank/index.js
