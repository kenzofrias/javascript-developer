
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log('Olá, eu sou ' + this.nome)
}

// const renan = new Pessoa('Renan', 25)
// console.log(renan)
// renan.falar()

const renan = {
    genero: 'masc'
}

Pessoa.call(renan, 'Renan', 25)
console.log(renan)