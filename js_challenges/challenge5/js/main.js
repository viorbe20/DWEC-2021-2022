/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/05
 * @description Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre.
 * Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
 * El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día,
 * se entiende que todavía falta un día.
 * ¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura
 * (devolveríamos el número de días en negativo -):
 * Por cierto, la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2021. (actualizamos año)
 */

{
  let daysToXmas = function (date) {
    let oneDayMilliseconds = 1000 * 60 * 60 * 24;

    // 0-11 meses en JS
    let today = new Date();
    let currentYear = today.getFullYear();
    let christmas = new Date(currentYear, 11, 25);

    // Calculamos la diferencia en milisegundos
    let difference =
      Math.round(christmas.getTime() - date.getTime()) / oneDayMilliseconds;

    let result = difference.toFixed(0); //Quitamos decimales
    console.log(result);
  };

  document.addEventListener("DOMContentLoaded", function () {
    //Anteriores
    const date1 = new Date("Dec 1, 2022");
    daysToXmas(date1); // 24
    const date2 = new Date("Dec 24, 2022 00:00:01");
    daysToXmas(date2); // 1
    const date3 = new Date("Dec 24, 2022 01:59:59");
    daysToXmas(date3); // 1
    const date4 = new Date("December 20, 2022 03:24:00");
    daysToXmas(date4); // 5

    //Misma fecha
    const date = new Date("Dec 25, 2022");
    daysToXmas(date); // 0

    //Fechas futuras
    const date5 = new Date("Dec 26, 2022");
    daysToXmas(date5); // -1
    const date6 = new Date("Dec 31, 2022");
    daysToXmas(date6); // -6
    const date7 = new Date("Jan 1, 2023 00:00:01");
    daysToXmas(date7); // -7
    const date8 = new Date("Jan 1, 2023 23:59:59");
    daysToXmas(date8); // -7
  });
}
