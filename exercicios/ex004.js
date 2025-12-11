function escrevaNome(nome){
    console.log("O meu nome é " + nome);
    return nome;
}

escrevaNome("Kenzo");
let nome = escrevaNome("Gabriel");

function verificarIdade(idade){
    if(idade < 18){
        return ' é menor de idade!'
    } else{
        return ' é maior de idade!'
    }
}

console.log(nome + verificarIdade(11));