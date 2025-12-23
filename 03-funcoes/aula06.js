
function adicao(x, y){
    return x + y
}

function multiplicacao(x, y){
    return x * y
}

function calculadora(x, operacao, y){
    console.log(operacao(x,y))
}

calculadora(10, adicao, 20)
calculadora(10, multiplicacao, 20)

document.querySelector('#btn-close').addEventListener('click', () => {
    console.log('fechar')
})