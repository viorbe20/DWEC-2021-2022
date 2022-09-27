/**
 * Tarea 3.1. Presentación Objetos predefinidos en JavaScript.
 * Tema: Arrays y otras Colecciones Indexadas
 * Demo: métodos modificación
 * @author Carlos Chaves y Virginia Ordoño
 */

{

   //array.slice()
   let dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
   console.log(dias.slice(0, 4)); //(4) ['lunes', 'martes', 'miércoles', 'jueves']
   console.log(dias); //(7) ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']

   //array.splice() (índice, elimina, inserta)
   let meses = ['Jan', 'March', 'April', 'June'];
   meses.splice(1, 0, 'Feb');
   console.log(meses); //["Jan", "Feb", "March", "April", "June"]

   meses.splice(4, 1, 'May');
   // En índice 4 reemplaza 1 elemento 
   console.log(meses); //["Jan", "Feb", "March", "April", "May"]

   //convierte cadena en array
   let cadena = "Hola buenos días";
   let arrayFinal = cadena.split("",3)
   console.log(arrayFinal) // ['H', 'o', 'l']
   
   //array.concat()
   let array1 = [1, 2, 3]
   let array2 = [4, 5, 6]
   let array3 = array1.concat(array2);
   let array4 = [...array1, ...array2];
   console.log(array3) // [1, 2, 3, 4, 5, 6]
   console.log(array4) // [1, 2, 3, 4, 5, 6]
}