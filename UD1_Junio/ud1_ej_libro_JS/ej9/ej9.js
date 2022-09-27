/**
 * Ejercicio 9. 
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

{
    //Declaramos tres variables con 3 casos diferentes
    let example1 = "solo hay minúsculas";
    let example2 = "SOLO HAY MAYÚSCULAS";
    let example3 = "Hay mayúsculas y minúsculas";
  
    /**
     * Función que recibe una cadena y te comprueba si solo tiene minúsculas,
     * solo mayúsculas o ambas
     * @param {string} param 
     * @returns {string}
     */
    function hasUpperOrLower(param) {

        if (param == param.toUpperCase()) {
            return("La cadena '" + param + "' contine solo mayúsculas."); 
        } else if (param == param.toLowerCase()) {
            return("La cadena '" + param + "' contine solo minúsculas."); 
        } else {
            return("La cadena '" + param + "' contine mayúsculas y minúsculas."); 
        }  
    }

    //Salida por consola de los tres casos
    console.log(hasUpperOrLower(example1));
    console.log(hasUpperOrLower(example2));
    console.log(hasUpperOrLower(example3));
}