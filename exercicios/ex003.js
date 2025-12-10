/* 
1 - Débito à vista = 10% de desconto; 
2 - Dinheiro ou Pix à vista = 15% de desconto; 
3 - Crédito de 2x, sem juros; 
4 - Crédito acima de 2x, mais 10% de juros.
*/

const preco = 199.99;
const condicaoPagamento = 5; 

if(condicaoPagamento == 1){
    let precoDesconto = preco * 0.10;
    let valorFinal = preco - precoDesconto;
    console.log("O valor final da compra é de R$" + valorFinal.toFixed(2));
} else if(condicaoPagamento == 2){
    let precoDesconto = preco * 0.15;
    let valorFinal = preco - precoDesconto;
    console.log("O valor final da compra é de R$" + valorFinal.toFixed(2));
} else if(condicaoPagamento == 3){
    let precoParcelado = preco/2;
    let valorFinal = preco;
    console.log("O valor final da compra é de R$" + valorFinal.toFixed(2) + " em 2x sem juros de R$" + precoParcelado.toFixed(2));
} else if(condicaoPagamento == 4){
    let precoJuros = preco * 0.10;
    let valorFinal = preco + precoJuros;
    console.log("O valor final da compra é de R$" + valorFinal.toFixed(2) + " com juros.");
} else{
    console.log("Condição de pagamento inválida.");
}