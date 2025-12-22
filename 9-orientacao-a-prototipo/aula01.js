
// const pessoa = {
//     genero: 'Masculino'
// }

// const renan = {
//     name: 'Renan',
//     idade: 25,
//     __proto__ : pessoa
// }

// console.log(renan.genero)

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

const renan = new Pessoa('Renan', 25)
console.log(renan)

/*
MESMO QUE:
    class Exemplo {
        nome;
        idade;

        constructor(nome, idade){
            this.nome = nome;
            this.idade = idade;
        }

        falar(){
            console.log('Olá, meu nome é ' + this.nome)
        }
    }
*/