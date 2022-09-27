/**
 * 9. Hoisting
 * @author Virginia Ordoño Bernier
 * @date May 2022
 */

{
  // El hoisting es el comportamiento que tiene por defecto de JavaScript mediante el cual mueve las declaraciones al principio del código.
  // JavaScript solamente eleva declaraciones, no inicializaciones.
  // Las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
  // Javascript permite que una variable pueda ser declarada después de ser usada.
  let x = 1; // Inicializa x
  let y; // Eleva la declaración
  console.log(x + " " + y); // '1 undefined'
  y = 2; // Inicializa y
}
