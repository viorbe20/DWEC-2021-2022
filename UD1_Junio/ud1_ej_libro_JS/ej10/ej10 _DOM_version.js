/**
 * Ejercicio 10. 
 * Definir una función que determine si la param de texto que se le pasa como parámetro es un
 * palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
 * Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
 * Nota:g: permite repetir el proceso a lo largo del string o param, de otra forma solo se eliminaría el primer espacio encontrado
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

/**
 * Limpia la cadena, eliminando caracteres innecesarios y espacios en blanco
 * @param {string} param 
 * @returns {string} 
 */
function cleanString(param) {

    //Convierte la cadena a minúsculas
    param = param.toLowerCase();

    //Elimina tildes  
    param = param.replace(/á/gi, "a");
    param = param.replace(/é/gi, "e");
    param = param.replace(/í/gi, "i");
    param = param.replace(/ó/gi, "o");
    param = param.replace(/ú/gi, "u");

    //Elimina caracteres especiales
    param = param.replace(/[^a-zA-Z ]/g, "");

    //Elimina espacios en blanco 
    param = param.replace(/\s+/g, "")
    return (param);
}

/**
 * Compara la cadena inicial con la cadena al revés
 * @param {string} param 
 * @returns {number} 
 */
function compareStrings(param) {

    //Pasamos la cadena a un array para poder invertir el orden de los caracteres
    let reversedString = Array.from(param).reverse().toString();
    //Elimina las comas
    reversedString = reversedString.replace(/\,/g, "")
    //Comparamos ambas cadenas
    let comparison = param.localeCompare(reversedString);
    return (comparison);
}

/**
 * Función que comprueba si la cadena es un palíndromo
 * @param {string} param
 * @returns {string}  
 */
function isAPalindrome(param) {
    param = cleanString(param);
    compareStrings(param);

    //Si el número devuelto es 0, es un palíndromo
    if (compareStrings(param) == 0) {
        return ("Es un palíndromo.");
    } else {
        return ("No es un palíndromo.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("sentence");

    //Cuando pierda el foco va a mostrar el resultado
    input.addEventListener("blur", function () {
        //Pasamos al span
        document.getElementById("result").textContent = isAPalindrome(
            input.value
        );
    });
});
