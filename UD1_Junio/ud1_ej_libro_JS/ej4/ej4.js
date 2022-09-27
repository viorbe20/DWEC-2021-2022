/**
 * Ejercicio 4. 
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola","adios", 2];
 * 1. Determinar cual de los dos elementos de texto es mayor.
 * 2. Utilizando exclusivamente los dos valores booleanos del array, 
 * determinar los operadores necesarios para obtener un resultado true y otro resultado false.
 * 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
 * elementos numéricos
 * @author Virginia Ordoño Bernier
 * @date octubre 2021
 * @source Introducción a JavaScript. Javier Eguíluz Pérez (Ed. 2019).
 */

let values = [true, 5, false, "hola","adios", 2];
let trueResult;
let falseResult;

//Elemento de texto mayor
if (values[3] > values[4]) {
    console.log("1. " + values[3] + " es mayor que " + values[4]);
} else {
    console.log("1. " + values[4] + " es mayor que " + values[3]);
}

//Un resultado true y otro false
falseResult = values[0] == values[2] ; 
console.log("2. Resultado false. Operador == : " + falseResult);
trueResult = values[0] != values[2] ; 
console.log("2. Resultado true. Operador != : " + trueResult);

//Operaciones matemáticas con elementos numéricos
let addition = values[1] + values[5];
let substraction = values[1] - values[5];
let multiplication = values[1] * values[5];
let division = values[1] + values[5];

console.log("3. Operaciones matemáticas con elementos numéricos (5 y 2).");
console.log("-> Suma: " + addition);
console.log("-> Resta: " + substraction);
console.log("-> Multiplicación: " + multiplication);
console.log("-> División: " + division);