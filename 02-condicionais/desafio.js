/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol
    2 - Preço da gasolina
    3 - O tipo de combustível que está no seu carro
    4 - Gasto médio de combustível do carro em KM
    5 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar essa viagem. 
*/

const precoEtanol = 4.5;
const precoGasolina = 5.8;
let tipoCombustivel = 'gasolina';
const mediaPorKm = 10;
const distancia = 100;

let litrosPrecisos = distancia/mediaPorKm;
let valorGasto = 0;

if(tipoCombustivel === 'etanol'){
    valorGasto = precoEtanol*litrosPrecisos;
    console.log("O valor gasto para a viagem será de " + valorGasto.toFixed(2) + " reais.");
} else{
    valorGasto = precoGasolina*litrosPrecisos;
    console.log("O valor gasto para a viagem será de " + valorGasto.toFixed(2) + " reais.");
}
