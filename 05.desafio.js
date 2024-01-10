/** Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando 
 * o preço normal de etiqueta e a escolha da condição de pagamento.
 * 
 * Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o calculo adequado.
 * 
 * Codigo condição de pagamento.
 * 
 * 1 A vista debito, recebe 10% de desconto.
 * 2 A vista dinheiro ou PIX, recebe 15% de desconto.
 * 3 Em duas vezes, preço normal de etiqueta sem juros.
 * 4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%. 
 * 
 * 1 opção de logica minha*/

const produto = 100;

const debito = 10;
const dinheiroPix = 15;
const duasVezes = 1;
const acimaDuasVezes = 10;

const pagamento = -dinheiroPix;
const desconto = (pagamento / 100) * produto;
const valorComDesconto = produto + desconto;
console.log(valorComDesconto.toFixed(0));


/**Segunda opção de logica do professor */

const etiqueta = 100;
const pagamento = 1;

if (pagamento === 1) {
    console.log(etiqueta - (etiqueta * 0.1));
} else if (pagamento === 2) {
    console.log(etiqueta - (etiqueta * 0.15));
} else if (pagamento === 3) {
    console.log(etiqueta);
} else if (pagamento === 4) {
    console.log(etiqueta + (etiqueta * 0.1));
}