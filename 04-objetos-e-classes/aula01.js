const pessoa={
    nome: 'Kenzo',
    sobrenome: 'Frias',
    idade: 19,
    profissao: 'Estudante',
    descrever: function(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
    }
}

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

console.log(pessoa);

// ---------------------------------
pessoa.idade = 20;
pessoa.profissao = 'Desenvolvedor';

console.log("\nApós atualização:");
console.log(pessoa.idade);
console.log(pessoa.profissao);

console.log(pessoa);

// ---------------------------------
console.log("\nDescrição da pessoa:");
pessoa.descrever();