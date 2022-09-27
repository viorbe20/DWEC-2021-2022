/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/06
 * @description A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.
 * La función debe devolver los dos valores del Array que sumen el resultado esperado.
 * Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par,
 * sin importar lo lejos que esté a la derecha.
 * Si no se encuentra, se devuelve null.
 * El resultado tiene que ser un array con dos números.
 * Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible
 * para no tener que recorrer las mismas situaciones dos veces?
 */

{
  let sumPairs = function (numbers, result) {
    //Cargamos las posibles combinaciones
    let sum1 = [];
    let sum2 = [];

    numbers.forEach((e) => {
      //Copiamos array
      let numbers2 = [];
      numbers2 = numbers.slice(0, numbers.length);

      //Separamos el número que vais a sumar del resto de los elementos
      let e1 = numbers2.splice(numbers.indexOf(e), 1);

      //Hacemos las comprobaciones y si coinciden, los metemos en un array
      numbers2.forEach((e2) => {
        if (e1[0] + e2 == result) {
          sum1.push(e1);
          sum2.push(e2);
        }
      });
    });

    if (sum2.length == 0) {
      console.log(`null`);
    } else {
      console.log(`[${sum1[0]}, ${sum2[0]}]`);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    sumPairs([3, 5, 7, 2], 10); // [3, 7]
    sumPairs([-3, -2, 7, -5], 10); // null
    sumPairs([2, 2, 3, 1], 4); // [2, 2]
    sumPairs([6, 7, 1, 2], 8); // [6, 2]
    sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
  });
}