
const pessoa = {
    nome: 'kenzo',
    idade: 30
}

function gritar(prefixo){
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olaaaaaa']) //contexto, atributos
gritar.call(pessoa, 'Olaaaaaa') //contexto, argumentos

