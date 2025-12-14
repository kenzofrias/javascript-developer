/*
    1 - FAÇA UM PROGRAMA QUE RECEBA A MÉDIA DE UM ALUNO.
        CASO A MÉDIAA SEJA < 5 IMPRIMA "REPROVADO";
        CASO A MÉDIAA SEJA >= 5 E < 7 IMPRIMA "RECUPERAÇÃO";
        CASO A MÉDIA SEJA > 7 IMPRIMA "APROVADO";

    EXEMPLO:
        ENTTRADA:
            5.5;
        SAÍDA:
            RECUPERAÇÃO;
*/
import {gets, print} from './funcao-auxiliar.js'

const media = gets()

function DefinirResultado(){
    if(media < 5){
        print("Reprovado!");
    } else if(media >= 5 && media < 7){
        print("Recuperação!");
    } else{
        print("Aprovado!");
    }
}

DefinirResultado();