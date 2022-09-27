/**
 * Tarea 3.1. Presentación Objetos predefinidos en JavaScript.
 * Tema: Arrays y otras Colecciones Indexadas
 * Demo: acceso a elementos
 * @author Carlos Chaves y Virginia Ordoño
 */

{
   //Array.length() => propiedad

   //Array con valores
   let colores = new Array('azul', 'rojo', 'verde');
   console.log(colores.length); //3
   
   //Array vacío
   let empty = [];
   console.log(empty.length); //0

   //Array indicando longitud con 0
   let longitudCero = new Array(0);
   console.log(longitudCero.length); //0

   //Array con 1 entero diferente a 0.
   let longitud = new Array(8);
   console.log(longitud.legth); //undefined

   //Acceso a array mediante índices
   let indices = [4,2,5, ,3,8]
   console.log(`Acceso mediante índices.`);
   console.log(indices[0]); //4
   console.log(indices[3]); //undefined
   console.log(indices[15]); //undefined
}