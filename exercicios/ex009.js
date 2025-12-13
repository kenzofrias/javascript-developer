//2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [2,3,5,12,20,41];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i]%2 === 0){
        console.log(numeros[i]);
    }
}