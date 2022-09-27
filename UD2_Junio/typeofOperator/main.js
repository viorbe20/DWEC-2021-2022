/**
 * Tarea 2.5. Tipos de datos primitivos y objetos
 * Crea un array con distintos ejemplos de datos. Además de NaN y null incluye
 * 1. Todos los primitivos (menos Symbol()) y
 * 2. varios no primitivos (new Date()...), incluidas declaraciones de funciones
 *
 * Recórrelo con la sentencia for (no el clásico) y utiliza:
 * 1. typeof para indicar si es o no primitivo
 * 2. instanceof para averiguar el tipo de objeto que es (Array, String...)
 *
 * En caso de ser primitivo, indica:
 * PRIMITIVO - (tipo de primitivo) - valor
 *
 * En caso de ser objeto, indica:
 * OBJETO - (true) - de tipo Constructor - valor
 *
 * Utiliza:
 * 1. objeto.constructor.name para el operador instanceof.
 * 2. template String para evitar la concatenación de cadenas
 * 3. error.message en caso de tener que capturar una excepción
 * @author Virginia Ordoño Bernier
 * @date October 2021st
 */

//Creamos el array
let mixedArray = [null, 10, 20n, "Hola", undefined, true, function addition(a, b) { let suma = a + b; }, (today = new Date()), (weekend = ["sábado", "domingo"]), NaN];

for (let element of mixedArray) {

  if (typeof element == "object" || typeof element == "function") {
    try {
      console.log("OBJETO - " + (element instanceof element.constructor) + " - VALOR: " + element);
    } catch (error) {
      console.warn(error.message);
    }
  } else {
    console.log("DATO PRIMITIVO - TIPO:" + typeof element + " - VALOR: " + element);
  }


}

