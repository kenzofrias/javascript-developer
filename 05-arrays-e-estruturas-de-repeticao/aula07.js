const lista = [1,2,3,4,5,6,7,8,9,10]

const somaTudo = lista.reduce((previus, current) => {
    console.log(previus, current)
    return previus + current
}, 0)
//percorre cada elemento e reduz tudo a um único valor

console.log(somaTudo)


// const tiposEncontrados = ['grass', 'fire', 'grass', 'water', 'fire', 'grass', 'poison', 'fire', 'grass', 'fire'];

// const contagem = tiposEncontrados.reduce((acc, tipo) => {
//     // Se o tipo já existe no objeto, soma 1. Se não, começa com 1.
//     acc[tipo] = (acc[tipo] || 0) + 1;
//     return acc;
// }, {}); // Começamos com um objeto vazio {}

// console.log(contagem); 