let nota1 = 8;
let nota2 = 8;
let nota3 = 8;

let soma = nota1 + nota2 + nota3;
let media = soma/3;

if (media < 5){
    console.log("Média: " + media.toFixed(2) + ". Reprovado!");
} else if(media >= 5 && media <= 7){
    console.log("Média: " + media.toFixed(2) + ". Recuperação!");
} else{
    console.log("Média: " + media.toFixed(2) + ". Aprovado!");
}