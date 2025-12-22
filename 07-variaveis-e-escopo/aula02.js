// HOISTING
// JOGA A DECLARACAO PARA O TOPO. SE:
// - FUNÇÃO: JOGA TODO O CODIGO PARA O TOPO
// - VAR: JOGA APENAS A DECLARACAO PARA O TOPO, DEIXANDO-A INDEFINIDA

function teste1(){
    console.log("Teste 1")
}
var teste2;

teste1()

teste2 = function(){
    console.log("Teste 2")
}

teste2()