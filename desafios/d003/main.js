/* 
3 - FAÇA UM PROGRAMA QUE CALCULE E IMPRIMA O SALÁRIO A SER TRANSFERIDO PARA UM FUNCIONÁRIO.
PARA REALIZAR O CÁLCULO RECEBA O VALOR BRUTO DO SALÁRIO E O ADICIONAL DOS BENEFÍCIOS.
    O SALÁRIO A SER TRANSFERIDO É CALCULADO DA SEGUINTE MANEIRA:

        VALOR BRUTO DO SALÁRIO - PERCENTUAL DE IMPOSTO MEDIANTE A FAIXA SALARIAL + ADICIONAL DOS BENEFÍCIOS

    PARA CALCULAR O PERCENTUAL DE IMPOSTO SEGUE AS ALIQUOTAS:
        - DE R$ 0.00 A R$ 1100.00 = 5.00%
        - R$ 1100.01 A R$ 2500.00 = 10.00%
        - MAIOR QUE R$ 2500.00 = 15.00%
    
    EXEMPLO:
        ENTRADA: 
            2000
            250 +
        
        SAÍDA:
            2050.00
*/

import { gets,print } from "./funcao-auxiliar.js";

const salarioBruto = gets();
const adcBeneficios = gets();

function calcularValorDoImposto(salarioBruto){
    if(salarioBruto >= 0.00 && salarioBruto <= 1100.00){
        let valorSemiFinal = salarioBruto*0.05;
        return valorSemiFinal;
    } else if(salarioBruto > 1100.00 && salarioBruto <= 2500.00){
        let valorSemiFinal = salarioBruto*0.1;
        return valorSemiFinal;
    } else{
        let valorSemiFinal = salarioBruto*0.15;
        return valorSemiFinal;
    }
}

function calcularSalarioLiquido(calcularValorDoImposto){
    const salarioLiquido = salarioBruto - calcularValorDoImposto + adcBeneficios;
    return salarioLiquido;
}

const imposto = calcularValorDoImposto(salarioBruto);
const liquido =  calcularSalarioLiquido(imposto);
print('Forma desmembrada: ' + liquido.toFixed(2));


print('Forma direta: ' + calcularSalarioLiquido(calcularValorDoImposto(salarioBruto)).toFixed(2)); 