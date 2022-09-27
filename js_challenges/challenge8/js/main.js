/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/08
 * @description Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día
 * y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.
 * La lista de precios es un array de números y representa el tiempo de izquierda a derecha.
 * Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta
 * y no puedes vender a un precio que esté a la izquierda de la compra.
 * Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura.
 */
{
  let maxProfit = function (prices) {
    let profit = 0;
    let sell;
    let buy;

    for (let i = 0; i < prices.length; i++) {
      for (let k = i + 1; k < prices.length; k++) {
        if (prices[k] - prices[i] > profit) {
          buy = prices[i];
          sell = prices[k];
          profit = sell - buy;
        }
      }
    }
    profit > 0
      ? console.log(`${profit} (compra a ${buy}, vende a ${sell})`)
      : console.log("-1 (no hay ganancia posible)");
  };

  document.addEventListener("DOMContentLoaded", function () {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
    maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)

    const pricesEth = [10, 20, 30, 40, 50, 60, 70];
    maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)

    const pricesDoge = [18, 15, 12, 11, 9, 7];
    maxProfit(pricesDoge); // -> -1 (no hay ganancia posible)

    const pricesAda = [3, 3, 3, 3, 3];
    maxProfit(pricesAda); // -> -1 (no hay ganancia posible)
  });
}
