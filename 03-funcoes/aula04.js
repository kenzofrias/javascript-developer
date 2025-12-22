

function soma (x){
    return (y) => {
        return x + y
    }
}

const somaParcial = soma(10) //GUARDA X = 10

console.log(somaParcial(20)) //RECEBE Y = 20 E FAZ A OPERAÇÃO
console.log(somaParcial(30)) //RECEBE Y = 30 E FAZ A OPERAÇÃO
console.log(somaParcial(40)) //RECEBE Y = 40 E FAZ A OPERAÇÃO
