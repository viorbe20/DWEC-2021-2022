/**
 * Tarea 3.1. Presentación Objetos predefinidos en JavaScript.
 * Tema: Arrays y otras Colecciones Indexadas
 * Demo: definir un array
 * @author Carlos Chaves y Virginia Ordoño
 */

{
   //Forma tradicional
   let colores = new Array('azul', 'rojo', 'verde');
   console.log(colores);
   //resultado => ['azul', 'rojo', 'verde']

   //Con corchetes
   let numeros = [23, 66, 132];
   console.log(numeros);
   //resultado => [23, 66, 132]

   //Array mixto
   let mixto = ['azul', 34, 5.7, true, , {}, [], NaN, null];
   console.log(mixto); 
   //resultado => ['azul', 34, 5.7, true, empty, {…}, Array(0), NaN, null]
   
   //Array vacío
   let empty = [];
   console.log(empty);
   //resultado => []

   //Array con 1 entero => longitud
   let longitud = new Array(8);
   console.log(longitud);
   //resultado => (8) [empty × 8]

   //Array con dos enteros o más => array de enteros 
   let enteros = new Array(8, 5);
   console.log(enteros);
   //resultado => (2) [8, 5]

   //Array.of => un entero
   let arrayUnElemento = Array.of(3);
   console.log(arrayUnElemento);
   //resultado => [3]
   
}