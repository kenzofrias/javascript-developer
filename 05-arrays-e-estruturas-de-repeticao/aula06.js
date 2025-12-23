
class Pessoa {
    constructor(name, idade){
        this.name = name
        this.idade = idade
    }
}

const lista = [new Pessoa("Kenzo", 25), new Pessoa("Maria", 22), new Pessoa("João", 30), new Pessoa("Ana", 28)]

const listaNomes = lista.map((element, i) => {
    return `
        <li>${i} - ${element.name}</li>
    `
})

console.log(listaNomes)
