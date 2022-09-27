/**
 * Tarea 3.1. Presentación Objetos predefinidos en JavaScript.
 * Tema: Arrays y otras Colecciones Indexadas
 * Demo: añadir y eliminar elementos de un array
 * @author Carlos Chaves y Virginia Ordoño
 */

{
   //Métodos de pila

   //array.unshift()
   let anios = new Array (2000, 2001, 2002);
   anios.unshift(2003); 
   console.log(anios) //[2003, 2000, 2001, 2002]

   //array.shift()
   let dias = new Array('lunes', 'martes', 'miércoles');
   console.log(dias.shift()); //lunes
   console.log(dias); //['martes', 'miércoles']

   //Métodos de cola

   //array.push(): 
   let colores = new Array('azul', 'rojo', 'verde');
   colores.push('amarillo');
   console.log(colores); //['azul', 'rojo', 'verde', 'amarillo']
   
   //array.pop()
   let numeros = new Array(1, 2, 3);
   console.log(numeros.pop()); //3
   console.log(numeros); //[1, 2]
   

}