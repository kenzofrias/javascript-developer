/*const pessoa ={
    idade: 18
}
const renan = {
    nome: 'renan',
    idade: 25,
    __proto__ : pessoa
}
console.log(renan.idade)*/


const pessoa = {
    genero: 'Masculino'
}

const renan = Object.create(pessoa)
renan.nome = 'Renan'

console.log(renan.genero)

