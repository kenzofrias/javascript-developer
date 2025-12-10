/*
Faça um programa para calcular o valor de uma viagem.

Você terá três variáveis. Sendo elas:
    1 - Preço do combustível
    2 - Gasto médio de combustível por KM
    3 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar essa viagem. 
*/

const precoCombustivel = 5.79; //suposição
const gastoCombustivelKm = 12; //gasta 10km por litro
let distanciaKm = 1580;

let gastoFinal = (distanciaKm/gastoCombustivelKm) * precoCombustivel;

console.log(gastoFinal.toFixed(2));