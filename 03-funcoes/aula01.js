// FIRST CLASS FUNCTIONS 
// HIGHER ORDER FUNCTIONS

function falarMeuNome(){
    console.log('Meu nome é Renan')
}

function falarMeuSobrenome(falarMeuNome){
    falarMeuNome();
    console.log('Meu sobrenome é Silva')
}

falarMeuSobrenome(falarMeuNome)