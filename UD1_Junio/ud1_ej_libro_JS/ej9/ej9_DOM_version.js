/**
 * Ejercicio 9.
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

/**
 * Función que recibe una cadena y te comprueba si solo tiene minúsculas,
 * solo mayúsculas o ambas
 * @param {string} param
 * @returns {string}
 */
function hasUpperOrLower(param) {
  if (param === param.toUpperCase()) {
    return "La cadena '" + param + "' contiene solo mayúsculas.";
  } else if (param === param.toLowerCase()) {
    return "La cadena '" + param + "' contiene solo minúsculas.";
  }
  return "La cadena '" + param + "' contiene mayúsculas y minúsculas.";
}

document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("sentence");

  //Cuando pierda el foco va a mostrar el resultado
  input.addEventListener("blur", function () {
    //Pasamos al span
    document.getElementById("result").textContent = hasUpperOrLower(
      input.value
    );
  });
});
