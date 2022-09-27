/**
 * Ejercicio 6. 
 * El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo
 * que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del
 * resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
 * El array de letras es (...)
 * Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. 
 * estos datos, elaborar un pequeño script que:
 * 1. Almacene en una variable el número de DNI indicado por el usuario y en otra variable la 
 * letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que
 * indique su número y su letra, se puede utilizar la función prompt())
 * 2. En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 
 * o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el
 * número proporcionado no es válido y el programa no muestra más mensajes.
 * 3. Si el número es válido, se calcula la letra que le corresponde según el método explicado
 * anteriormente.
 * 4. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no
 * coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es
 * correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

let letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numberDNI;
let letterDNI;
let generatedIndex;
let generatedLetter;

//Petición número
numberDNI = prompt("Introduce tu número de DNI (deben ser 9 dígitos).");
console.log("Número introducido: "+ numberDNI);
if (numberDNI<0 || numberDNI > 999999999) {
    alert("El número es incorrecto.");
} else {
    //Comprobación número y petición de letra
    letterDNI = prompt("Ahora introduce la letra en mayúscula.");
    generateLetter();
    if (letterDNI != generatedLetter) {
        alert("La letra es incorrecta.");
    } else {
        alert("El número y la letra del DNI son correctos.");
    }
}

//Función que genera la letra según números del DNI
function generateLetter() {
    generatedIndex = (numberDNI % 23);
    generatedLetter = letters[generatedIndex];
    console.log("Letra introducida: " + letterDNI);
    console.log("Letra generada: " + generatedLetter);
}