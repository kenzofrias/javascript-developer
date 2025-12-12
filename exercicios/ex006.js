/* 
    1 - Crie uma classe para apresentar carros.
    Os carross possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

const quantKmHonda = 100;
const quantKmChevrolet = 200;
const quantKmFiat = 300;
const precoCombustivel = 5.79;

class Carro{
    marca;
    cor;
    kmPorLitro;
    mediaDeCombPorKm;
    
    constructor(marca, cor, kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
        this.mediaDeCombPorKm = 1/kmPorLitro
    };

    calcularGastoDePercurso(quantKm, precoCombustivel){
    // const gastoDePercurso = (quantKm/carro.kmPorLitro) * precoCombustivel;
    
    const gastoDePercurso = quantKm * this.mediaDeCombPorKm * precoCombustivel;
    return gastoDePercurso;
    };
};

const honda = new Carro('Honda', 'Prata', 10);
const chevrolet = new Carro('Chevrolet', 'Branco', 12);
const fiat = new Carro('Fiat', 'Vermelho', 8);

console.log(honda.calcularGastoDePercurso(quantKmHonda, precoCombustivel).toFixed(2))
console.log(chevrolet.calcularGastoDePercurso(quantKmChevrolet, precoCombustivel).toFixed(2));
console.log(fiat.calcularGastoDePercurso(quantKmFiat, precoCombustivel).toFixed(2));