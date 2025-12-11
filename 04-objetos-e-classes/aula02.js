class pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const kenzo = new pessoa('Kenzo', 19);

// kenzo.nome = 'Kenzo';
// kenzo.idade = 19;

// console.log(kenzo.nome);
// console.log(kenzo.idade);

kenzo.descrever();