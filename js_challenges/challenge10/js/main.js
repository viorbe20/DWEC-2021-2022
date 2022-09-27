/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/10
 * @description Crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar
 * para dar el cambio de una compra en metálico.
 * Tenemos que crear una función que recibe el número de céntimos
 * que hay que devolver al cliente y la función
 * nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
 * La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las
 * monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor
 * número de monedas posible.
 */
{
  let getCoins = function (change) {
    let coins = [1, 2, 5, 10, 20, 50];
    let reverseCoins = coins.reverse();
    let amountCoins = [];

    reverseCoins.forEach((div) => {
      //Si el cambio es mayor o igual que la moneda se divide
      if (change >= div) {
        let amount = Math.trunc(change / div);
        amountCoins.push(amount);
        change = change - div * amount;
      } else {
        amountCoins.push(0);
      }
    });
    console.log(amountCoins.reverse());
  };

  document.addEventListener("DOMContentLoaded", function () {
    //Las monedas para cambio que puedes usar son estas:
    // coins[0] = 1 céntimo
    // coins[1] = 2 céntimos
    // coins[2] = 5 céntimos
    // coins[3] = 10 céntimos
    // coins[4] = 20 céntimos
    // coins[5] = 50 céntimos

    getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
    getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
    getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
    getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
    getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
  });
}