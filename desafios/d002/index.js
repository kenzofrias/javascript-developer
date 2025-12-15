/*
2 - FAÇA UM PROGRAMA QUE RECEBA N (QUANTIDADE DE NÚMEROS) E SEUS RESPECTIVOS VALORES.
IMPRIMA O MAIOR NÚMERO PAR E MENOR NÚMERO ÍMPAR.

EXEMPLO:        
    ENTRADA:
        5
        3
        4
        1
        10
        8
        
    SAÍDA:
        MAIOR NÚMERO PAR: 10;
        MENOR NÚMERO ÍMPAR: 1
*/

import {gets,print} from './funcao-auxiliar.js'

const n = 6;
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
    let numero = gets();

    // if(numero%2 === 0){
    //     if(maiorPar === null){
    //         maiorPar = numero
    //     }else if(numero > maiorPar){
    //         maiorPar = numero;
    //     }
    // } else{
    //     if(menorImpar === null){
    //         menorImpar = numero;
    //     }else if(numero < menorImpar){
    //         menorImpar = numero;  
    //     }
    // }

    if(numero%2 === 0){
        if(maiorPar === null || numero > maiorPar){
            maiorPar = numero
        }
    } else{
        if(menorImpar === null || numero < menorImpar){
            menorImpar = numero;
        }
    }
}

print('Maior numero par: ' + maiorPar);
print('Menor numero impar: ' + menorImpar);