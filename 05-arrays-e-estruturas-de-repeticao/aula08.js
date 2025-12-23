const lista = [{nome: 'kenzo'}, {nome: 'gabriel'}, {nome: 'ana'}, {nome: 'clara'}, {nome: 'ken'}, {nome: 'kenji'}, {nome: 'kenjiro'}] 


const elementosEmHTML = lista
    .filter((a) => a.nome.startsWith('k'))
    .map((a) => `<li>${a.nome}</li>`)
    .join('; ')

console.log(elementosEmHTML)

