/* 
1 - Débito à vista = 10% de desconto; 
2 - Dinheiro ou Pix à vista = 15% de desconto; 
3 - Crédito de 2x, sem juros; 
4 - Crédito acima de 2x, mais 10% de juros.
*/

const preco = 249.99;
const condicaoPagamento = 1; 

function aplicarDesconto(preco, percentual){
    percentual = percentual/100
    return preco - (preco * percentual);
}
function aplicarJuros(preco, percentual){
    percentual = percentual/100
    return preco + (preco * percentual);
}

function verificarDesconto(preco, condicaoPagamento){
    if(condicaoPagamento == 1){
        let valorFinal = aplicarDesconto(preco, 10);
        console.log("O valor final da compra é de R$" + valorFinal.toFixed(2));
        return valorFinal;
    } else if(condicaoPagamento == 2){
        let valorFinal = aplicarDesconto(preco, 15);
        console.log("O valor final da compra é de R$" + valorFinal.toFixed(2));
        return valorFinal;
    } else if(condicaoPagamento == 3){
        let precoParcelado = preco/2;
        let valorFinal = preco;
        console.log("O valor final da compra é de R$" + valorFinal.toFixed(2) + " em 2x sem juros de R$" + precoParcelado.toFixed(2));
        return valorFinal;
    } else if(condicaoPagamento == 4){
        let valorFinal = aplicarJuros(preco, 10);
        console.log("O valor final da compra é de R$" + valorFinal.toFixed(2) + " com juros.");
        return valorFinal;
    } else{
        console.log("Condição de pagamento inválida.");
        return null;
    }
}

(function main(){
    verificarDesconto(preco,condicaoPagamento)
})();