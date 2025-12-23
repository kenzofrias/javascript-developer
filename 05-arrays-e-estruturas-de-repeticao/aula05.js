const lista = [1,2,3,4,5,6,7,8,9,10]

const listaPar = lista.filter((element) => {
    return element % 2 === 0
})
/* 
    No forEach ele apenas percorre a lista, enquanto que no filter ele percorre a lista e retorna elementos em um novo array (lista nova)
*/
console.log(listaPar)