/**
 * @author Virginia Ordoño Bernier
 * @link https://adventjs.dev/challenges/03
 * @description El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 
 * Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
 * Para saber si una carta es válida, 
 * debes comprobar que los paréntesis cierran correctamente y que además, no vayan vacíos.
 * ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [
 * dentro de los paréntesis que hacen que no sean válidas. 
 * Por suerte sólo los ha dejado en medio de los paréntesis...
 * Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. 
 * ¡Y acaba con la travesura del Grinch!
 */

{
  let isValid = function (letter) {

    if (/\([a-zA-Zá-úÁ-ÚüÜñÑ]{1,}\)/.exec(letter) == null) {
      console.log(`${letter}: false`);
    } else {
      console.log(`${letter}: true`);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    letter1 = "bici coche (balón) bici coche peluche"; //true
    letter2 = "(muñeca) consola bici"; //true
    letter3 = "bici coche (balón bici coche"; //false
    letter4 = "peluche (bici [coche) bici coche balón"; //false
    letter5 = "(peluche ) bici"; //false
    letter6 = "() bici"; //false

    isValid(letter1);
    isValid(letter2);
    isValid(letter3);
    isValid(letter4);
    isValid(letter5);
    isValid(letter6);
  });
}